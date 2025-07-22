"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter() // ✅ Initialize Next.js router

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const animationClasses = isVisible ? "animate-in fade-in slide-in-from-bottom-5 duration-700" : "opacity-0"

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black to-slate-900 py-12 md:py-20">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Content Section */}
          <div className={cn("space-y-6 pt-10 text-center lg:text-left lg:pl-8 xl:pl-12", animationClasses)}>
            <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm text-slate-300 shadow-sm backdrop-blur-sm">
              <Code2 className="mr-1 h-3.5 w-3.5" />
              <span>1000+ Coding Challenges</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Master Coding Challenges.
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Land Your Dream Job.
              </span>
            </h1>

            <p className="mx-auto max-w-md text-lg text-slate-400 md:text-xl lg:mx-0">
              Practice with coding challenges, ace technical interviews, and track your progress with detailed
              analytics.
            </p>

            {/* Buttons with Navigation */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-purple-600/20"
                onClick={() => router.push("/problems")} // ✅ Navigate to /problems
              >
                Start Practicing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-700 text-white hover:bg-slate-800/70 transition-all duration-300"
                onClick={() => router.push("/problems")} // ✅ Navigate to /problems
              >
                View Challenges
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-slate-400 lg:justify-start">
              <div className="flex items-center">
                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500"></div>
                <span>100+ Companies</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                <span>10,000+ Users</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Code Editor Section */}
          <div
            className={cn(
              "relative mx-auto w-full max-w-md lg:max-w-none lg:pr-8 xl:pr-12",
              isVisible ? "animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300" : "opacity-0",
            )}
          >
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 opacity-70 blur-lg"></div>
            <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900 p-1 shadow-xl">
              {/* Header */}
              <div className="flex items-center border-b border-slate-700 bg-slate-800/50 px-4 py-2">
                <div className="flex space-x-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs font-medium text-slate-400">twoSum.ts</div>
              </div>

              {/* Code Content */}
              <pre className="overflow-x-auto p-4 text-sm text-slate-300">
                <code className="font-mono">{`function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}`}</code>
              </pre>

              {/* Status Bar */}
              <div className="flex items-center justify-between border-t border-slate-700 bg-slate-800/50 px-4 py-3">
                <Badge variant="outline" className="border-green-500/20 bg-green-500/10 text-green-500 font-medium">
                  Accepted
                </Badge>
                <div className="text-xs text-slate-400">
                  Runtime: <span className="font-semibold text-green-400">76ms</span> | Memory:{" "}
                  <span className="font-semibold text-green-400">42.5MB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 hidden h-24 w-24 animate-pulse rounded-full bg-purple-600/10 blur-xl md:block"></div>
      <div className="absolute top-10 left-10 hidden h-24 w-24 animate-pulse rounded-full bg-cyan-600/10 blur-xl md:block"></div>
    </section>
  )
}
