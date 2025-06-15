import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Muhammed Dhulkifli K - DevOps & Cloud Engineer | AWS Expert",
  description:
    "Senior DevOps & Cloud Engineer specializing in AWS, Kubernetes, Terraform, and CI/CD. Building scalable, secure infrastructure that powers modern applications.",
  keywords: [
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS Expert",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Infrastructure as Code",
    "Docker",
    "Jenkins",
    "Cloud Architecture",
  ],
  authors: [{ name: "Muhammed Dhulkifli K", url: "https://yourwebsite.com" }],
  creator: "Muhammed Dhulkifli K",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Muhammed Dhulkifli K - DevOps & Cloud Engineer",
    description:
      "Senior DevOps & Cloud Engineer specializing in AWS, Kubernetes, and modern infrastructure automation.",
    siteName: "Muhammed Dhulkifli K Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammed Dhulkifli K - DevOps & Cloud Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Dhulkifli K - DevOps & Cloud Engineer",
    description:
      "Senior DevOps & Cloud Engineer specializing in AWS, Kubernetes, and modern infrastructure automation.",
    images: ["/og-image.jpg"],
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammed Dhulkifli K",
  jobTitle: "DevOps & Cloud Engineer",
  description: "Senior DevOps & Cloud Engineer specializing in AWS, Kubernetes, and modern infrastructure automation.",
  url: "https://yourwebsite.com",
  sameAs: [
    "https://linkedin.com/in/yourprofile",
    "https://github.com/yourusername",
    "https://medium.com/@yourusername",
  ],
  knowsAbout: [
    "DevOps",
    "Cloud Computing",
    "AWS",
    "Kubernetes",
    "Terraform",
    "Docker",
    "CI/CD",
    "Infrastructure as Code",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased">
        <Suspense>
          {children}
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  )
}
