import React from 'react'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-accent-teal/30 to-accent-sky/20 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-accent-navy/20 to-accent-sky/30 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </motion.div>
      {/* Animated Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          Muhammed Dhulkifli K
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-display text-2xl md:text-3xl font-semibold text-accent-teal mb-4"
        >
          DevOps & Cloud Engineer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8"
        >
          Engineering infrastructure that's <span className="text-accent-sky font-semibold">secure</span>, <span className="text-accent-teal font-semibold">scalable</span>, <span className="text-accent-navy font-semibold">automated</span>.
        </motion.p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <a href="/resume.pdf" className="px-6 py-3 rounded-xl font-bold text-white bg-accent-teal shadow-lg hover:bg-accent-sky transition-colors duration-200">View Resume</a>
          <a href="https://github.com/dhulkii" target="_blank" rel="noopener" className="px-6 py-3 rounded-xl font-bold text-accent-teal border-2 border-accent-teal bg-white hover:bg-accent-teal/10 transition-colors duration-200">GitHub</a>
          <a href="https://linkedin.com/in/muhammeddhulkifli" target="_blank" rel="noopener" className="px-6 py-3 rounded-xl font-bold text-accent-sky border-2 border-accent-sky bg-white hover:bg-accent-sky/10 transition-colors duration-200">LinkedIn</a>
          <a href="https://medium.com/@muhammeddhulkifli" target="_blank" rel="noopener" className="px-6 py-3 rounded-xl font-bold text-accent-navy border-2 border-accent-navy bg-white hover:bg-accent-navy/10 transition-colors duration-200">Medium</a>
        </div>
      </div>
    </section>
  )
} 