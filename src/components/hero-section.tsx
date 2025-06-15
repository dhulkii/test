import React from 'react'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-background-base overflow-hidden">
      {/* Playful Confetti or Wave Background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg className="absolute top-0 left-0 w-full h-40" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFB085" fillOpacity="0.3" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </motion.div>
      {/* Animated Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-5xl md:text-7xl font-bold text-accent-peach mb-6 tracking-tight fun-bounce"
        >
          Muhammed Dhulkifli K <span className="inline-block">😄</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-display text-2xl md:text-3xl font-semibold text-accent-mint mb-4"
        >
          DevOps & Cloud Engineer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="text-lg md:text-2xl text-text-secondary max-w-2xl mx-auto mb-8"
        >
          Engineering infrastructure that's <span className="text-accent-sky font-semibold">secure</span>, <span className="text-accent-peach font-semibold">scalable</span>, <span className="text-accent-mint font-semibold">automated</span> — and always a little fun!
        </motion.p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <a href="/resume.pdf" className="px-6 py-3 rounded-xl font-bold text-white bg-accent-peach shadow-card hover:bg-accent-mint transition-colors duration-200 fun-bounce">View Resume</a>
          <a href="https://github.com/dhulkii" target="_blank" rel="noopener" className="px-6 py-3 rounded-xl font-bold text-accent-mint border-2 border-accent-mint bg-white hover:bg-accent-mint/10 transition-colors duration-200 fun-bounce">GitHub</a>
          <a href="https://linkedin.com/in/muhammeddhulkifli" target="_blank" rel="noopener" className="px-6 py-3 rounded-xl font-bold text-accent-sky border-2 border-accent-sky bg-white hover:bg-accent-sky/10 transition-colors duration-200 fun-bounce">LinkedIn</a>
          <a href="https://medium.com/@muhammeddhulkifli" target="_blank" rel="noopener" className="px-6 py-3 rounded-xl font-bold text-accent-lavender border-2 border-accent-lavender bg-white hover:bg-accent-lavender/10 transition-colors duration-200 fun-bounce">Medium</a>
        </div>
      </div>
    </section>
  )
} 