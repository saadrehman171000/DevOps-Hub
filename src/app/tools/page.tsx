"use client"

import { useState } from 'react'
import { getTools, getToolCategories } from '@/lib/tools'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'

export default function ToolsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const tools = getTools()
  const categories = getToolCategories()

  const filteredTools = tools.filter(tool => 
    (tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     tool.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === 'all' || tool.category === selectedCategory)
  )

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <h1 className="text-3xl font-bold mb-8">DevOps Tools</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem 
                key={category} 
                value={category || 'uncategorized'}
              >
                {category || 'Uncategorized'}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <Card key={tool.id} className="flex flex-col">
            <CardHeader>
              <div className="w-16 h-16 mb-4 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-3xl">{getToolIcon(tool.icon)}</span>
              </div>
              <CardTitle>{tool.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-slate-600 dark:text-slate-400">{tool.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-sm text-slate-500 dark:text-slate-400">{tool.category}</span>
              <Button asChild variant="ghost" size="sm">
                <Link href={tool.tutorialLink}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <p className="text-center text-slate-500 dark:text-slate-400 mt-8">
          No tools found matching your search criteria.
        </p>
      )}
    </div>
  )
}

function getToolIcon(iconName: string): string {
  const iconMap: { [key: string]: string } = {
    docker: "🐳",
    kubernetes: "☸️",
    jenkins: "👷",
    terraform: "🏗️",
    ansible: "📚",
    prometheus: "🔥",
    git: "🌿",
    grafana: "📊",
  };

  return iconMap[iconName] || "🛠️";
}

