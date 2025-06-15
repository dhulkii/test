"use client"

import { motion } from 'framer-motion'

const socials = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/muhammeddhulkifli', icon: '🔗' },
  { name: 'GitHub', url: 'https://github.com/muhammeddhulkifli', icon: '🐙' },
  { name: 'Medium', url: 'https://medium.com/@muhammeddhulkifli', icon: '✍️' },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl font-bold mb-8"
        >
          Let&apos;s Connect
        </motion.h2>
        <p className="text-lg text-gray-600 mb-8">Ready to scale your infrastructure or discuss your next cloud project? Let&apos;s build something amazing together.</p>
        <form className="grid grid-cols-1 gap-6 mb-8">
          <input type="text" placeholder="Your Name" className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent-teal outline-none transition" required />
          <input type="email" placeholder="Your Email" className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent-teal outline-none transition" required />
          <textarea placeholder="Your Message" rows={4} className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent-teal outline-none transition" required />
          <button type="submit" className="bg-accent-teal text-white font-bold py-3 rounded-xl shadow-lg hover:bg-accent-sky transition">Send Message</button>
        </form>
        <a href="/resume.pdf" download className="inline-block bg-accent-sky text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-accent-teal transition mb-6">Download Resume</a>
        <div className="flex justify-center gap-6 mt-4">
          {socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent-sky transition" aria-label={social.name}>
              <span>{social.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 