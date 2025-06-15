import React from 'react'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-background-base overflow-hidden">
      {/* Subtle Parallax Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-accent-primary/20 to-accent-teal/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-accent-teal/20 to-accent-primary/10 rounded-full blur-3xl" />
      </motion.div>
      {/* Animated Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-5xl md:text-7xl font-bold text-accent-primary mb-6 tracking-tight"
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
          className="text-lg md:text-2xl text-text-secondary max-w-2xl mx-auto mb-8"
        >
          Engineering secure, scalable, and automated infrastructure for modern tech.
        </motion.p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <a href="/resume.pdf" className="px-6 py-3 rounded-xl font-bold text-white bg-accent-primary shadow-card hover:bg-accent-teal transition-colors duration-200">View Resume</a>
          <a href="https://github.com/dhulkii" target="_blank" rel="noopener" className="px-6 py-3 rounded-xl font-bold text-accent-teal border-2 border-accent-teal bg-white hover:bg-accent-teal/10 transition-colors duration-200">GitHub</a>
          <a href="https://linkedin.com/in/muhammeddhulkifli" target="_blank" rel="noopener" className="px-6 py-3 rounded-xl font-bold text-accent-primary border-2 border-accent-primary bg-white hover:bg-accent-primary/10 transition-colors duration-200">LinkedIn</a>
          <a href="https://medium.com/@muhammeddhulkifli" target="_blank" rel="noopener" className="px-6 py-3 rounded-xl font-bold text-accent-gold border-2 border-accent-gold bg-white hover:bg-accent-gold/10 transition-colors duration-200">Medium</a>
        </div>
      </div>
    </section>
  )
} 