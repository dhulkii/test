import React from 'react'
import './globals.css'
import { Inter, Sora } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-inter' })
const sora = Sora({ subsets: ['latin'], weight: ['700'], variable: '--font-sora' })

export const metadata: Metadata = {
  title: 'Muhammed Dhulkifli K | Portfolio',
  description: 'DevOps & Cloud Engineer Portfolio — Modern, Minimal, and Premium. Inspired by fuwad.design.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="bg-background-base text-text-main font-sans min-h-screen">
        {children}
      </body>
    </html>
  )
} 