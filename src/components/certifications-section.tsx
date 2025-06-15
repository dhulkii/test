import React from 'react'
import { motion } from 'framer-motion'

const certifications = [
  { name: 'AWS Cloud Practitioner', icon: '☁️' },
  { name: 'DevOps Training Completion', icon: '🛠️' },
  { name: 'Linux Essentials (NDG)', icon: '🐧' },
]

export function CertificationsSection() {
  return (
    <motion.section
      id="certifications"
      className="py-24 bg-background-soft text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-accent-teal">Certifications</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {certifications.map((cert) => (
          <div key={cert.name} className="bg-white rounded-xl px-8 py-6 shadow-md flex flex-col items-center">
            <span className="text-4xl mb-2">{cert.icon}</span>
            <span className="text-lg font-semibold text-accent-sky">{cert.name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  )
} 