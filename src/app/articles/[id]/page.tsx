import { notFound } from 'next/navigation'
import { getArticleById } from '@/lib/articles'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, User } from 'lucide-react'
import Image from 'next/image'
import Markdown from 'react-markdown'

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await getArticleById(params.id)

  if (!article) {
    notFound()
  }

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Markdown>{article.content}</Markdown>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-card rounded-lg p-6">
                <h4 className="font-semibold mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-lg p-6">
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <nav className="space-y-2">
                  <a href="#installation" className="block text-muted-foreground hover:text-primary">Installation</a>
                  <a href="#prerequisites" className="block text-muted-foreground hover:text-primary">Prerequisites</a>
                  <a href="#content" className="block text-muted-foreground hover:text-primary">Content</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

