"use client"

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Prediction System',
    description: 'CI/CD + CloudWatch + SonarQube + secure AWS',
    image: '/placeholder.svg',
    tags: ['AWS', 'CI/CD', 'CloudWatch', 'SonarQube'],
    link: '#',
  },
  {
    title: 'RAG Chatbot',
    description: 'Auto-scaling AWS + Redis + ELK',
    image: '/placeholder.svg',
    tags: ['AWS', 'Redis', 'ELK'],
    link: '#',
  },
  {
    title: 'Go Booking App',
    description: 'RDS + CloudFront + monitoring',
    image: '/placeholder.svg',
    tags: ['RDS', 'CloudFront', 'Monitoring'],
    link: '#',
  },
  {
    title: 'Laravel CRM',
    description: 'Aurora + Redis + SSM + encrypted backup',
    image: '/placeholder.svg',
    tags: ['Aurora', 'Redis', 'SSM'],
    link: '#',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40, rotateY: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              whileHover={{ scale: 1.04, rotateY: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1, type: 'spring' }}
              className="group block bg-background-soft rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-accent-teal transition-colors duration-200">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-accent-teal/10 text-accent-teal rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-block text-accent-sky font-semibold text-sm mt-2 group-hover:underline">View Project →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
} 