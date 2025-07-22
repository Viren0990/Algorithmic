"use client";

import Link from "next/link";
import { Code2, Menu, X } from "lucide-react"; // Added X for close button
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import animations
import { signOut } from 'next-auth/react';
import { useRouter } from "next/navigation";



export const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);


  const navLinks = [
    { href: "/dashboard", label: "Home" },
    { href: "/problems", label: "Problems" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-purple-500" />
          <span className="text-xl font-bold text-white">CodeMaster</span>
        </div>

        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-sm text-white hover:text-purple-400 transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        
        <div className="hidden md:flex gap-2">
        <Button
  className="text-white bg-slate-600 hover:bg-purple-700"
  onClick={async () => {
    await signOut({ redirect: false });
    router.push("/signin"); // Force redirect
    setIsMenuOpen(false);
  }}
>
  Logout
</Button>
        </div>

        
        <div className="md:hidden">
          
          <Button
            className="text-white bg-purple-600 hover:bg-purple-700"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-50 border-t border-slate-800"
          >
            <nav className="flex flex-col items-center gap-4 p-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-white hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Button
  className="w-full text-white bg-purple-600 hover:bg-purple-700"
  onClick={async () => {
    await signOut({ redirect: false });
    router.push("/signin"); // Force redirect
    setIsMenuOpen(false);
  }}
>
  Logout
</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
