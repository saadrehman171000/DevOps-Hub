import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Video, Globe, FileText, Users } from 'lucide-react'

const resources = [
  {
    title: "Free Coursess",
    description: "Expand your DevOps knowledge with these free online courses.",
    icon: BookOpen,
    items: [
      { name: "Introduction to DevOps", link: "https://www.coursera.org/learn/intro-to-devops" },
      { name: "DevOps Fundamentals", link: "https://www.edx.org/course/devops-fundamentals" },
      { name: "CI/CD with Jenkins", link: "https://www.udemy.com/course/jenkins-from-zero-to-hero/" },
    ]
  },
  {
    title: "Recommended Books",
    description: "Must-read books for aspiring DevOps engineers.",
    icon: BookOpen,
    items: [
      { name: "The Phoenix Project", link: "https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/1942788290" },
      { name: "Continuous Delivery", link: "https://www.amazon.com/Continuous-Delivery-Deployment-Automation-Addison-Wesley/dp/0321601912" },
      { name: "The DevOps Handbook", link: "https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002" },
    ]
  },
  {
    title: "Video Tutorials",
    description: "Visual learners can benefit from these DevOps video series.",
    icon: Video,
    items: [
      { name: "DevOps Tutorial for Beginners", link: "https://www.youtube.com/watch?v=Xrgk023l4lI" },
      { name: "Docker Crash Course", link: "https://www.youtube.com/watch?v=fqMOX6JJhGo" },
      { name: "Kubernetes Tutorial for Beginners", link: "https://www.youtube.com/watch?v=X48VuDVv0do" },
    ]
  },
  {
    title: "External Resources",
    description: "Stay updated with the latest in DevOps through these external resources.",
    icon: Globe,
    items: [
      { name: "DevOps.com", link: "https://devops.com/" },
      { name: "The DevOps Podcast", link: "https://thedevopspodcast.com/" },
      { name: "DevOps Subreddit", link: "https://www.reddit.com/r/devops/" },
    ]
  },
]

const cheatSheets = [
  { name: "Git Commands Cheat Sheet", link: "/cheatsheets/git-commands.pdf" },
  { name: "Docker Commands Cheat Sheet", link: "/cheatsheets/docker-commands.pdf" },
  { name: "Kubernetes Cheat Sheet", link: "/cheatsheets/kubernetes.pdf" },
]

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <h1 className="text-3xl font-bold mb-8">DevOps Resources</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <resource.icon className="h-6 w-6 text-amber-600" />
                <CardTitle>{resource.title}</CardTitle>
              </div>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {resource.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Downloadable Cheat Sheets</h2>
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-amber-600" />
            <CardTitle>Quick Reference Guides</CardTitle>
          </div>
          <CardDescription>Download these handy cheat sheets for quick reference to common DevOps tools and practices.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {cheatSheets.map((sheet, index) => (
              <li key={index}>
                <Button asChild variant="link" className="p-0">
                  <Link href={sheet.link} download>
                    {sheet.name}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
        <p className="mb-4">Connect with other DevOps enthusiasts, share your knowledge, and get help when you need it.</p>
        <Button asChild>
          <Link href="/community">
            <Users className="mr-2 h-4 w-4" /> Join the Discussion
          </Link>
        </Button>
      </div>
    </div>
  )
}

