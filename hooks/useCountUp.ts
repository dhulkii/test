"use client"

import { useEffect, useState } from "react"

interface UseCountUpProps {
  end: number
  duration?: number
  start?: number
  trigger?: boolean
}

export function useCountUp({ end, duration = 2000, start = 0, trigger = true }: UseCountUpProps) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!trigger) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = start + (end - start) * easeOutQuart

      setCount(Math.floor(currentCount))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, start, trigger])

  return count
}
