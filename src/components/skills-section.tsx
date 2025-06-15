"use client"

import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Cloud & Infrastructure',
    color: 'accent-blue',
    items: [
      'AWS (EC2, S3, RDS, EKS, SQS, Lambda, CloudWatch, IAM, VPC, ALB, Auto Scaling)',
      'Terraform',
      'Ansible',
    ],
  },
  {
    category: 'CI/CD & Automation',
    color: 'accent-green',
    items: [
      'Jenkins',
      'GitHub Actions',
      'Shell Scripting (Bash)',
    ],
  },
  {
    category: 'Containerization & Orchestration',
    color: 'accent-orange',
    items: [
      'Docker',
      'Kubernetes (EKS)',
      'Docker Compose',
    ],
  },
  {
    category: 'Monitoring & Logging',
    color: 'accent-purple',
    items: [
      'Prometheus',
      'Grafana',
      'Loki',
      'Promtail',
      'AWS CloudWatch',
      'ELK Stack (Elasticsearch, Logstash, Kibana)',
    ],
  },
  {
    category: 'Security & Networking',
    color: 'accent-yellow',
    items: [
      'VPC Peering',
      'SSH Tunneling',
      'IAM Policies',
      'Security Groups',
      'Fail2Ban',
      'CrowdSec',
      'Trivy',
      'ModSecurity',
    ],
  },
  {
    category: 'Databases & Caching',
    color: 'accent-blue',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Aurora',
    ],
  },
  {
    category: 'Version Control & Code Quality',
    color: 'accent-green',
    items: [
      'Git',
      'GitHub',
      'SonarQube',
    ],
  },
  {
    category: 'Additional Technologies',
    color: 'accent-orange',
    items: [
      'Nginx',
      'Boto3 (AWS SDK)',
      'Linux Administration',
      'Medium Blogging',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="py-24 bg-background-base text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className="font-display text-4xl font-bold mb-12 text-accent-teal">Skills</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((group) => (
          <motion.div
            key={group.category}
            variants={cardVariants}
            className="bg-background-soft rounded-2xl p-8 shadow-card flex flex-col items-start"
          >
            <h3 className={`text-xl font-bold mb-4 font-display text-${group.color}`}>{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`tag ${group.color} shadow-tag text-sm px-4 py-2 font-semibold bg-${group.color} text-white`}
                  style={{ fontWeight: 600 }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 