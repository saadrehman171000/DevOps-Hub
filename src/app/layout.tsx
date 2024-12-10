import { ThemeProvider as NextThemeProvider } from 'next-themes'
import Navbar from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from 'next/navigation'
import { Toaster } from "sonner"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevOpsHub',
  description: 'Your one-stop resource for DevOps tools and best practices',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get authentication session status from Kinde
  const { isAuthenticated } = getKindeServerSession()
  const authStatus = await isAuthenticated()

  // Redirect to login page if user is not authenticated
  if (!authStatus) {
    redirect('/api/auth/login')
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </NextThemeProvider>
      </body>
    </html>
  )
}
