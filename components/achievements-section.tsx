"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Zap, Shield, Clock } from "lucide-react"

export function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState([0, 0, 0, 0])
  const sectionRef = useRef<HTMLElement>(null)

  const achievements = [
    {
      id: "pipelines",
      icon: Target,
      value: 25,
      suffix: "+",
      label: "CI/CD Pipelines Built",
      description: "Automated deployment pipelines across multiple environments",
      color: "teal",
    },
    {
      id: "systems",
      icon: Zap,
      value: 8,
      suffix: "+",
      label: "Production AI Systems",
      description: "Machine learning infrastructure deployed and maintained",
      color: "sky",
    },
    {
      id: "security",
      icon: Shield,
      value: 12,
      suffix: "+",
      label: "Secure Cloud Stacks",
      description: "Enterprise-grade security implementations",
      color: "emerald",
    },
    {
      id: "uptime",
      icon: Clock,
      value: 99.9,
      suffix: "%",
      label: "Average Uptime",
      description: "Across all managed infrastructure and services",
      color: "teal",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          achievements.forEach((achievement, index) => {
            let start = 0
            const end = achievement.value
            const duration = 2000
            const increment = end / (duration / 16)

            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                start = end
                clearInterval(timer)
              }
              setCounters((prev) => {
                const newCounters = [...prev]
                newCounters[index] = start
                return newCounters
              })
            }, 16)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getColorClasses = (color: string) => {
    const colorMap = {
      teal: "from-teal-50 to-teal-100 border-teal-200 text-teal-600",
      sky: "from-sky-50 to-sky-100 border-sky-200 text-sky-600",
      emerald: "from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-600",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.teal
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Measurable impact through strategic infrastructure implementations and DevOps excellence
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div
                key={achievement.id}
                className={`group relative transition-all duration-700 delay-${index * 100} ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
              >
                <div className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${getColorClasses(achievement.color)}`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Counter */}
                  <div className="text-center mb-4">
                    <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2 font-display counter">
                      {Math.floor(counters[index])}
                      {achievement.suffix}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{achievement.description}</p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none ${getColorClasses(achievement.color)}`}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
