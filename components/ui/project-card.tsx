"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  className?: string
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  className,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center text-sm font-medium text-teal-600">
          View Project
          <svg
            className={cn(
              "ml-1 h-4 w-4 transition-transform duration-300",
              isHovered && "translate-x-1"
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
    </a>
  )
} 