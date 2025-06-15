"use client"

import { motion } from 'framer-motion'
import { Navigation } from '../components/navigation'
import { AboutSection } from '../components/about-section'
import { SkillsSection } from '../components/skills-section'
import { ProjectsSection } from '../components/projects-section'
import { BlogSection } from '../components/blog-section'
import { ContactSection } from '../components/contact-section'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Muhammed Dhulkifli K's Portfolio</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">Building in progress. Stay tuned for something cinematic!</p>
    </main>
  )
} 