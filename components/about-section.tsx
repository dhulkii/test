"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Zap, Globe, Code, Award, Users, TrendingUp, Clock } from "lucide-react"

export function AboutSection() {
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

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Every infrastructure decision prioritizes security, compliance, and data protection from the ground up.",
      color: "teal",
    },
    {
      icon: Zap,
      title: "Automation Excellence",
      description: "Eliminating manual processes through intelligent automation and infrastructure as code practices.",
      color: "sky",
    },
    {
      icon: Globe,
      title: "Scalable Solutions",
      description: "Building systems that gracefully handle growth from startup to enterprise scale.",
      color: "emerald",
    },
    {
      icon: Code,
      title: "Clean Architecture",
      description: "Creating maintainable, well-documented infrastructure that teams can understand and extend.",
      color: "teal",
    },
  ]

  const stats = [
    { icon: TrendingUp, number: "5+", label: "Years Experience", description: "Building cloud infrastructure" },
    { icon: Award, number: "50+", label: "Projects Delivered", description: "Successful deployments" },
    { icon: Clock, number: "99.9%", label: "Uptime Achieved", description: "Across all systems" },
    { icon: Users, number: "15+", label: "Team Members", description: "Successfully mentored" },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      teal: "bg-teal-50 text-teal-600 border-teal-100 hover:bg-teal-100",
      sky: "bg-sky-50 text-sky-600 border-sky-100 hover:bg-sky-100",
      emerald: "bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.teal
  }

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I&apos;m a passionate DevOps engineer who believes that great infrastructure should be invisible to users but
            powerful enough to scale any ambition.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={stat.label}
                className={`text-center group transition-all duration-700 delay-${index * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-teal-50 rounded-2xl flex items-center justify-center group-hover:bg-teal-100 group-hover:scale-110 transition-all duration-300 border border-teal-100">
                  <IconComponent className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2 font-display counter">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            )
          })}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={value.title}
                className={`group card-interactive p-8 transition-all duration-700 delay-${(index + 4) * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 border ${getColorClasses(value.color)}`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
