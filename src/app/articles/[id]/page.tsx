import { getArticleById } from '@/lib/articles'
import { Badge } from '@/components/ui/badge'
import { notFound } from 'next/navigation'

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getArticleById(params.id)

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
      <div className="prose dark:prose-invert max-w-none">
        {article.content}
      </div>
    </div>
  )
}

