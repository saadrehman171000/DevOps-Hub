import { Infinity } from 'lucide-react'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative size-8 transform rotate-90">
        <Infinity className="size-8 text-purple-600 dark:text-purple-400" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
        DevOpsHub
      </span>
    </Link>
  )
}

