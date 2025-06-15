"use client"

import React from 'react'
import { Navigation } from '../components/navigation'
// Placeholder imports for sections (implement these as needed)
// import { HeroSection } from '../components/sections/hero-section'
// import { AboutSection } from '../components/about-section'
// import { SkillsSection } from '../components/skills-section'
// import { ProjectsSection } from '../components/projects-section'
// import { BlogSection } from '../components/blog-section'
// import { ContactSection } from '../components/contact-section'

function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-accent-teal text-center">Muhammed Dhulkifli K</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-accent-sky text-center">DevOps & Cloud Engineer</h2>
      <p className="text-xl md:text-2xl text-gray-700 text-center max-w-2xl mx-auto animate-pulse">Engineering infrastructure that's <span className="text-accent-sky font-semibold">secure</span>, <span className="text-accent-teal font-semibold">scalable</span>, <span className="text-accent-navy font-semibold">automated</span>.</p>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background-soft text-center">
      <h2 className="text-4xl font-bold mb-8 text-accent-teal">About</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">Career story timeline coming soon...</p>
    </section>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8 text-accent-teal">Skills</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">Interactive skills grid coming soon...</p>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background-soft text-center">
      <h2 className="text-4xl font-bold mb-8 text-accent-teal">Projects</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">Cinematic project showcase coming soon...</p>
    </section>
  )
}

function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8 text-accent-teal">Blog</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">Medium post previews coming soon...</p>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background-soft text-center">
      <h2 className="text-4xl font-bold mb-8 text-accent-teal">Contact</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">Contact form and links coming soon...</p>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </>
  )
} 