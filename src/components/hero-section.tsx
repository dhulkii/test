import React from 'react'
import { motion } from 'framer-motion'

const tags = [
  { label: 'Cloud Engineer', color: 'accent-blue' },
  { label: 'DevOps Engineer', color: 'accent-green' },
  { label: 'Automation', color: 'accent-orange' },
  { label: 'Security', color: 'accent-yellow' },
  { label: 'Infra as Code', color: 'accent-purple' },
]

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex flex-col items-center justify-center bg-background-base overflow-hidden">
      {/* Floating Tags */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="relative w-full max-w-4xl h-64 mx-auto">
          {tags.map((tag, i) => (
            <motion.div
              key={tag.label}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7, type: 'spring' }}
              className={`tag absolute z-10 bg-${tag.color} shadow-tag`}
              style={{
                top: ["10%", "70%", "20%", "60%", "40%"][i],
                left: ["5%", "80%", "15%", "70%", "50%"][i],
                transform: 'translate(-50%, -50%)',
              }}
            >
              {tag.label}
            </motion.div>
          ))}
        </div>
      </div>
      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-display text-[2.8rem] md:text-[5rem] font-bold uppercase leading-none tracking-tight text-text-main mb-4"
          style={{ letterSpacing: '-0.04em' }}
        >
          Muhammed Dhulkifli K
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-2xl text-text-secondary max-w-2xl mx-auto mb-8"
        >
          DevOps & Cloud Engineer — Building secure, scalable, and automated infrastructure.
        </motion.p>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <a href="/resume.pdf" className="px-7 py-3 rounded-xl font-bold text-white bg-accent-black shadow-card hover:bg-text-main transition-colors duration-200 border-2 border-accent-black">View Resume</a>
          <a href="https://github.com/dhulkii" target="_blank" rel="noopener" className="px-7 py-3 rounded-xl font-bold text-accent-black border-2 border-accent-black bg-white hover:bg-accent-black/10 transition-colors duration-200">GitHub</a>
          <a href="https://linkedin.com/in/muhammeddhulkifli" target="_blank" rel="noopener" className="px-7 py-3 rounded-xl font-bold text-accent-blue border-2 border-accent-blue bg-white hover:bg-accent-blue/10 transition-colors duration-200">LinkedIn</a>
          <a href="https://medium.com/@muhammeddhulkifli" target="_blank" rel="noopener" className="px-7 py-3 rounded-xl font-bold text-accent-purple border-2 border-accent-purple bg-white hover:bg-accent-purple/10 transition-colors duration-200">Medium</a>
        </div>
      </div>
    </section>
  )
} 