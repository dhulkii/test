"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from './ui/cn'

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'devops', label: 'DevOps' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'automation', label: 'Automation' },
  { id: 'infrastructure', label: 'Infrastructure' }
]

interface ProjectFiltersProps {
  onFilterChange: (category: string) => void
  activeCategory: string
}

export function ProjectFilters({ onFilterChange, activeCategory }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-medium transition-colors",
            activeCategory === category.id
              ? "bg-accent-teal text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  category: string
  image: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, category, image, tags, link }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-accent-teal hover:text-accent-sky transition-colors"
        >
          View Project
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  )
} 