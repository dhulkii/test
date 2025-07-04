"use client"

import { motion, useMotionValue, useAnimationFrame, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  className?: string
  suffix?: string
}

export function AnimatedCounter({ end, duration = 2, className = '', suffix = '' }: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const controls = animate(motionValue.get(), end, {
      duration,
      ease: 'easeInOut',
      onUpdate: (latest: number) => motionValue.set(latest),
    })
    return controls.stop
  }, [end, duration, motionValue])

  useAnimationFrame(() => {
    setDisplay(Math.round(motionValue.get()))
  })

  return (
    <motion.span ref={nodeRef} className={className}>
      {display}{suffix}
    </motion.span>
  )
} 