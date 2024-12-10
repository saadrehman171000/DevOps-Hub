import { NextRequest, NextResponse } from 'next/server'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(testimonials);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const { isAuthenticated, getUser } = getKindeServerSession()
  const authStatus = await isAuthenticated()

  if (!authStatus) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  try {
    const user = await getUser()
    const body = await request.json()
    const { role, company, content, rating } = body

    const testimonial = await prisma.testimonial.create({
      data: {
        name: `${user.given_name} ${user.family_name}`,
        role,
        company,
        content,
        rating: Number(rating),
        userId: user.id,
      },
    })

    return NextResponse.json(
      { message: 'Testimonial submitted successfully', testimonial },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting testimonial:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  const { isAuthenticated, getUser } = getKindeServerSession()
  const authStatus = await isAuthenticated()

  if (!authStatus) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  try {
    const { id } = await request.json()
    const user = await getUser()
    
    // Get the testimonial to check ownership
    const testimonial = await prisma.testimonial.findUnique({
      where: { id }
    })

    // Check if testimonial exists and belongs to the user
    if (!testimonial || testimonial.userId !== user.id) {
      return NextResponse.json({ error: 'Not authorized to delete this testimonial' }, { status: 403 })
    }

    // Delete the testimonial
    await prisma.testimonial.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Testimonial deleted successfully' })
  } catch (error) {
    console.error('Error deleting testimonial:', error)
    return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 })
  }
}