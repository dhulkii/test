"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
}

export function TypewriterText({ text, className = "", delay = 0 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }
    }, delay + 50)

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      {displayText}
      <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>|</span>
    </motion.p>
  )
}
