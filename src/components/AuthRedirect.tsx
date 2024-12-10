"use client"

import { useEffect } from 'react'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { useRouter } from 'next/navigation'

export default function AuthRedirect() {
  const { isAuthenticated, isLoading } = useKindeBrowserClient()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/api/auth/register')
    }
  }, [isAuthenticated, isLoading, router])

  return null
} 