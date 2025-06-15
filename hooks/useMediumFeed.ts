"use client"

import { useState, useEffect } from "react"
import type { BlogPost } from "@/types"

const MEDIUM_RSS_URL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yourusername"

export function useMediumFeed() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)

      // For demo purposes, using mock data
      // In production, you'd fetch from the actual RSS API
      const mockPosts: BlogPost[] = [
        {
          title: "Building Secure CI/CD Pipelines with GitHub Actions",
          link: "https://medium.com/@example/secure-cicd-pipelines",
          pubDate: "2024-01-15T10:00:00Z",
          description:
            "Learn how to implement security scanning, secret management, and compliance checks in your automated deployment workflows.",
          categories: ["DevOps", "Security", "CI/CD"],
          guid: "1",
          readTime: "8 min read",
        },
        {
          title: "Kubernetes Security Best Practices for Production",
          link: "https://medium.com/@example/k8s-security",
          pubDate: "2024-01-08T14:30:00Z",
          description:
            "A comprehensive guide to securing your Kubernetes clusters with RBAC, network policies, and runtime security.",
          categories: ["Kubernetes", "Security", "DevOps"],
          guid: "2",
          readTime: "12 min read",
        },
        {
          title: "Infrastructure as Code with Terraform: Advanced Patterns",
          link: "https://medium.com/@example/terraform-patterns",
          pubDate: "2024-01-01T09:15:00Z",
          description:
            "Master Terraform best practices for managing cloud infrastructure at scale with modules, state management, and automation.",
          categories: ["Terraform", "IaC", "AWS"],
          guid: "3",
          readTime: "10 min read",
        },
      ]

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setPosts(mockPosts)
    } catch (err) {
      setError("Failed to fetch blog posts")
      console.error("Error fetching Medium posts:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return { posts, loading, error, refetch: () => fetchPosts() }
}
