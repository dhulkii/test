"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              {/* Status Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-8"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for new opportunities
              </motion.div>

              {/* Main Heading */}
              <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="block text-gray-900">Muhammed</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Dhulkifli K
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-2xl sm:text-3xl text-gray-600 mb-6 font-light">
                DevOps & Cloud Engineer
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                I architect and automate cloud infrastructure that scales. Specializing in AWS, Kubernetes, and DevOps
                practices that transform how teams deploy and manage applications with security and reliability at the
                core.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="group" asChild>
                  <a href="#projects" className="flex items-center gap-2">
                    View My Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-4">
                <Button size="icon" variant="ghost" asChild>
                  <a href="https://github.com" aria-label="GitHub Profile">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" asChild>
                  <a href="https://linkedin.com" aria-label="LinkedIn Profile">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="icon" variant="ghost" asChild>
                  <a href="mailto:contact@example.com" aria-label="Email Contact">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <motion.div
                  className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Muhammed Dhulkifli K - DevOps Engineer"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full shadow-lg"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full shadow-lg"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-gray-400 hover:text-blue-600 transition-colors group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 group-hover:h-4 transition-all" />
          </div>
          <span className="text-xs mt-2 font-medium">Scroll</span>
        </motion.a>
      </motion.div>
    </section>
  )
}
