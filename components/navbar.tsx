"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/ACBYTES/ACBYTES-CPU.png" className="h-8 w-8 text-primary"></img>
            <span className="text-xl font-bold gradient-text">ACBYTES</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-primary transition-colors">
              Projects
            </Link>
            {/* <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
              Contact
            </Link> */}
            <Link href="/contact"><Button className="bg-primary hover:bg-primary/90 text-black font-semibold">Start Automating</Button></Link>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md rounded-lg mt-2">
              <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-primary">
                Home
              </Link>
              <Link href="/projects" className="block px-3 py-2 text-gray-300 hover:text-primary">
                Projects
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-300 hover:text-primary">
                Contact
              </Link>
              <Link href="/contact">
                <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-black font-semibold">
                  Start Automating
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
