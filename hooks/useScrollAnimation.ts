"use client"

import { useEffect, useRef, useState } from "react"

interface UseScrollAnimationProps {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  delay?: number
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true,
  delay = 0,
}: UseScrollAnimationProps = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementVisible = entry.isIntersecting

        if (isElementVisible && (!triggerOnce || !hasTriggered)) {
          // Add delay if specified
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true)
              if (triggerOnce) setHasTriggered(true)
            }, delay)
          } else {
            setIsVisible(true)
            if (triggerOnce) setHasTriggered(true)
          }
        } else if (!triggerOnce) {
          setIsVisible(isElementVisible)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered, delay])

  return { ref: elementRef, isVisible }
} 