"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.6)',
        boxShadow: scrolled ? '0 2px 24px 0 rgba(0,0,0,0.06)' : '0 0px 0px 0 rgba(0,0,0,0)',
        backdropFilter: scrolled ? 'blur(8px)' : 'blur(0px)',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 font-display text-lg font-bold"
    >
      <a href="#" className="text-accent-teal text-2xl tracking-tight">MDK</a>
      <ul className="flex gap-8">
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="relative text-gray-900 dark:text-white hover:text-accent-teal transition-colors duration-200 px-2 py-1"
            >
              <span className="underline-animation">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .underline-animation {
          position: relative;
        }
        .underline-animation::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -2px;
          height: 2px;
          background: linear-gradient(90deg, #00B4D8, #0077B6, #00ff99);
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .underline-animation:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </motion.nav>
  )
} 