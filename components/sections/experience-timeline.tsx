"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink, TrendingUp, Briefcase } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import type { Experience } from "@/types"

export function ExperienceTimeline() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  const experiences: Experience[] = [
    {
      id: "senior-devops",
      title: "Senior DevOps Engineer",
      company: "TechCorp Solutions",
      location: "Remote",
      period: "2023 - Present",
      current: true,
      description:
        "Leading infrastructure automation initiatives for a team of 15+ engineers. Architected multi-cloud solutions serving 1M+ users with 99.99% uptime.",
      achievements: [
        "Reduced deployment time by 85% through CI/CD optimization",
        "Implemented zero-downtime deployments across 50+ microservices",
        "Led migration to Kubernetes, reducing infrastructure costs by 40%",
        "Mentored 8 junior engineers in DevOps best practices",
        "Established security best practices achieving SOC 2 compliance",
      ],
      technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Docker", "Prometheus", "Grafana"],
      impact: "40% cost reduction, 85% faster deployments, 99.99% uptime",
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      company: "CloudFirst Inc",
      location: "San Francisco, CA",
      period: "2021 - 2023",
      current: false,
      description:
        "Built and maintained cloud infrastructure for high-traffic applications. Specialized in container orchestration and monitoring solutions.",
      achievements: [
        "Designed auto-scaling infrastructure handling 10x traffic spikes",
        "Implemented comprehensive monitoring reducing MTTR by 60%",
        "Built disaster recovery systems with 99.9% data integrity",
        "Automated security scanning reducing vulnerabilities by 75%",
      ],
      technologies: ["AWS", "Docker", "Prometheus", "Grafana", "Python", "Ansible", "ELK Stack"],
      impact: "60% faster incident resolution, 75% fewer security vulnerabilities",
    },
    {
      id: "cloud-engineer",
      title: "Cloud Engineer",
      company: "StartupTech",
      location: "Austin, TX",
      period: "2020 - 2021",
      current: false,
      description:
        "Established DevOps practices from ground up. Built CI/CD pipelines and cloud infrastructure for rapid scaling startup environment.",
      achievements: [
        "Set up complete AWS infrastructure from scratch",
        "Implemented automated testing reducing bugs by 70%",
        "Created documentation and training programs for development team",
        "Achieved 99.5% uptime in first year of operations",
      ],
      technologies: ["AWS", "GitHub Actions", "Ansible", "MySQL", "Redis", "CloudFormation"],
      impact: "70% reduction in bugs, 99.5% uptime achieved",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of growth, innovation, and measurable impact in cloud infrastructure and DevOps excellence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-30" />

            {experiences.map((exp, index) => (
              <motion.div key={exp.id} variants={itemVariants} className="relative mb-12 last:mb-0">
                <div className="flex items-start gap-8">
                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                        exp.current
                          ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                          : "bg-white border-2 border-gray-200 text-gray-600"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Briefcase className="w-8 h-8" />
                    </motion.div>

                    {exp.current && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    )}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-2">
                          <div className="flex items-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            <span className="font-semibold text-blue-600">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">{exp.period}</span>
                        {exp.current && (
                          <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Impact Highlight */}
                    <div className="flex items-start gap-3 mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                      <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800 mb-1">Key Impact</h4>
                        <p className="text-green-700 text-sm">{exp.impact}</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
