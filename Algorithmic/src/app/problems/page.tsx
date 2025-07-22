import { NavBar } from "@/components/NavBar"
import { ProblemHeader } from "@/components/ProblemHeader"
import { ProblemTabs } from "@/components/ProblemTabs"

export default function ProblemsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-600/10 blur-3xl animate-pulse animation-delay-1000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-purple-500/30 animate-ping animation-delay-700"></div>
        <div className="absolute top-3/4 left-2/3 h-2 w-2 rounded-full bg-cyan-500/30 animate-ping animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/3 h-3 w-3 rounded-full bg-purple-500/20 animate-ping animation-delay-500"></div>
        <div className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-cyan-500/30 animate-ping animation-delay-1500"></div>

        {/* Neon lines */}
        <div className="absolute top-20 left-10 h-40 w-1 bg-gradient-to-b from-purple-500/0 via-purple-500/20 to-purple-500/0 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 h-40 w-1 bg-gradient-to-b from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 animate-pulse animation-delay-700"></div>
      </div>

      <NavBar />

      <main className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-14">
        <div className="mx-auto max-w-7xl">
          {/* Header with animation */}
          <div className="animate-fade-in-down">
            <ProblemHeader />
          </div>

          {/* Tabs with animation and glow effect */}
          <div className="mt-7 mb-12 animate-fade-in-up animation-delay-300">
            <div className="relative">
              {/* Decorative glow effect behind the tabs */}
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-lg opacity-70 -z-10"></div>

              <ProblemTabs />
            </div>
          </div>
        </div>

        {/* Floating action button with animation */}
        <div className="fixed bottom-8 right-8 z-20 animate-fade-in-scale animation-delay-700">
          <button className="group relative h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 blur opacity-70 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative text-white text-2xl">+</span>
          </button>
        </div>
      </main>
    </div>
  )
}
