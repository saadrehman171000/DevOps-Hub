"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Articles', href: '/articles' },
  { name: 'DevOps Tools', href: '/tools' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
  { name: 'Testimonials', href: '/testimonials' },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">DevOpsHub</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center flex-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white dark:text-green-400 dark:border-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 transition-all duration-200"
            >
              Log In
            </Button>
            <Button 
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white transition-all duration-200 transform hover:scale-105"
            >
              Sign Up
            </Button>
          </div>
          <div className="flex items-center md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 mr-2"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 space-y-2">
              <Button 
                variant="outline" 
                className="w-full text-green-600 border-green-600 hover:bg-green-600 hover:text-white dark:text-green-400 dark:border-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900 transition-all duration-200"
              >
                Log In
              </Button>
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-200"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

