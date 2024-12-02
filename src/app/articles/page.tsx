import Link from 'next/link'
import Image from 'next/image'
import { getArticles, getCategories, getTags } from '@/lib/articles'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const pageParam = searchParams?.page
  const pageNumber = pageParam ? parseInt(pageParam) : 1
  const { articles, totalPages } = getArticles(pageNumber, 6)
  const categories = getCategories()
  const tags = getTags()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">DevOps Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={article.thumbnail || 'https://placehold.co/300x200'}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <CardTitle className="text-xl mb-2">
                    <Link href={`/articles/${article.id}`} className="hover:underline">
                      {article.title}
                    </Link>
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 text-sm text-gray-500 dark:text-gray-400">
                  {article.author} • {article.date}
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex justify-center space-x-2">
            {pageNumber > 1 && (
              <Button variant="outline" asChild>
                <Link href={`/articles?page=${pageNumber - 1}`}>Previous</Link>
              </Button>
            )}
            {pageNumber < totalPages && (
              <Button variant="outline" asChild>
                <Link href={`/articles?page=${pageNumber + 1}`}>Next</Link>
              </Button>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2 mb-8">
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/articles?category=${category}`} className="hover:underline">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                <Link href={`/articles?tag=${tag}`}>{tag}</Link>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

