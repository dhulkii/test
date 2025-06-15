"use client"

import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Prediction System',
    stack: 'Python, AWS, CI/CD, CloudWatch, SonarQube',
    description: 'Automated ML pipeline with secure AWS infra and code quality checks.',
  },
  {
    title: 'RAG AI Chatbot',
    stack: 'Auto-scaling infra, Redis, ELK',
    description: 'Scalable chatbot with real-time monitoring and logging.',
  },
  {
    title: 'Go Booking App',
    stack: 'RDS, CloudFront, Go app monitoring',
    description: 'Booking platform with robust infra and observability.',
  },
  {
    title: 'Laravel CRM',
    stack: 'Aurora DB, Redis, secure SSM, encrypted backup',
    description: 'Enterprise CRM with secure cloud-native architecture.',
  },
]

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-24 bg-background-soft text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-accent-teal">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.04, boxShadow: '0 4px 32px 0 rgba(20,184,166,0.10)' }}
            className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 text-left cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2 text-accent-sky group-hover:text-accent-teal transition-colors">{project.title}</h3>
            <p className="text-gray-600 mb-2">{project.stack}</p>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <span className="inline-block text-accent-teal font-semibold group-hover:underline">View Details →</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 