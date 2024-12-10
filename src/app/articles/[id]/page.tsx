import { notFound } from 'next/navigation'
import { getArticleById } from '@/lib/articles'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, User } from 'lucide-react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await getArticleById(params.id)

  if (!article) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center gap-2 bg-black/30 rounded-full px-4 py-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 rounded-full px-4 py-2">
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
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({node, ...props}) => <h1 className="text-4xl font-bold mt-8 mb-4 text-primary" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-3xl font-bold mt-8 mb-4 text-primary/90" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-2xl font-bold mt-6 mb-3 text-primary/80" {...props} />,
                  h4: ({node, ...props}) => <h4 className="text-xl font-semibold mt-4 mb-2" {...props} />,
                  p: ({node, ...props}) => <p className="my-4 leading-relaxed text-muted-foreground" {...props} />,
                  ul: ({node, ...props}) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
                  ol: ({node, ...props}) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
                  li: ({node, ...props}) => <li className="text-muted-foreground" {...props} />,
                  code({node, className, children, ...props}: any) {
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                      <div className="relative group">
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          className="rounded-lg my-4 bg-zinc-950 shadow-xl"
                          showLineNumbers
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm" {...props}>
                        {children}
                      </code>
                    )
                  },
                  a: ({node, ...props}) => <a className="text-primary underline underline-offset-4 hover:text-primary/80" {...props} />,
                  blockquote: ({node, ...props}) => (
                    <blockquote className="mt-6 border-l-4 border-primary pl-6 italic text-muted-foreground" {...props} />
                  ),
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4 text-lg">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
                <nav className="space-y-2">
                  <a href="#installation" className="block text-muted-foreground hover:text-primary transition-colors">Installation</a>
                  <a href="#prerequisites" className="block text-muted-foreground hover:text-primary transition-colors">Prerequisites</a>
                  <a href="#content" className="block text-muted-foreground hover:text-primary transition-colors">Content</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

