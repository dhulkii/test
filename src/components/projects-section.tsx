"use client"

import React, { useState } from 'react'
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

const funFacts = [
  "Did you know? The cloud isn't actually in the sky! ☁️",
  "DevOps engineers automate their coffee breaks. ☕🤖",
  "Every time you click a button, a server somewhere smiles. 😁",
  "99% uptime, 100% fun! 🎉",
]

export function ProjectsSection() {
  const [fact] = useState(funFacts[Math.floor(Math.random() * funFacts.length)])
  return (
    <motion.section
      id="projects"
      className="py-24 bg-background-soft text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-display text-4xl font-bold mb-4 text-accent-peach">Projects</h2>
      <div className="mb-8 text-accent-mint text-lg fun-bounce">{fact}</div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ rotate: [0, 2, -2, 0], scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            className="group bg-background-card rounded-fun p-6 shadow-fun hover:shadow-lg transition-all border border-border-soft text-left cursor-pointer relative overflow-hidden"
          >
            <span className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">🎈</span>
            <h3 className="text-xl font-bold mb-2 text-accent-sky group-hover:text-accent-peach transition-colors font-display">{project.title}</h3>
            <p className="text-text-secondary mb-2">{project.stack}</p>
            <p className="text-text-main mb-4">{project.description}</p>
            <span className="inline-block text-accent-mint font-semibold group-hover:underline">View Details →</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 