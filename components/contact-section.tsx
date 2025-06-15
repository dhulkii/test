"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Mail, MapPin, Send, Download, Linkedin, Github, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to scale your infrastructure or discuss your next cloud project? I'd love to hear about your
            challenges and explore how we can solve them together.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="card-interactive p-8 md:p-12">
              <h3 className="font-display text-3xl font-bold mb-2">Send a Message</h3>
              <p className="text-gray-600 mb-8">I typically respond within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Infrastructure Consultation"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="h-12 border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, challenges, or how I can help..."
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="resize-none border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="btn-primary w-full h-12 text-base"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Message Sent!
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 relative z-10">
                      <Send className="w-4 h-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div
            className={`space-y-8 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {/* Contact Details */}
            <div className="card p-8">
              <h4 className="font-display text-2xl font-bold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <a
                  href="mailto:muhammed.dhulkifli@example.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-teal-50 transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center group-hover:bg-teal-100 transition-colors duration-200 border border-teal-100">
                    <Mail className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600 text-sm">muhammed.dhulkifli@example.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center border border-sky-100">
                    <MapPin className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600 text-sm">Remote • Global</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card p-8">
              <h4 className="font-display text-2xl font-bold mb-6">Connect Online</h4>
              <div className="flex gap-4">
                <Button className="btn-secondary h-12 w-12 p-0" asChild>
                  <a href="#" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button className="btn-secondary h-12 w-12 p-0" asChild>
                  <a href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-gradient-to-br from-teal-50 to-sky-50 rounded-2xl p-8 border border-teal-100">
              <h4 className="font-display text-2xl font-bold mb-4">Download Resume</h4>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Get a detailed overview of my experience, skills, and achievements.
              </p>
              <Button className="btn-primary w-full">
                <a href="#" className="flex items-center gap-2 relative z-10">
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
