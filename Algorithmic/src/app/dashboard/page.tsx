import { NavBar } from "@/components/NavBar"
import { Hero } from "@/components/Hero"

export default function Dashboard() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-600/10 blur-3xl animate-pulse animation-delay-1000"></div>

        {/* Animated circuit lines */}
        <div className="absolute inset-0 bg-[url('/circuit.svg')] bg-center opacity-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/5 h-2 w-2 rounded-full bg-purple-500/40 animate-ping animation-delay-700"></div>
        <div className="absolute top-3/4 left-3/4 h-2 w-2 rounded-full bg-cyan-500/40 animate-ping animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/4 h-3 w-3 rounded-full bg-purple-500/30 animate-ping animation-delay-500"></div>
        <div className="absolute top-1/3 right-1/3 h-2 w-2 rounded-full bg-cyan-500/40 animate-ping animation-delay-1500"></div>

        {/* Horizontal neon lines */}
        <div className="absolute top-40 -left-10 h-[1px] w-40 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 animate-pulse"></div>
        <div className="absolute bottom-60 -right-10 h-[1px] w-40 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 animate-pulse animation-delay-700"></div>

        {/* Diagonal neon lines */}
        <div className="absolute top-0 left-1/3 h-40 w-[1px] bg-gradient-to-b from-purple-500/0 via-purple-500/30 to-purple-500/0 rotate-45 animate-pulse animation-delay-300"></div>
        <div className="absolute bottom-0 right-1/3 h-40 w-[1px] bg-gradient-to-b from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 -rotate-45 animate-pulse animation-delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <NavBar />
        <div className="animate-fade-in-up">
          <Hero />
        </div>
      </div>

      {/* Floating action button */}
      <div className="fixed bottom-8 right-8 z-20 animate-fade-in-scale animation-delay-700">
        <button className="group relative h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 blur opacity-70 group-hover:opacity-100 transition-opacity"></span>
          <span className="relative text-white text-2xl">+</span>
        </button>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600/0 via-purple-600/50 to-cyan-600/0"></div>
    </div>
  )
}
