"use client"

import { Heart, Code, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-600">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and</span>
            <Code className="w-4 h-4 text-teal-600" />
            <span>by Muhammed Dhulkifli K</span>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center gap-6">
            <div className="text-sm text-gray-600">© 2024 All rights reserved</div>
            <Button className="btn-ghost h-8 w-8 p-0 hover:bg-teal-50 hover:text-teal-600" onClick={scrollToTop}>
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
