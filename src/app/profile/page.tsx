'use client'

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner"

export default function ProfilePage() {
  const { user, isLoading } = useKindeBrowserClient()
  const [isEditing, setIsEditing] = useState(false)
  const [bio, setBio] = useState("")
  const [website, setWebsite] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Initialize user data once auth is loaded
    if (!isLoading && user && !isInitialized) {
      // Here you would typically fetch the user's profile data from your backend
      setBio(user.given_name ? `Hi, I'm ${user.given_name}!` : "")
      setIsInitialized(true)
    }
  }, [isLoading, user, isInitialized])

  // Show loading skeleton while authentication is being checked
  if (isLoading || !isInitialized) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="space-y-6">
          <Skeleton className="h-12 w-48" />
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Skeleton className="h-8 w-40" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Skeleton className="h-8 w-40" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-10 w-32" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Show error state if user is not authenticated
  if (!user) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <h2 className="text-xl font-semibold">Not Authenticated</h2>
            <p className="text-muted-foreground mt-2">Please log in to view your profile.</p>
            <Button asChild className="mt-4">
              <a href="/api/auth/login">Log In</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      // Here you would typically make an API call to save the user's bio and website
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bio, website }),
      })

      if (!response.ok) {
        throw new Error('Failed to update profile')
      }

      toast.success("Profile updated successfully")
      setIsEditing(false)
    } catch (error) {
      toast.error("Failed to update profile")
      console.error('Error updating profile:', error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-8">
      <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>Name</Label>
                <p className="text-lg">{user.given_name} {user.family_name}</p>
              </div>
              <div>
                <Label>Email</Label>
                <p className="text-lg">{user.email}</p>
              </div>
              <div>
                <Label>User ID</Label>
                <p className="text-sm text-muted-foreground">{user.id}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profile Details</CardTitle>
          </CardHeader>
          <CardContent>
            {isEditing ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://your-website.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell us about yourself..."
                    rows={4}
                  />
                </div>
                <div className="flex space-x-2">
                  <Button onClick={handleSave} disabled={isSaving}>
                    {isSaving ? "Saving..." : "Save Changes"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                    disabled={isSaving}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label>Website</Label>
                  <p className="text-lg">{website || "Not set"}</p>
                </div>
                <div>
                  <Label>Bio</Label>
                  <p className="text-lg whitespace-pre-wrap">{bio || "No bio yet"}</p>
                </div>
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

