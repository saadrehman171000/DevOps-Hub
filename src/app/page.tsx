"use client"
import { useEffect } from 'react';
import AuthRedirect from '@/components/AuthRedirect'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code2, Database, GitBranch, Server, Terminal, Users, CheckCircle, Rocket, Trophy } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    title: "Continuous Integration",
    description: "Automate your build and test processes for faster development cycles.",
    icon: GitBranch
  },
  {
    title: "Containerization",
    description: "Master Docker and Kubernetes for efficient application deployment.",
    icon: Code2
  },
  {
    title: "Infrastructure as Code",
    description: "Manage your infrastructure with Terraform and Ansible.",
    icon: Server
  },
  {
    title: "Monitoring and Logging",
    description: "Implement robust solutions for system observability.",
    icon: Terminal
  },
  {
    title: "Cloud Platforms",
    description: "Gain expertise in AWS, Azure, and Google Cloud Platform.",
    icon: Database
  },
  {
    title: "Collaboration",
    description: "Learn best practices for effective DevOps teamwork.",
    icon: Users
  }
];

const benefits = [
  {
    title: "Hands-on Learning",
    description: "Practice with real-world projects and scenarios.",
    icon: CheckCircle
  },
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience.",
    icon: Trophy
  },
  {
    title: "Career Advancement",
    description: "Boost your career prospects in the growing field of DevOps.",
    icon: Rocket
  }
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AuthRedirect />
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-48 bg-gradient-custom overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in">
                Master DevOps Engineering
              </h1>
              <p className="max-w-[700px] text-lg text-white/80 md:text-xl animate-slide-up">
                Your one-stop resource for learning DevOps tools, practices, and methodologies. Start your journey to becoming a DevOps expert today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-amber-600 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Link href="/articles">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-amber-600 transition-all duration-300"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-center justify-center text-center">
              {[
                { number: "10K+", label: "Active Learners" },
                { number: "500+", label: "Video Tutorials" },
                { number: "95%", label: "Success Rate" },
              ].map((stat, index) => (
                <div key={index} className="space-y-2 animate-on-scroll">
                  <h3 className="text-4xl font-bold text-gradient">{stat.number}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
                Everything you need to master DevOps
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Our platform provides comprehensive resources and tools to help you become a proficient DevOps engineer.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={feature.title} className="relative overflow-hidden bg-white dark:bg-gray-900 hover-lift card-shadow animate-on-scroll">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 mb-4 text-amber-500" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-20 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
                Why Choose DevOpsHub?
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Accelerate your learning with our comprehensive platform
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover-lift card-shadow animate-on-scroll">
                  <benefit.icon className="h-12 w-12 mb-4 text-amber-500" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-custom">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl animate-on-scroll">
                Ready to start your DevOps journey?
              </h2>
              <p className="max-w-[600px] text-lg text-white/80 md:text-xl animate-on-scroll">
                Join thousands of engineers who are transforming their careers with DevOpsHub.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-on-scroll">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Link href="/tools">Explore Tools</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-amber-600 transition-all duration-300"
                >
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

