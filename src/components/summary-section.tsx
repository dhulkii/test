import React from 'react'
import { motion } from 'framer-motion'

export function SummarySection() {
  return (
    <motion.section
      id="summary"
      className="py-20 bg-background-base text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-accent-teal">Summary</h2>
      <p className="text-lg md:text-xl text-text-main max-w-3xl mx-auto">
        Self driven DevOps Engineer managing the complete DevOps lifecycle from infrastructure design to deployment for both web and AI-based systems. Experienced in building scalable, reliable, and automated environments across diverse tech stacks. Also an active technical blogger on Medium.
      </p>
    </motion.section>
  )
} 