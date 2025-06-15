"use client"

import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Prediction System',
    stack: 'Python, AWS, CI/CD, CloudWatch, SonarQube',
    description: 'Automated ML pipeline with secure AWS infra and code quality checks.',
    color: 'accent-blue',
  },
  {
    title: 'RAG AI Chatbot',
    stack: 'Auto-scaling infra, Redis, ELK',
    description: 'Scalable chatbot with real-time monitoring and logging.',
    color: 'accent-green',
  },
  {
    title: 'Go Booking App',
    stack: 'RDS, CloudFront, Go app monitoring',
    description: 'Booking platform with robust infra and observability.',
    color: 'accent-orange',
  },
  {
    title: 'Laravel CRM',
    stack: 'Aurora DB, Redis, secure SSM, encrypted backup',
    description: 'Enterprise CRM with secure cloud-native architecture.',
    color: 'accent-purple',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background-soft text-center">
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-text-main uppercase tracking-tight">Selected Works</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.96, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
            className={`rounded-2xl md:rounded-[2.5rem] p-10 md:p-14 shadow-cardHover bg-${project.color} text-white flex flex-col items-start justify-between min-h-[320px]`}
            style={{ boxShadow: '0 8px 32px 0 rgba(59,130,246,0.12)' }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight">{project.title}</h3>
            <div className="text-lg font-semibold mb-2 opacity-80">{project.stack}</div>
            <div className="text-base md:text-lg opacity-90 mb-6">{project.description}</div>
            <a href="#" className="inline-block mt-auto px-6 py-3 rounded-xl font-bold text-accent-black bg-white hover:bg-background-soft transition-colors duration-200 shadow-card border-2 border-white">View Details</a>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 