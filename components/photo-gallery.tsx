"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ProfessionalPhoto } from "./professional-photo"

export function PhotoGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const photos = [
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "Muhammed Dhulkifli K - Professional Headshot",
      caption: "Professional Headshot",
    },
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "Muhammed Dhulkifli K - Conference Speaking",
      caption: "Speaking at DevOps Conference",
    },
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "Muhammed Dhulkifli K - Team Collaboration",
      caption: "Leading Infrastructure Team",
    },
  ]

  return (
    <section className="py-16 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-heading font-bold mb-4">
            Professional <span className="gradient-text">Gallery</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <ProfessionalPhoto src={photo.src} alt={photo.alt} size="lg" variant="rounded" className="mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">{photo.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
