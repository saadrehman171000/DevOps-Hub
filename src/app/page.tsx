import AuthRedirect from '@/components/AuthRedirect'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code2, Database, GitBranch, Server, Terminal, Users, CheckCircle, Rocket, Trophy } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

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

const benefits = [
  {
    title: "Learn at Your Pace",
    description: "Access course materials 24/7 and learn at your own speed",
    icon: CheckCircle,
  },
  {
    title: "Hands-on Experience",
    description: "Practice with real-world projects and scenarios",
    icon: Rocket,
  },
  {
    title: "Career Growth",
    description: "Advance your career with in-demand DevOps skills",
    icon: Trophy,
  },
]

export default function Home() {
  return (
    <>
      <AuthRedirect />
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary via-primary/90 to-primary/80">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Master DevOps Engineering
                </h1>
                <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl">
                  Your one-stop resource for learning DevOps tools, practices, and methodologies. Start your journey to becoming a DevOps expert today.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
                  <Link href="/articles">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900" />
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-center justify-center text-center">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-purple-600 dark:text-purple-400">10K+</h3>
                <p className="text-gray-600 dark:text-gray-400">Active Learners</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-purple-600 dark:text-purple-400">500+</h3>
                <p className="text-gray-600 dark:text-gray-400">Video Tutorials</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-purple-600 dark:text-purple-400">95%</h3>
                <p className="text-gray-600 dark:text-gray-400">Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-600 dark:text-purple-400">
                    Features
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900 dark:text-white">
                    Everything you need to master DevOps
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our platform provides comprehensive resources and tools to help you become a proficient DevOps engineer.
                  </p>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden">
                <Image 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="DevOps Platform Preview"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              {features.map((feature) => (
                <Card key={feature.title} className="relative overflow-hidden bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 mb-4 text-purple-600 dark:text-purple-400" />
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900 dark:text-white">Why Choose DevOpsHub?</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">
                Accelerate your learning with our comprehensive platform
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <benefit.icon className="h-12 w-12 mb-4 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-600 dark:bg-purple-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">
                  Ready to start your DevOps journey?
                </h2>
                <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of engineers who are transforming their careers with DevOpsHub.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="bg-white text-purple-700 hover:bg-gray-100 hover:text-purple-800">
                  <Link href="/tools">Explore Tools</Link>
                </Button>
                <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link href="/resources">View Resources</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

