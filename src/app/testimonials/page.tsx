import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { StarIcon } from 'lucide-react'
import TestimonialForm from "@/components/TestimonialForm"
import { PrismaClient } from '@prisma/client'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import DeleteButton from "@/components/DeleteButton"

const prisma = new PrismaClient()

// Define the Testimonial type locally instead of importing from Prisma
interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  userId: string;
  createdAt: Date;
}

async function TestimonialsPage() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  const testimonials = await prisma.testimonial.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <h1 className="text-3xl font-bold mb-8">Success Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial: Testimonial) => (
          <Card key={testimonial.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>
                      {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <DeleteButton
                  testimonialId={testimonial.id}
                  userId={testimonial.userId}
                  currentUserId={user.id}
                />
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 fill-current text-yellow-500" />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <TestimonialForm />
    </div>
  )
}

export default TestimonialsPage