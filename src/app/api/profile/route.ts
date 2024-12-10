import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { isAuthenticated, getUser } = getKindeServerSession()
  const authStatus = await isAuthenticated()

  if (!authStatus) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  try {
    const user = await getUser()
    const body = await request.json()

    // Here you would typically update the user's profile in your database
    // For now, we'll just return a success response
    return NextResponse.json({ 
      success: true, 
      message: "Profile updated successfully",
      user: {
        ...user,
        ...body
      }
    })
  } catch (error) {
    console.error('Error updating profile:', error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

