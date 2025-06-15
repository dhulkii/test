"use client"

import { motion } from 'framer-motion'

const skills = [
  {
    category: "Cloud Platforms",
    items: [
      { name: "AWS", level: 95 },
      { name: "Azure", level: 85 },
      { name: "GCP", level: 80 },
    ]
  },
  {
    category: "DevOps Tools",
    items: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Terraform", level: 90 },
      { name: "Ansible", level: 85 },
    ]
  },
  {
    category: "CI/CD",
    items: [
      { name: "Jenkins", level: 90 },
      { name: "GitHub Actions", level: 95 },
      { name: "GitLab CI", level: 85 },
    ]
  },
  {
    category: "Monitoring",
    items: [
      { name: "Prometheus", level: 85 },
      { name: "Grafana", level: 90 },
      { name: "ELK Stack", level: 80 },
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export function SkillsGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {skills.map((category) => (
        <motion.div
          key={category.category}
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-bold mb-6 text-accent-teal">{category.category}</h3>
          <div className="space-y-4">
            {category.items.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-accent-teal"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
} 