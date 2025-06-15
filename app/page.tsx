"use client"

import { Navigation } from "@/components/navigation"
import { ParallaxSection } from "@/components/ui/parallax-section"
import { ProjectCard } from "@/components/ui/project-card"
import { GradientButton } from "@/components/ui/gradient-button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { AnimatedCounter } from "@/components/ui/animated-counter"

const projects = [
  {
    title: "Cloud Infrastructure Automation",
    description: "Automated cloud infrastructure deployment using Terraform and AWS",
    image: "/placeholder.svg",
    tags: ["AWS", "Terraform", "DevOps"],
    link: "#"
  },
  {
    title: "CI/CD Pipeline Optimization",
    description: "Streamlined CI/CD pipeline reducing deployment time by 60%",
    image: "/placeholder.svg",
    tags: ["Jenkins", "Docker", "Kubernetes"],
    link: "#"
  },
  {
    title: "Monitoring System",
    description: "Real-time monitoring solution with Prometheus and Grafana",
    image: "/placeholder.svg",
    tags: ["Prometheus", "Grafana", "Alerting"],
    link: "#"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <BackgroundGradient />
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <ParallaxSection speed={0.3} className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Muhammed Dhulkifli K
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            DevOps & Cloud Engineer
          </p>
          <GradientButton size="lg" className="mr-4">
            View Projects
          </GradientButton>
          <GradientButton variant="outline" size="lg">
            Contact Me
          </GradientButton>
        </ParallaxSection>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <AnimatedCounter
                end={5}
                className="text-4xl font-bold text-teal-600 mb-2"
              />
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <AnimatedCounter
                end={50}
                className="text-4xl font-bold text-teal-600 mb-2"
              />
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <AnimatedCounter
                end={30}
                className="text-4xl font-bold text-teal-600 mb-2"
              />
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
          <GradientButton size="lg">
            Get in Touch
          </GradientButton>
        </div>
      </section>
    </main>
  )
}
