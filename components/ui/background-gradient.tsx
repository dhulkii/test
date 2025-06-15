"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface BackgroundGradientProps {
  className?: string
  speed?: number
  opacity?: number
}

export function BackgroundGradient({
  className,
  speed = 0.5,
  opacity = 0.1,
}: BackgroundGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrame: number
    let time = 0

    const animate = () => {
      time += speed
      const x = Math.sin(time) * 20
      const y = Math.cos(time) * 20

      container.style.transform = `translate(${x}px, ${y}px)`
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [speed])

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 transition-transform duration-1000",
        className
      )}
      style={{ opacity }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-blue-500/20 to-purple-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-blue-500/20 to-purple-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-bl from-teal-500/20 via-blue-500/20 to-purple-500/20 blur-3xl" />
    </div>
  )
} 