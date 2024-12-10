import { MDXRemote } from 'next-mdx-remote/rsc'
import { getArticleById } from '@/lib/articles'
import { Badge } from '@/components/ui/badge'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

// Import specific Next.js types
import { ResolvingMetadata } from 'next'

// Add this near the top of the file
import Image from 'next/image'

type PageProps = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: PageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const article = await getArticleById(params.id)
  
  if (!article) {
    return {
      title: 'Article Not Found'
    }
  }

  return {
    title: article.title,
    description: article.content.slice(0, 160)
  }
}

// Explicitly type the page component as a React Server Component
import { ReactElement } from 'react'

export default async function ArticlePage(
  { params }: PageProps
): Promise<ReactElement> {
  const article = await getArticleById(params.id)

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {article.author} • {article.date}
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {article.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="relative w-full h-64 mb-8">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={article.content} />
      </div>
    </div>
  )
}

