"use client"

import { motion } from 'framer-motion'

const skills = [
  { name: 'AWS', icon: '☁️', color: 'teal' },
  { name: 'Terraform', icon: '🏗️', color: 'sky' },
  { name: 'EKS', icon: '🧩', color: 'electric' },
  { name: 'Docker', icon: '🐳', color: 'teal' },
  { name: 'Jenkins', icon: '🤖', color: 'sky' },
  { name: 'GitHub Actions', icon: '⚙️', color: 'electric' },
  { name: 'Prometheus', icon: '📈', color: 'teal' },
  { name: 'ELK', icon: '📊', color: 'sky' },
  { name: 'Trivy', icon: '🔒', color: 'electric' },
  { name: 'CrowdSec', icon: '🛡️', color: 'teal' },
  { name: 'SonarQube', icon: '🧪', color: 'sky' },
  { name: 'Redis', icon: '🟥', color: 'electric' },
  { name: 'Aurora', icon: '💡', color: 'teal' },
  { name: 'CloudWatch', icon: '⏱️', color: 'sky' },
]

const colorMap: Record<string, string> = {
  teal: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20 hover:bg-accent-teal/20',
  sky: 'bg-accent-sky/10 text-accent-sky border-accent-sky/20 hover:bg-accent-sky/20',
  electric: 'bg-accent-electric/10 text-accent-electric border-accent-electric/20 hover:bg-accent-electric/20',
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-background-soft">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Skills & Tools
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className={`group flex flex-col items-center justify-center p-6 rounded-2xl border shadow-sm font-medium text-lg transition-all duration-300 hover:scale-105 cursor-pointer ${colorMap[skill.color]}`}
            >
              <span className="text-3xl mb-2">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 