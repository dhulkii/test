"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaAws, FaJenkins, FaGithub, FaDocker, FaShieldAlt, FaDatabase, FaGitAlt, FaLinux, FaMedium } from 'react-icons/fa';
import { SiTerraform, SiAnsible, SiGithubactions, SiGrafana, SiElastic, SiMysql, SiPostgresql, SiMongodb, SiRedis, SiSonarqube, SiTrivy, SiShell, SiAmazoncloudwatch } from 'react-icons/si';

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

const skillIcons: Record<string, JSX.Element> = {
  'AWS (EC2, S3, RDS, EKS, SQS, Lambda, CloudWatch, IAM, VPC, ALB, Auto Scaling)': <FaAws className="inline mr-2" />,
  'Terraform': <SiTerraform className="inline mr-2" />,
  'Ansible': <SiAnsible className="inline mr-2" />,
  'Jenkins': <FaJenkins className="inline mr-2" />,
  'GitHub Actions': <SiGithubactions className="inline mr-2" />,
  'Shell Scripting (Bash)': <SiShell className="inline mr-2" />,
  'Docker': <FaDocker className="inline mr-2" />,
  'Grafana': <SiGrafana className="inline mr-2" />,
  'Promtail': <SiGrafana className="inline mr-2" />,
  'AWS CloudWatch': <SiAmazoncloudwatch className="inline mr-2" />,
  'ELK Stack (Elasticsearch, Logstash, Kibana)': <SiElastic className="inline mr-2" />,
  'VPC Peering': <FaShieldAlt className="inline mr-2" />,
  'SSH Tunneling': <FaShieldAlt className="inline mr-2" />,
  'IAM Policies': <FaShieldAlt className="inline mr-2" />,
  'Security Groups': <FaShieldAlt className="inline mr-2" />,
  'Fail2Ban': <FaShieldAlt className="inline mr-2" />,
  'Trivy': <SiTrivy className="inline mr-2" />,
  'PostgreSQL': <SiPostgresql className="inline mr-2" />,
  'MySQL': <SiMysql className="inline mr-2" />,
  'MongoDB': <SiMongodb className="inline mr-2" />,
  'Redis': <SiRedis className="inline mr-2" />,
  'Aurora': <FaDatabase className="inline mr-2" />,
  'Git': <FaGitAlt className="inline mr-2" />,
  'GitHub': <FaGithub className="inline mr-2" />,
  'SonarQube': <SiSonarqube className="inline mr-2" />,
  'Linux Administration': <FaLinux className="inline mr-2" />,
  'Medium Blogging': <FaMedium className="inline mr-2" />,
};

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
                  className={`tag ${group.color} shadow-tag text-sm px-4 py-2 font-semibold bg-${group.color} text-white flex items-center`}
                  style={{ fontWeight: 600 }}
                >
                  {skillIcons[item] && <span className="mr-1">{skillIcons[item]}</span>}
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