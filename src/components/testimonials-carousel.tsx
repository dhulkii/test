"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CTO at TechCorp",
    content: "Muhammed's expertise in DevOps and cloud infrastructure has transformed our deployment process. His solutions are elegant and efficient.",
    image: "/testimonials/john.jpg"
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "Lead Developer",
    content: "Working with Muhammed was a game-changer for our team. His automation solutions saved us countless hours of manual work.",
    image: "/testimonials/sarah.jpg"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "DevOps Engineer",
    content: "Muhammed's knowledge of cloud technologies is exceptional. He helped us migrate our entire infrastructure to AWS seamlessly.",
    image: "/testimonials/mike.jpg"
  }
]

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
    }),
  }

  const handleNext = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrevious = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] perspective-1000">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            rotateY: { duration: 0.5 },
          }}
          className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {testimonials[current].content}
            </p>
            <h3 className="text-xl font-bold mb-1">{testimonials[current].name}</h3>
            <p className="text-accent-teal">{testimonials[current].role}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
      >
        <svg
          className="w-6 h-6 text-accent-teal"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
      >
        <svg
          className="w-6 h-6 text-accent-teal"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  )
} 