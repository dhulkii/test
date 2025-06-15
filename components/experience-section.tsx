"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, ExternalLink, TrendingUp, Briefcase } from "lucide-react"

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      id: "senior-devops",
      title: "Senior DevOps Engineer",
      company: "TechCorp Solutions",
      location: "Remote",
      period: "2023 - Present",
      current: true,
      description: "Leading infrastructure automation initiatives for a team of 15+ engineers.",
      achievements: [
        "Reduced deployment time by 85% through CI/CD optimization",
        "Implemented zero-downtime deployments across 50+ microservices",
        "Led migration to Kubernetes, reducing infrastructure costs by 40%",
        "Mentored 8 junior engineers in DevOps best practices",
      ],
      technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Docker", "Prometheus"],
      impact: "40% cost reduction, 85% faster deployments, 99.99% uptime",
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      company: "CloudFirst Inc",
      location: "San Francisco, CA",
      period: "2021 - 2023",
      current: false,
      description: "Built and maintained cloud infrastructure for high-traffic applications.",
      achievements: [
        "Designed auto-scaling infrastructure handling 10x traffic spikes",
        "Implemented comprehensive monitoring reducing MTTR by 60%",
        "Built disaster recovery systems with 99.9% data integrity",
        "Automated security scanning reducing vulnerabilities by 75%",
      ],
      technologies: ["AWS", "Docker", "Prometheus", "Grafana", "Python", "Ansible"],
      impact: "60% faster incident resolution, 75% fewer security vulnerabilities",
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A timeline of growth, innovation, and measurable impact in cloud infrastructure and DevOps excellence
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-sky-500 to-emerald-500 opacity-30" />

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 last:mb-0 transition-all duration-700 delay-${index * 200} ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="flex items-start gap-8">
                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
                        exp.current
                          ? "bg-gradient-to-br from-teal-500 to-sky-600 text-white"
                          : "bg-white border-2 border-gray-200 text-gray-600 hover:border-teal-300"
                      }`}
                    >
                      <Briefcase className="w-8 h-8" />
                    </div>

                    {exp.current && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 card-interactive p-8 hover:shadow-xl">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-2">
                          <div className="flex items-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            <span className="font-semibold text-teal-600">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">{exp.period}</span>
                        {exp.current && (
                          <span className="ml-2 px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Impact Highlight */}
                    <div className="flex items-start gap-3 mb-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                      <TrendingUp className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-emerald-800 mb-1">Key Impact</h4>
                        <p className="text-emerald-700 text-sm">{exp.impact}</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
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
                            className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-200 hover:bg-teal-100 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
