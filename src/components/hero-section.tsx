import React from 'react'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex flex-col items-center justify-center bg-background-base overflow-hidden">
      {/* Hero Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center text-center pt-36 pb-20 w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Profile Photo */}
        <div className="flex justify-center mb-10">
          <img
            src="/profile.jpg"
            alt="Muhammed Dhulkifli K profile photo"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg bg-gray-200"
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-display text-[2.2rem] sm:text-[3rem] md:text-[4.5rem] font-bold uppercase leading-none tracking-tight text-text-main mb-8 md:mb-10"
          style={{ letterSpacing: '-0.04em' }}
        >
          Muhammed Dhulkifli K
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="text-base md:text-2xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          DevOps & Cloud Engineer — Building secure, scalable, and automated infrastructure.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-2"
          variants={{}}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="/resume.pdf"
            className="px-7 py-3 rounded-xl font-bold text-white bg-accent-black shadow-card hover:bg-text-main transition-colors duration-200 border-2 border-accent-black"
            variants={{}}
          >
            View Resume
          </motion.a>
          <motion.a
            href="https://github.com/dhulkii"
            target="_blank"
            rel="noopener"
            className="px-7 py-3 rounded-xl font-bold text-accent-black border-2 border-accent-black bg-white hover:bg-accent-black/10 transition-colors duration-200"
            variants={{}}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/muhammed-dhulkifli-k-5a42772b7/"
            target="_blank"
            rel="noopener"
            className="px-7 py-3 rounded-xl font-bold text-accent-blue border-2 border-accent-blue bg-white hover:bg-accent-blue/10 transition-colors duration-200"
            variants={{}}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://medium.com/@muhammeddhulkiflik"
            target="_blank"
            rel="noopener"
            className="px-7 py-3 rounded-xl font-bold text-accent-purple border-2 border-accent-purple bg-white hover:bg-accent-purple/10 transition-colors duration-200"
            variants={{}}
          >
            Medium
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
} 