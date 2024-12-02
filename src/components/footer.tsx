import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">DevOpsHub</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Your one-stop resource for DevOps tools and best practices.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">About</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <form className="space-y-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">&copy; 2023 DevOpsHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

