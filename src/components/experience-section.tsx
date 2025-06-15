import React from 'react'
import { motion } from 'framer-motion'

export function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="py-24 bg-background-base text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-display text-4xl font-bold mb-8 text-accent-teal">Work Experience</h2>
      <div className="max-w-3xl mx-auto bg-background-soft rounded-2xl p-8 shadow-card text-left">
        <h3 className="text-2xl font-semibold mb-2 text-accent-sky font-display">Junior DevOps Engineer</h3>
        <p className="text-text-main mb-2">IOCOD InfoTech Pvt Ltd</p>
        <ul className="list-disc pl-6 text-text-secondary space-y-2">
          <li>Setup and maintain cloud infrastructure for AI/web systems</li>
          <li>Deploy and monitor CI/CD pipelines</li>
          <li>Implement observability and security best practices</li>
          <li>Collaborate with teams to deliver robust solutions</li>
        </ul>
      </div>
    </motion.section>
  )
} 