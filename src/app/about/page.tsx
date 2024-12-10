import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, GitBranch, Rocket } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <h1 className="text-3xl font-bold mb-8">About DevOpsHub</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            At DevOpsHub, our mission is to empower developers and IT professionals with the knowledge and skills 
            needed to excel in the world of DevOps. We believe that by bridging the gap between development and 
            operations, we can help create more efficient, reliable, and innovative software solutions.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            DevOpsHub was born out of a passion for continuous learning and a desire to share knowledge with the 
            community. As DevOps practitioners ourselves, we experienced firsthand the challenges of finding 
            comprehensive, up-to-date resources for learning and implementing DevOps practices.
          </p>
          <p>
            We created this platform to provide a centralized hub of curated content, practical tutorials, and 
            a supportive community for anyone interested in DevOps. Our team of experienced professionals is 
            dedicated to creating high-quality, accessible content that helps you stay ahead in the fast-paced 
            world of software development and IT operations.
          </p>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Why DevOps Matters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <Code className="h-8 w-8 mb-2 text-amber-600" />
            <CardTitle>Faster Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            DevOps practices enable teams to release software faster and more frequently, 
            allowing businesses to respond quickly to market demands and user feedback.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <GitBranch className="h-8 w-8 mb-2 text-amber-600" />
            <CardTitle>Improved Collaboration</CardTitle>
          </CardHeader>
          <CardContent>
            By breaking down silos between development and operations teams, DevOps fosters 
            a culture of shared responsibility and better communication.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Rocket className="h-8 w-8 mb-2 text-amber-600" />
            <CardTitle>Enhanced Quality</CardTitle>
          </CardHeader>
          <CardContent>
            Automation and continuous integration/delivery practices lead to more reliable 
            software with fewer bugs and faster resolution of issues.
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Join Us on Your DevOps Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Whether you're just starting out or looking to enhance your existing DevOps skills, 
            DevOpsHub is here to support you every step of the way. Explore our resources, engage 
            with our community, and take your career to the next level.
          </p>
          <Button asChild>
            <Link href="/articles">
              Start Learning <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

