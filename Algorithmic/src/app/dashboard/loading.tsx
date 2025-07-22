import { Code2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black to-slate-900 flex flex-col items-center justify-center z-50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-cyan-600/10 blur-3xl animate-pulse animation-delay-700"></div>

        {/* Particles */}
        <div className="absolute top-1/3 left-1/2 h-2 w-2 rounded-full bg-purple-500/40 animate-ping"></div>
        <div className="absolute top-2/3 left-1/3 h-2 w-2 rounded-full bg-cyan-500/40 animate-ping animation-delay-300"></div>
        <div className="absolute top-1/2 right-1/3 h-2 w-2 rounded-full bg-purple-500/40 animate-ping animation-delay-700"></div>
      </div>

      {/* Logo and spinner container */}
      <div className="relative flex flex-col items-center">
        {/* Logo with glow */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 blur-lg opacity-70 scale-150"></div>
          <div className="relative h-16 w-16 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center">
            <Code2 className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Loading text */}
        <h2 className="text-xl font-bold mb-6 text-white">
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">Loading</span>
        </h2>

        {/* Spinner */}
        <div className="relative">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-slate-700/50"></div>

          {/* Animated spinner */}
          <div className="h-16 w-16 rounded-full border-b-2 border-r-2 border-transparent border-t-2 border-l-2 border-t-purple-500 border-l-purple-500 border-b-cyan-500 border-r-cyan-500 animate-spin"></div>

          {/* Inner glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>
          </div>
        </div>

        {/* Loading progress bar */}
        <div className="mt-8 w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 loading-progress-bar"></div>
        </div>

        {/* Loading message */}
        <p className="mt-4 text-sm text-slate-400 animate-pulse">Compiling code challenges...</p>
      </div>

      {/* Bottom neon line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600/0 via-purple-600/50 to-cyan-600/0"></div>
    </div>
  )
}
