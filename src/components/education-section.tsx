import React from 'react'
import { motion } from 'framer-motion'

export function EducationSection() {
  return (
    <motion.section
      id="education"
      className="py-24 bg-white text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-accent-teal">Education</h2>
      <div className="max-w-xl mx-auto bg-background-soft rounded-xl p-8 shadow-md text-left">
        <h3 className="text-xl font-semibold mb-2 text-accent-sky">BCA — Cochin College</h3>
        <p className="text-gray-700 mb-2">2020–2023</p>
        <p className="text-gray-600">Bachelor of Computer Applications with a focus on cloud, automation, and software engineering.</p>
      </div>
    </motion.section>
  )
} 