"use client"

import React, { useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const posts = [
  {
    title: 'How to Build Secure CI/CD Pipelines',
    snippet: 'A practical guide to securing your DevOps workflows with real-world examples.',
    image: '/placeholder.svg',
    link: 'https://medium.com/@muhammeddhulkifli',
  },
  {
    title: 'Cloud Cost Optimization Strategies',
    snippet: 'Tips and tools for reducing your cloud spend while maintaining performance.',
    image: '/placeholder.svg',
    link: 'https://medium.com/@muhammeddhulkifli',
  },
  // Add more posts as needed
]

export function BlogSection() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  // Marquee animation settings
  const marqueeVariants = {
    animate: {
      x: [0, -((posts.length * 340) + 32)], // 340px card + 32px gap
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 16,
          ease: 'linear',
        },
      },
    },
  }

  return (
    <section id="blog" className="py-24 bg-background-base text-center overflow-x-hidden">
      <h2 className="font-display text-4xl font-bold mb-8 text-accent-teal">Blog</h2>
      <div className="relative w-full max-w-6xl mx-auto overflow-x-hidden">
        <motion.div
          ref={marqueeRef}
          className="flex gap-8"
          variants={marqueeVariants}
          animate="animate"
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() => controls.start('animate')}
          style={{ cursor: 'grab' }}
        >
          {[...posts, ...posts].map((post, idx) => (
            <a
              key={post.title + idx}
              href={post.link}
              target="_blank"
              rel="noopener"
              className="block bg-background-soft rounded-2xl p-6 shadow-card hover:shadow-lg transition-all text-left min-w-[320px] max-w-[340px] w-[340px]"
              style={{ flex: '0 0 340px' }}
            >
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-accent-sky mb-2 font-display">{post.title}</h3>
              <p className="text-text-main mb-2">{post.snippet}</p>
              <span className="text-accent-teal font-semibold">Read More →</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 