import './globals.css'
import { Poppins, Manrope } from 'next/font/google'
import type { Metadata } from 'next'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-poppins' })
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'Muhammed Dhulkifli K | Portfolio',
  description: 'DevOps & Cloud Engineer Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${manrope.variable}`}>
      <body className="bg-background-base text-gray-900 dark:bg-background-soft dark:text-gray-100 font-sans min-h-screen">
        {children}
      </body>
    </html>
  )
} 