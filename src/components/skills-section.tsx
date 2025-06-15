"use client"

import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { category: 'DevOps', items: ['CI/CD', 'Infrastructure Automation', 'Cloud Security', 'Monitoring', 'Deployment'] },
  { category: 'Tools', items: ['Jenkins', 'GitHub Actions', 'Terraform', 'Docker', 'Kubernetes (EKS)', 'SonarQube', 'Prometheus', 'ELK stack', 'CrowdSec', 'Trivy'] },
  { category: 'Cloud Platforms', items: ['AWS (EC2, S3, RDS, Lambda, IAM, CloudFront, CloudWatch, SSM)'] },
]

export function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="py-24 bg-background-base text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-display text-4xl font-bold mb-8 text-accent-teal">Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((group) => (
          <div key={group.category} className="bg-background-soft rounded-2xl p-6 shadow-card">
            <h3 className="text-xl font-semibold mb-4 text-accent-sky">{group.category}</h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-text-main flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-accent-teal rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  )
} 