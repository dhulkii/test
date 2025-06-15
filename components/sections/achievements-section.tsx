"use client"

import { motion } from "framer-motion"
import { Target, Zap, Shield, Award, TrendingUp, Users, Clock, Star } from "lucide-react"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import type { Achievement } from "@/types"

export function AchievementsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 })

  const achievements: Achievement[] = [
    {
      id: "pipelines",
      icon: Target,
      value: 25,
      suffix: "+",
      label: "CI/CD Pipelines Built",
      description: "Automated deployment pipelines across multiple environments",
      color: "blue",
    },
    {
      id: "systems",
      icon: Zap,
      value: 8,
      suffix: "+",
      label: "Production AI Systems",
      description: "Machine learning infrastructure deployed and maintained",
      color: "purple",
    },
    {
      id: "security",
      icon: Shield,
      value: 12,
      suffix: "+",
      label: "Secure Cloud Stacks",
      description: "Enterprise-grade security implementations",
      color: "green",
    },
    {
      id: "uptime",
      icon: Clock,
      value: 99.9,
      suffix: "%",
      label: "Average Uptime",
      description: "Across all managed infrastructure and services",
      color: "orange",
    },
    {
      id: "cost-savings",
      icon: TrendingUp,
      value: 40,
      suffix: "%",
      label: "Cost Reduction",
      description: "Average infrastructure cost optimization achieved",
      color: "emerald",
    },
    {
      id: "team-size",
      icon: Users,
      value: 15,
      suffix: "+",
      label: "Engineers Mentored",
      description: "Junior developers guided in DevOps practices",
      color: "pink",
    },
    {
      id: "certifications",
      icon: Award,
      value: 5,
      suffix: "",
      label: "AWS Certifications",
      description: "Professional cloud architecture certifications",
      color: "indigo",
    },
    {
      id: "rating",
      icon: Star,
      value: 4.9,
      suffix: "/5",
      label: "Client Satisfaction",
      description: "Average rating from project stakeholders",
      color: "yellow",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500/20 to-blue-600/20 text-blue-600 border-blue-200",
      purple: "from-purple-500/20 to-purple-600/20 text-purple-600 border-purple-200",
      green: "from-green-500/20 to-green-600/20 text-green-600 border-green-200",
      orange: "from-orange-500/20 to-orange-600/20 text-orange-600 border-orange-200",
      emerald: "from-emerald-500/20 to-emerald-600/20 text-emerald-600 border-emerald-200",
      pink: "from-pink-500/20 to-pink-600/20 text-pink-600 border-pink-200",
      indigo: "from-indigo-500/20 to-indigo-600/20 text-indigo-600 border-indigo-200",
      yellow: "from-yellow-500/20 to-yellow-600/20 text-yellow-600 border-yellow-200",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Proven{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measurable impact through strategic infrastructure implementations and DevOps excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement) => (
            <motion.div key={achievement.id} variants={itemVariants} className="group relative">
              <div className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${getColorClasses(achievement.color)} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className="w-8 h-8" />
                </div>

                {/* Counter */}
                <div className="text-center mb-4">
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter value={achievement.value} suffix={achievement.suffix} duration={2500} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${getColorClasses(achievement.color)} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                <AnimatedCounter value={5} suffix="+" />
              </div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                <AnimatedCounter value={50} suffix="+" />
              </div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                <AnimatedCounter value={100} suffix="%" />
              </div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
