"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"

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
  const { user, isLoading } = useKindeBrowserClient()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const AuthButtons = () => {
    if (isLoading) return null

    if (user) {
      return (
        <div className="flex items-center space-x-4">
          <Link 
            href="/profile" 
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
          >
            <User className="h-5 w-5" />
            <span className="text-sm font-medium">
              {user.given_name || user.email}
            </span>
          </Link>
          <LogoutLink>
            <Button 
              variant="outline" 
              size="sm"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white dark:border-red-400 dark:text-red-400 dark:hover:bg-red-400 dark:hover:text-gray-900 transition-all duration-200"
            >
              Log Out
            </Button>
          </LogoutLink>
        </div>
      )
    }

    return (
      <>
        <LoginLink>
          <Button 
            variant="outline" 
            size="sm"
            className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-400 dark:hover:text-gray-900 transition-all duration-200"
          >
            Log In
          </Button>
        </LoginLink>
        <RegisterLink>
          <Button 
            size="sm"
            className="bg-amber-500 text-white hover:bg-amber-600 dark:bg-amber-400 dark:text-gray-900 dark:hover:bg-amber-500 transition-all duration-200"
          >
            Sign Up
          </Button>
        </RegisterLink>
      </>
    )
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gradient">DevOpsHub</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center flex-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
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
              className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <AuthButtons />
          </div>
          <div className="flex items-center md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 mr-2"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
            <AuthButtons />
          </div>
        </div>
      )}
    </nav>
  )
}

