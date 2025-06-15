"use client"

import { useEffect, useRef, useState } from "react"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      color: "teal",
      skills: [
        { name: "Amazon Web Services", level: 95 },
        { name: "Google Cloud Platform", level: 85 },
        { name: "Microsoft Azure", level: 80 },
        { name: "DigitalOcean", level: 90 },
      ],
    },
    {
      title: "Infrastructure as Code",
      icon: "🏗️",
      color: "sky",
      skills: [
        { name: "Terraform", level: 95 },
        { name: "CloudFormation", level: 90 },
        { name: "Ansible", level: 85 },
        { name: "Pulumi", level: 75 },
      ],
    },
    {
      title: "Container & Orchestration",
      icon: "🐳",
      color: "emerald",
      skills: [
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 90 },
        { name: "Helm", level: 85 },
        { name: "Docker Compose", level: 90 },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          // Animate skill bars
          skillCategories.forEach((category) => {
            category.skills.forEach((skill) => {
              let current = 0
              const target = skill.level
              const increment = target / 60 // 60 frames for smooth animation

              const timer = setInterval(() => {
                current += increment
                if (current >= target) {
                  current = target
                  clearInterval(timer)
                }
                setAnimatedSkills((prev) => ({
                  ...prev,
                  [skill.name]: current,
                }))
              }, 16)
            })
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
      teal: "from-teal-500 to-teal-600",
      sky: "from-sky-500 to-sky-600",
      emerald: "from-emerald-500 to-emerald-600",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.teal
  }

  const getBgColorClasses = (color: string) => {
    const colorMap = {
      teal: "bg-teal-50 border-teal-100 hover:bg-teal-100",
      sky: "bg-sky-50 border-sky-100 hover:bg-sky-100",
      emerald: "bg-emerald-50 border-emerald-100 hover:bg-emerald-100",
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
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through years of hands-on experience with modern infrastructure technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`card-interactive p-8 transition-all duration-700 delay-${categoryIndex * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl border transition-all duration-300 ${getBgColorClasses(category.color)}`}
                >
                  {category.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        {Math.round(animatedSkills[skill.name] || 0)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 bg-gradient-to-r rounded-full transition-all duration-1000 ease-out ${getColorClasses(category.color)}`}
                        style={{
                          width: `${animatedSkills[skill.name] || 0}%`,
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
