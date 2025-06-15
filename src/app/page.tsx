"use client"

import React from 'react'
import { Navigation } from '../components/navigation'
import { HeroSection } from '../components/hero-section'
import { AboutSection } from '../components/about-section'
import { SkillsSection } from '../components/skills-section'
import { ProjectsSection } from '../components/projects-section'
import { ExperienceSection } from '../components/experience-section'
import { CertificationsSection } from '../components/certifications-section'
import { BlogSection } from '../components/blog-section'
import { EducationSection } from '../components/education-section'
import { ContactSection } from '../components/contact-section'

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <BlogSection />
      <EducationSection />
      <ContactSection />
    </>
  )
} 