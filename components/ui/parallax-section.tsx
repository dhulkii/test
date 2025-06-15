"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
  offset?: number
}

export function ParallaxSection({
  children,
  className,
  speed = 0.5,
  direction = "up",
  offset = 0,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const scrollProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height)
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const translateY = direction === "up" 
          ? -scrollProgress * speed * 100 
          : scrollProgress * speed * 100
        
        contentRef.current.style.transform = `translateY(${translateY + offset}px)`
        contentRef.current.style.opacity = String(Math.min(scrollProgress * 2, 1))
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, direction, offset])

  return (
    <div ref={sectionRef} className={cn("relative overflow-hidden", className)}>
      <div
        ref={contentRef}
        className="transition-transform duration-100 will-change-transform"
        style={{ transform: `translateY(${offset}px)`, opacity: 0 }}
      >
        {children}
      </div>
    </div>
  )
} 