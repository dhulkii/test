"use client"

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  className?: string
  suffix?: string
}

export function AnimatedCounter({ end, duration = 2, className = '', suffix = '' }: AnimatedCounterProps) {
  const controls = useAnimation()
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    controls.start({
      count: end,
      transition: { duration, ease: 'easeInOut' },
    })
  }, [end, duration, controls])

  return (
    <motion.span
      ref={nodeRef}
      className={className}
      initial={{ count: 0 }}
      animate={controls}
    >
      {Math.round(end)}{suffix}
    </motion.span>
  )
} 