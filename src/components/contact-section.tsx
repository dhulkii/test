"use client"

import React from 'react'
import { motion } from 'framer-motion'

const socials = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/muhammeddhulkifli', icon: '🔗' },
  { name: 'GitHub', url: 'https://github.com/muhammeddhulkifli', icon: '🐙' },
  { name: 'Medium', url: 'https://medium.com/@muhammeddhulkifli', icon: '✍️' },
]

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-24 bg-background-base text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-display text-4xl font-bold mb-8 text-accent-teal">Contact</h2>
      <form className="max-w-xl mx-auto grid gap-6 mb-8 bg-background-soft rounded-2xl p-8 shadow-card">
        <input type="text" placeholder="Your Name" className="p-4 rounded-xl border border-border-soft focus:ring-2 focus:ring-accent-teal outline-none transition" required />
        <input type="email" placeholder="Your Email" className="p-4 rounded-xl border border-border-soft focus:ring-2 focus:ring-accent-teal outline-none transition" required />
        <textarea placeholder="Your Message" rows={4} className="p-4 rounded-xl border border-border-soft focus:ring-2 focus:ring-accent-teal outline-none transition" required />
        <button type="submit" className="bg-accent-teal text-white font-bold py-3 rounded-xl shadow-card hover:bg-accent-sky transition">Send Message</button>
      </form>
      <div className="flex flex-wrap gap-4 justify-center">
        <a href="/resume.pdf" download className="inline-block bg-accent-sky text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-accent-teal transition mb-6">Download Resume</a>
        <a href="https://linkedin.com/in/muhammeddhulkifli" target="_blank" rel="noopener" className="inline-block bg-white border-2 border-accent-sky text-accent-sky font-semibold px-6 py-3 rounded-xl shadow hover:bg-accent-sky hover:text-white transition mb-6">LinkedIn</a>
        <a href="https://github.com/dhulkii" target="_blank" rel="noopener" className="inline-block bg-white border-2 border-accent-teal text-accent-teal font-semibold px-6 py-3 rounded-xl shadow hover:bg-accent-teal hover:text-white transition mb-6">GitHub</a>
      </div>
    </motion.section>
  )
} 