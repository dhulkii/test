"use client"

import React from 'react'
import { Navigation } from '../components/navigation'
import { motion } from 'framer-motion'
// Placeholder imports for sections (implement these as needed)
// import { HeroSection } from '../components/sections/hero-section'
// import { AboutSection } from '../components/about-section'
// import { SkillsSection } from '../components/skills-section'
// import { ProjectsSection } from '../components/projects-section'
// import { BlogSection } from '../components/blog-section'
// import { ContactSection } from '../components/contact-section'

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-accent-teal/30 to-accent-sky/20 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-accent-navy/20 to-accent-sky/30 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </motion.div>
      {/* Animated Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          Muhammed Dhulkifli K
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-display text-2xl md:text-3xl font-semibold text-accent-teal mb-4"
        >
          DevOps & Cloud Engineer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8"
        >
          Engineering infrastructure that's <span className="text-accent-sky font-semibold">secure</span>, <span className="text-accent-teal font-semibold">scalable</span>, <span className="text-accent-navy font-semibold">automated</span>.
        </motion.p>
      </div>
    </section>
  )
}

function FadeInSection({ id, title, children, bg = 'bg-white' }: { id: string, title: string, children: React.ReactNode, bg?: string }) {
  return (
    <motion.section
      id={id}
      className={`py-24 ${bg} text-center`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-accent-teal">{title}</h2>
      {children}
    </motion.section>
  )
}

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <FadeInSection id="about" title="About" bg="bg-background-soft">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Career story timeline coming soon...</p>
      </FadeInSection>
      <FadeInSection id="skills" title="Skills">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Interactive skills grid coming soon...</p>
      </FadeInSection>
      <FadeInSection id="projects" title="Projects" bg="bg-background-soft">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Cinematic project showcase coming soon...</p>
      </FadeInSection>
      <FadeInSection id="blog" title="Blog">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Medium post previews coming soon...</p>
      </FadeInSection>
      <FadeInSection id="contact" title="Contact" bg="bg-background-soft">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Contact form and links coming soon...</p>
      </FadeInSection>
    </>
  )
} 