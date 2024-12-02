import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { StarIcon } from 'lucide-react'

const testimonials = [
  {
    name: "Alice Johnson",
    role: "DevOps Engineer",
    company: "TechCorp",
    avatar: "/avatars/alice.jpg",
    content: "Implementing CI/CD pipelines with Jenkins and GitLab CI helped us reduce deployment times by 50%. The resources on DevOpsHub were instrumental in our success.",
    rating: 5,
  },
  {
    name: "Bob Smith",
    role: "Software Developer",
    company: "InnoSoft",
    avatar: "/avatars/bob.jpg",
    content: "The Docker tutorials on DevOpsHub allowed our team to containerize our application effortlessly. We saw a significant improvement in our development workflow.",
    rating: 4,
  },
  {
    name: "Carol Davis",
    role: "IT Manager",
    company: "DataDynamics",
    avatar: "/avatars/carol.jpg",
    content: "DevOpsHub's Kubernetes guides helped us scale our microservices architecture efficiently. Our system's reliability has improved dramatically since implementation.",
    rating: 5,
  },
]

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <h1 className="text-3xl font-bold mb-8">Success Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                </div>
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
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Share Your Success Story</h2>
        <p className="mb-4">Has DevOps transformed your workflow? We'd love to hear about it!</p>
        <Button>Submit Your Testimonial</Button>
      </div>
    </div>
  )
}

