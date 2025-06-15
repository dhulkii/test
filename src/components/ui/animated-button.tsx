"use client"

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode
  variant?: 'primary' | 'outline'
}

export function AnimatedButton({ children, variant = 'primary', ...props }: AnimatedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, boxShadow: '0 4px 32px 0 rgba(20,184,166,0.10)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={
        variant === 'primary'
          ? 'px-6 py-3 rounded-xl font-bold text-white bg-accent-teal shadow-lg hover:bg-accent-sky transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-sky'
          : 'px-6 py-3 rounded-xl font-bold text-accent-teal border-2 border-accent-teal bg-white hover:bg-accent-teal/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-sky'
      }
      {...props}
    >
      {children}
    </motion.button>
  )
} 