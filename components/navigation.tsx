"use client"

import { useState, useEffect } from "react"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="font-display text-xl font-bold text-gradient">Muhammed DK</div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition-all duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-teal-600 transform -translate-x-1/2 transition-all duration-200 group-hover:w-6"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <Button size="sm" className="btn-primary relative z-10">
                <a href="#contact" className="flex items-center gap-2 relative z-10">
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-teal-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Button className="btn-primary w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
