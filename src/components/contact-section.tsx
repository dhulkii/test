"use client"

import React from 'react'
import { motion } from 'framer-motion'

type SocialColor = 'blue' | 'black' | 'purple';

const socials: { name: string; url: string; color: SocialColor }[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammed-dhulkifli-k-5a42772b7/', color: 'blue' },
  { name: 'GitHub', url: 'https://github.com/dhulkii', color: 'black' },
  { name: 'Medium', url: 'https://medium.com/@muhammeddhulkiflik', color: 'purple' },
]

const colorMap: Record<SocialColor, string> = {
  blue: 'accent-blue',
  black: 'accent-black',
  purple: 'accent-purple',
}

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-32 bg-background-base text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-display text-4xl font-bold mb-12 text-accent-teal">Contact</h2>
      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="max-w-xl mx-auto grid gap-6 mb-12 bg-background-soft rounded-2xl p-8 shadow-card"
      >
        <input type="text" placeholder="Your Name" className="p-4 rounded-xl border border-border-soft focus:ring-2 focus:ring-accent-teal outline-none transition" required />
        <input type="email" placeholder="Your Email" className="p-4 rounded-xl border border-border-soft focus:ring-2 focus:ring-accent-teal outline-none transition" required />
        <textarea placeholder="Your Message" rows={4} className="p-4 rounded-xl border border-border-soft focus:ring-2 focus:ring-accent-teal outline-none transition" required />
        <button type="submit" className="bg-accent-teal text-white font-bold py-3 rounded-xl shadow-card hover:bg-accent-sky transition">Send Message</button>
      </motion.form>
      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
      >
        {socials.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener"
            className={`inline-block border-2 border-${colorMap[social.color]} text-${colorMap[social.color]} font-semibold px-6 py-3 rounded-xl shadow hover:bg-${colorMap[social.color]}/10 hover:text-white transition mb-6 bg-white`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {social.name}
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  )
} 