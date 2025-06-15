"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, ExternalLink, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { useMediumFeed } from "@/hooks/useMediumFeed"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

export function BlogSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  const { posts, loading, error, refetch } = useMediumFeed()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      DevOps: "bg-blue-100 text-blue-700 border-blue-200",
      Security: "bg-red-100 text-red-700 border-red-200",
      "CI/CD": "bg-green-100 text-green-700 border-green-200",
      Kubernetes: "bg-purple-100 text-purple-700 border-purple-200",
      Terraform: "bg-orange-100 text-orange-700 border-orange-200",
      AWS: "bg-yellow-100 text-yellow-700 border-yellow-200",
      IaC: "bg-indigo-100 text-indigo-700 border-indigo-200",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700 border-gray-200"
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
            Latest{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Sharing knowledge about DevOps practices, cloud architecture, and infrastructure automation
          </p>

          {error && (
            <div className="flex items-center justify-center gap-4 p-4 bg-red-50 border border-red-200 rounded-xl max-w-md mx-auto">
              <span className="text-red-600 text-sm">{error}</span>
              <Button size="sm" variant="outline" onClick={refetch}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Retry
              </Button>
            </div>
          )}
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <LoadingSpinner size="lg" className="mx-auto mb-4" />
              <p className="text-gray-600">Loading latest articles...</p>
            </div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {posts.map((post, index) => (
              <motion.article
                key={post.guid}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Post Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" variant="secondary" className="h-8 w-8 shadow-lg">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm" />
                  <div className="absolute top-1/2 right-8 w-4 h-4 bg-white/30 rounded-full backdrop-blur-sm" />
                </div>

                {/* Post Content */}
                <div className="p-6">
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

                  <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{post.description}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.pubDate)}
                      </div>
                      {post.readTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="group/btn w-full justify-between hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 p-0 h-auto"
                    asChild
                  >
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full py-3"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.article>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
            asChild
          >
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
        </motion.div>
      </div>
    </section>
  )
}
