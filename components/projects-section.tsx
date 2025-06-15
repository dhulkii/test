"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
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

  const projects = [
    {
      id: "ai-prediction",
      title: "AI-Based Prediction System",
      description:
        "Scalable machine learning infrastructure with automated CI/CD pipelines, comprehensive monitoring, and security scanning.",
      tags: ["AWS", "Kubernetes", "Jenkins", "CloudWatch", "SonarQube", "Trivy"],
      metrics: ["99.9% Uptime", "10M+ Daily Predictions", "50% Cost Reduction"],
      featured: true,
      gradient: "from-teal-400 to-sky-500",
    },
    {
      id: "rag-chatbot",
      title: "RAG Chatbot Infrastructure",
      description:
        "High-performance chatbot infrastructure with Redis caching, ELK stack monitoring, and auto-scaling capabilities.",
      tags: ["AWS", "Redis", "ELK", "Docker", "Terraform", "Prometheus"],
      metrics: ["<100ms Response", "10K+ Concurrent Users", "Auto-scaling"],
      featured: true,
      gradient: "from-sky-400 to-emerald-500",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real-world infrastructure projects that showcase scalable architecture, security best practices, and
            measurable business impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group card-interactive overflow-hidden transition-all duration-700 delay-${index * 200} hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Project Image/Header */}
              <div className={`relative overflow-hidden h-64 bg-gradient-to-br ${project.gradient} opacity-90`}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button size="sm" className="btn-secondary h-8 w-8 p-0 backdrop-blur-sm">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="btn-secondary h-8 w-8 p-0 backdrop-blur-sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full border border-white/20">
                    Featured
                  </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm" />
                <div className="absolute top-1/2 right-8 w-4 h-4 bg-white/30 rounded-full backdrop-blur-sm" />
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="text-center p-3 bg-gray-50 rounded-xl border border-gray-100 hover:bg-teal-50 hover:border-teal-200 transition-all duration-200"
                    >
                      <div className="text-sm font-semibold text-gray-900">{metric}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-200 hover:bg-teal-100 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Button className="btn-ghost w-full group/btn">
                  View Case Study
                  <ArrowUpRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
