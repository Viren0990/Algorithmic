import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Code2, Users, Rocket } from "lucide-react"
import { NavBar } from "@/components/NavBar"

export default function AboutPage() {
  return (
    <>
    <NavBar />
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white mt-15">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-600/10 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 h-40 w-40 rounded-full bg-purple-600/5 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-cyan-600/5 blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-down">
          <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm text-slate-300 shadow-sm backdrop-blur-sm mb-4">
            <Code2 className="mr-1 h-3.5 w-3.5" />
            <span>Our Story</span>
          </div>

          <h1 className="text-4xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              CodeMaster
            </span>
          </h1>

          <div className="relative h-1 w-40 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full mx-auto mb-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 blur-lg opacity-70"></div>
          </div>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We're on a mission to help developers master coding challenges and land their dream jobs through interactive
            learning and practice.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20 animate-fade-in-up animation-delay-300">
          <div className="relative rounded-xl border border-slate-700 bg-slate-800/30 backdrop-blur-sm p-10 overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 rounded-full bg-purple-600/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-40 w-40 rounded-full bg-cyan-600/20 blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="mr-4 h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed">
              This platform is designed for programmers to practice coding, solve algorithmic challenges, and improve their problem-solving skills. It provides an interactive coding environment with real-time code execution, multiple programming language support, and detailed submission analysis. Whether you're preparing for technical interviews or honing your competitive programming skills, this platform offers a seamless experience to write, test, and optimize your code.
              </p>

              <ul className="space-y-4">
                {[
                  "Create the most comprehensive library of coding challenges",
                  "Provide personalized learning paths for every skill level",
                  "Build a supportive community of learners and mentors",
                  "Bridge the gap between education and employment",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Creator Section */}
        <div className="mb-20 animate-fade-in-up animation-delay-500">
          <div className="text-center mb-10">
            <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm text-slate-300 shadow-sm backdrop-blur-sm mb-3">
              <Users className="mr-1 h-3.5 w-3.5" />
              <span>Meet the Creator</span>
            </div>
            <h2 className="text-2xl font-bold">The Mind Behind CodeMaster</h2>
          </div>

          <div className="relative group max-w-2xl mx-auto">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 opacity-70 blur-lg group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-lg border border-slate-700 bg-slate-800/30 overflow-hidden backdrop-blur-sm">
              <div className="md:flex items-center">
                <div className="p-8  text-center justify-center items-ce">
                  <h3 className="text-2xl font-bold mb-2">Veerendra Verma</h3>
                  <p className="text-purple-400 mb-4">Creator</p>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                  Aspiring web developer passionate about building real-world projects. Skilled in modern web technologies like React, Next.js, Tailwind, and TypeScript. Currently developing a platform with real-time code execution and learning advanced concepts like WebRTC, cryptography, and network security.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
       

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up animation-delay-1000 py-8">
          <h2 className="text-2xl font-bold mb-8">Ready to start your coding journey?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-purple-600/20"
            >
              <Link href="/dashboard">Get Started</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-700 text-white hover:bg-slate-800/70 transition-all duration-300"
            >
              <Link href="/problems">View Challenges</Link>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} CodeMaster. All rights reserved.
        </div>
      </div>
    </div>
    </>
  )
}
