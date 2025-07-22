"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation"

export const SigninAuth = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)  // Error state to manage error messages
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null) 
    
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false
      })
  
      if (result?.error) {
        setError("Invalid credentials. Please try again.") // Set the error message here
      } else {
        router.push("/dashboard")
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.") // Handle unexpected errors
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-center mx-auto w-full max-w-md bg-gradient-to-b from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
      <div className="space-y-2 text-center mb-6">
        <h1 className="text-3xl font-bold text-white">Welcome back</h1>
        <p className="text-slate-400">Sign in to your account</p>
      </div>
      
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-3">
          <Label htmlFor="email" className="text-slate-300 font-medium">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="border-slate-700 bg-slate-900/50 text-slate-200 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-purple-500 hover:border-slate-600 transition-colors"
          />
        </div>

        <div className="space-y-3">
          <div className="items-center">
            <Label htmlFor="password" className="text-slate-300 font-medium">
              Password
            </Label>
          </div>
          
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              minLength={6}
              className="border-slate-700 bg-slate-900/50 text-slate-200 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-purple-500 hover:border-slate-600 transition-colors pr-10"
            />
            <Button 
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-0 h-full px-3 py-2 text-slate-400 hover:text-slate-300 hover:bg-transparent"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white shadow-lg shadow-purple-500/20 transition-all duration-300"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </Button>

        <p className="text-center text-sm text-slate-400 pt-2">
          Don't have an account?{" "}
          <Link 
            href="/signup" 
            className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}
