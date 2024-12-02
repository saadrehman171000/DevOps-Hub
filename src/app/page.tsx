import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code2, Database, GitBranch, Server, Terminal, Users } from 'lucide-react'
import Link from "next/link"

const features = [
  {
    title: "Infrastructure as Code",
    description: "Learn to manage your infrastructure using code with tools like Terraform and Ansible",
    icon: Server,
  },
  {
    title: "Continuous Integration",
    description: "Master CI/CD pipelines with Jenkins, GitHub Actions, and GitLab CI",
    icon: GitBranch,
  },
  {
    title: "Container Orchestration",
    description: "Deploy and manage containers at scale with Kubernetes and Docker",
    icon: Database,
  },
  {
    title: "Automation",
    description: "Automate repetitive tasks and streamline your development workflow",
    icon: Terminal,
  },
  {
    title: "Best Practices",
    description: "Learn industry-standard DevOps practices and methodologies",
    icon: Code2,
  },
  {
    title: "Community",
    description: "Join a community of DevOps engineers and share your knowledge",
    icon: Users,
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Master DevOps Engineering
              </h1>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
                Your one-stop resource for learning DevOps tools, practices, and methodologies. Start your journey to becoming a DevOps expert today.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link href="/articles">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to master DevOps
                </h2>
                <p className="max-w-[600px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  Our platform provides comprehensive resources and tools to help you become a proficient DevOps engineer.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {features.map((feature) => (
              <Card key={feature.title} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 mb-4 text-amber-600" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to start your DevOps journey?
              </h2>
              <p className="max-w-[600px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                Join thousands of engineers who are transforming their careers with DevOpsHub.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/tools">Explore Tools</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/resources">View Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

