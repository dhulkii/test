import type React from "react"
export interface BlogPost {
  title: string
  link: string
  pubDate: string
  description: string
  categories: string[]
  guid: string
  thumbnail?: string
  readTime?: string
}

export interface Achievement {
  id: string
  icon: React.ComponentType<{ className?: string }>
  value: number
  suffix: string
  label: string
  description: string
  color: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  current: boolean
  description: string
  achievements: string[]
  technologies: string[]
  impact: string
  logo?: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  github?: string
  live?: string
  metrics: string[]
  featured: boolean
}

export interface Skill {
  name: string
  level: number
  category: string
  icon?: string
}

export interface ContactForm {
  firstName: string
  lastName: string
  email: string
  company?: string
  subject: string
  message: string
}
