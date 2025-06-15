"use client"

import { motion } from "framer-motion"
import { useCountUp } from "@/hooks/useCountUp"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ value, suffix = "", duration = 2000, className = "" }: AnimatedCounterProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 })
  const count = useCountUp({ end: value, duration, trigger: isIntersecting })

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  )
}
