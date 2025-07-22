"use client"

import { SignupAuth } from "@/components/SignupAuth"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Signin() {
  return (
    <div className="flex min-h-screen">
      {/* Left panel - gradient background with text */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex flex-1 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 justify-center items-center p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] opacity-5 bg-repeat"></div>
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold bg-white bg-clip-text text-transparent leading-tight">
              Learn with us!
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2 bg-white bg-clip-text text-transparent leading-tight">
              Solve popular interview problems
            </h2>
            <p className="text-slate-300 mt-6 text-lg max-w-md">
              Master coding challenges, algorithms, and data structures with our interactive platform.
            </p>

            <div className="mt-8 inline-flex items-center text-cyan-300 font-medium hover:text-cyan-100 transition-colors group cursor-pointer">
              Start learning today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        <div className="absolute top-10 right-10">
          <div className="w-20 h-20 rounded-full bg-cyan-500/10 backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-10 left-10">
          <div className="w-32 h-32 rounded-full bg-slate-500/10 backdrop-blur-sm"></div>
        </div>
      </motion.div>

      {/* Right panel - sign in form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 bg-slate-300 flex justify-center items-center p-4 sm:p-8"
      >
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="bg-slate-400 rounded-2xl shadow-xl p-6 sm:p-8"
          >
            <SignupAuth />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-center text-black text-sm mt-8"
          >
           
          </motion.p>
        </div>
      </motion.div>
    </div>
  )
}

