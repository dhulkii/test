"use client"

import React from 'react'
import { motion } from 'framer-motion'

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
]

export function BlogSection() {
  return (
    <motion.section
      id="blog"
      className="py-24 bg-background-base text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-display text-4xl font-bold mb-8 text-accent-teal">Blog</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <a key={post.title} href={post.link} target="_blank" rel="noopener" className="block bg-background-soft rounded-2xl p-6 shadow-card hover:shadow-lg transition-all text-left">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-accent-sky mb-2 font-display">{post.title}</h3>
            <p className="text-text-main mb-2">{post.snippet}</p>
            <span className="text-accent-teal font-semibold">Read More →</span>
          </a>
        ))}
      </div>
    </motion.section>
  )
} 