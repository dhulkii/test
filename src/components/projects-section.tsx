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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-24 bg-background-soft text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className="font-display text-4xl font-bold mb-8 text-accent-primary">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(20,184,166,0.12)' }}
            className="card bg-background-card rounded-2xl p-6 shadow-card hover:shadow-cardHover transition-all border border-border-soft text-left cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2 text-accent-primary group-hover:text-accent-teal transition-colors font-display">{project.title}</h3>
            <p className="text-text-secondary mb-2">{project.stack}</p>
            <p className="text-text-main mb-4">{project.description}</p>
            <span className="inline-block text-accent-teal font-semibold group-hover:underline">View Details →</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 