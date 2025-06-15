import React from 'react'
import { motion } from 'framer-motion'

export function EducationSection() {
  return (
    <motion.section
      id="education"
      className="py-24 bg-background-soft text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-display text-4xl font-bold mb-8 text-accent-teal">Education</h2>
      <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow-card text-left">
        <h3 className="text-xl font-semibold mb-2 text-accent-sky font-display">BCA — Cochin College</h3>
        <p className="text-text-main mb-2">2020–2023</p>
        <p className="text-text-secondary">Bachelor of Computer Applications with a focus on cloud, automation, and software engineering.</p>
      </div>
    </motion.section>
  )
} 