"use client"

import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2017',
    title: 'Started as a Cloud Enthusiast',
    description: 'Began exploring AWS, Linux, and automation tools.'
  },
  {
    year: '2019',
    title: 'DevOps Engineer',
    description: 'Built CI/CD pipelines, automated cloud deployments, and improved reliability.'
  },
  {
    year: '2021',
    title: 'Senior DevOps & Cloud Engineer',
    description: 'Led cloud migrations, mentored engineers, and architected secure, scalable systems.'
  },
  {
    year: '2024',
    title: 'Award-Winning Infrastructure',
    description: 'Delivered high-impact projects, published on Medium, and recognized for technical excellence.'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          My Journey
        </motion.h2>
        <ol className="relative border-l-4 border-accent-teal/30">
          {timeline.map((item, idx) => (
            <motion.li
              key={item.year}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="mb-12 ml-8"
            >
              <span className="absolute -left-6 top-2 w-4 h-4 bg-accent-teal rounded-full border-4 border-white shadow-lg" />
              <h3 className="font-display text-2xl font-semibold text-accent-teal mb-1">{item.year}</h3>
              <h4 className="text-xl font-bold mb-1">{item.title}</h4>
              <p className="text-gray-600 text-lg">{item.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
} 