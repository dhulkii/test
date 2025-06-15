"use client"

import React from 'react'
import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2017',
    title: 'Started as a Cloud Enthusiast',
    description: 'Began exploring AWS, Linux, and automation tools.'
  },
  {
    year: '2019',
    title: 'DevOps Engineer',
    description: 'Built CI/CD pipelines, automated cloud deployments, and improved reliability.'
  },
  {
    year: '2021',
    title: 'Senior DevOps & Cloud Engineer',
    description: 'Led cloud migrations, mentored engineers, and architected secure, scalable systems.'
  },
  {
    year: '2024',
    title: 'Award-Winning Infrastructure',
    description: 'Delivered high-impact projects, published on Medium, and recognized for technical excellence.'
  }
]

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-24 bg-background-soft text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-accent-teal">About Me</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
        DevOps & Cloud Engineer passionate about automation, security, and building scalable infrastructure. Currently at IOCOD InfoTech, I help teams deliver robust, secure, and efficient cloud solutions.
      </p>
      <ul className="flex flex-wrap justify-center gap-6 text-base text-gray-600 max-w-3xl mx-auto">
        <li>⚡ Automation & CI/CD</li>
        <li>🔒 Cloud Security</li>
        <li>🌐 Scalable Infrastructure</li>
        <li>🏢 IOCOD InfoTech Pvt Ltd</li>
      </ul>
    </motion.section>
  )
} 