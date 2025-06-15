"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BlogSection() {
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

  const blogPosts = [
    {
      title: "Building Secure CI/CD Pipelines with GitHub Actions",
      link: "https://medium.com/@example/secure-cicd-pipelines",
      pubDate: "2024-01-15T10:00:00Z",
      description:
        "Learn how to implement security scanning, secret management, and compliance checks in your automated deployment workflows.",
      categories: ["DevOps", "Security", "CI/CD"],
      readTime: "8 min read",
      gradient: "from-teal-400 to-sky-500",
    },
    {
      title: "Kubernetes Security Best Practices for Production",
      link: "https://medium.com/@example/k8s-security",
      pubDate: "2024-01-08T14:30:00Z",
      description:
        "A comprehensive guide to securing your Kubernetes clusters with RBAC, network policies, and runtime security.",
      categories: ["Kubernetes", "Security", "DevOps"],
      readTime: "12 min read",
      gradient: "from-sky-400 to-emerald-500",
    },
    {
      title: "Infrastructure as Code with Terraform: Advanced Patterns",
      link: "https://medium.com/@example/terraform-patterns",
      pubDate: "2024-01-01T09:15:00Z",
      description:
        "Master Terraform best practices for managing cloud infrastructure at scale with modules, state management, and automation.",
      categories: ["Terraform", "IaC", "AWS"],
      readTime: "10 min read",
      gradient: "from-emerald-400 to-teal-500",
    },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      DevOps: "bg-teal-100 text-teal-700 border-teal-200",
      Security: "bg-red-100 text-red-700 border-red-200",
      "CI/CD": "bg-emerald-100 text-emerald-700 border-emerald-200",
      Kubernetes: "bg-sky-100 text-sky-700 border-sky-200",
      Terraform: "bg-orange-100 text-orange-700 border-orange-200",
      AWS: "bg-yellow-100 text-yellow-700 border-yellow-200",
      IaC: "bg-purple-100 text-purple-700 border-purple-200",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700 border-gray-200"
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Sharing knowledge about DevOps practices, cloud architecture, and infrastructure automation
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className={`group card-interactive overflow-hidden transition-all duration-700 delay-${index * 200} hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Post Header */}
              <div className={`relative overflow-hidden h-48 bg-gradient-to-br ${post.gradient} opacity-90`}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

                {/* Action Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button size="icon" className="btn-secondary h-8 w-8 backdrop-blur-sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full backdrop-blur-sm" />
                <div className="absolute top-1/3 right-6 w-3 h-3 bg-white/30 rounded-full backdrop-blur-sm" />
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.slice(0, 2).map((category) => (
                    <span
                      key={category}
                      className={`px-2 py-1 text-xs font-medium rounded-md border ${getCategoryColor(category)}`}
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold mb-3 group-hover:text-teal-600 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{post.description}</p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.pubDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="btn-ghost w-full group/btn" asChild>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Button className="btn-secondary" asChild>
            <a
              href="https://medium.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View All Articles on Medium
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
