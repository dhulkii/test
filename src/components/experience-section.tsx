import React from 'react'
import { motion } from 'framer-motion'

export function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="py-24 bg-white text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-accent-teal">Work Experience</h2>
      <div className="max-w-3xl mx-auto bg-background-soft rounded-xl p-8 shadow-md text-left">
        <h3 className="text-2xl font-semibold mb-2 text-accent-sky">Junior DevOps Engineer</h3>
        <p className="text-gray-700 mb-2">IOCOD InfoTech Pvt Ltd</p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Setup and maintain cloud infrastructure for AI/web systems</li>
          <li>Deploy and monitor CI/CD pipelines</li>
          <li>Implement observability and security best practices</li>
          <li>Collaborate with teams to deliver robust solutions</li>
        </ul>
      </div>
    </motion.section>
  )
} 