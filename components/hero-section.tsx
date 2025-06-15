"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-200/30 to-sky-200/30 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl floating-delayed" />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.15) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Status Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Available for new opportunities
          </div>

          {/* Main Heading */}
          <h1
            className={`font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-gray-900 mb-2">Muhammed</span>
            <span className="block text-gradient">Dhulkifli K</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-2xl sm:text-3xl text-gray-600 mb-6 font-light transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            DevOps & Cloud Engineer
          </p>

          {/* Description */}
          <p
            className={`text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            I architect and automate cloud infrastructure that scales. Specializing in AWS, Kubernetes, and DevOps
            practices that transform how teams deploy and manage applications with security and reliability at the core.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button size="lg" className="btn-primary group">
              <a href="#projects" className="flex items-center gap-2 relative z-10">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </Button>
            <Button size="lg" className="btn-secondary">
              <a href="#contact" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center gap-4 transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button size="icon" className="btn-ghost hover:bg-teal-50 hover:text-teal-600" asChild>
              <a href="https://github.com" aria-label="GitHub Profile">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button size="icon" className="btn-ghost hover:bg-sky-50 hover:text-sky-600" asChild>
              <a href="https://linkedin.com" aria-label="LinkedIn Profile">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button size="icon" className="btn-ghost hover:bg-emerald-50 hover:text-emerald-600" asChild>
              <a href="mailto:contact@example.com" aria-label="Email Contact">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
