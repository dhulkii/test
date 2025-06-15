"use client"

import { motion } from 'framer-motion'

const posts = [
  {
    title: 'Building Secure CI/CD Pipelines with GitHub Actions',
    link: '#',
    date: '2024-01-15',
    description: 'Implement security scanning, secret management, and compliance checks in your automated deployment workflows.',
    tags: ['DevOps', 'Security', 'CI/CD'],
  },
  {
    title: 'Kubernetes Security Best Practices for Production',
    link: '#',
    date: '2024-01-08',
    description: 'A comprehensive guide to securing your Kubernetes clusters with RBAC, network policies, and runtime security.',
    tags: ['Kubernetes', 'Security', 'DevOps'],
  },
  {
    title: 'Infrastructure as Code with Terraform: Advanced Patterns',
    link: '#',
    date: '2024-01-01',
    description: 'Master Terraform best practices for managing cloud infrastructure at scale with modules, state management, and automation.',
    tags: ['Terraform', 'IaC', 'AWS'],
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-background-soft">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Latest Insights
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="block bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="font-display text-xl font-bold mb-2 text-accent-teal group-hover:text-accent-sky transition-colors duration-200">{post.title}</h3>
              <p className="text-gray-600 mb-3 text-sm">{post.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-accent-sky/10 text-accent-sky rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-block text-accent-sky font-semibold text-xs mt-2 group-hover:underline">Read More →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
} 