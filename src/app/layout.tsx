import React from 'react'
import './globals.css'
import { Nunito, Quicksand } from 'next/font/google'
import type { Metadata } from 'next'

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-nunito' })
const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-quicksand' })

export const metadata: Metadata = {
  title: 'Muhammed Dhulkifli K | Portfolio',
  description: 'DevOps & Cloud Engineer Portfolio — Friendly, Fun, and Playful!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${quicksand.variable}`}>
      <body className="bg-background-base text-text-main font-sans min-h-screen">
        {children}
      </body>
    </html>
  )
} 