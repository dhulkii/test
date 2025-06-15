import React from 'react'
import { motion } from 'framer-motion'

type TagColor = 'blue' | 'green' | 'orange' | 'yellow' | 'purple';

const tags: { label: string; color: TagColor }[] = [
  { label: 'Cloud Engineer', color: 'blue' },
  { label: 'DevOps Engineer', color: 'green' },
  { label: 'Automation', color: 'orange' },
  { label: 'Security', color: 'yellow' },
  { label: 'Infra as Code', color: 'purple' },
];

const tagColorMap: Record<TagColor, string> = {
  blue: 'bg-accent-blue',
  green: 'bg-accent-green',
  orange: 'bg-accent-orange',
  yellow: 'bg-accent-yellow',
  purple: 'bg-accent-purple',
};

const tagPositionMap = [
  { top: '8%', left: '20%' },
  { top: '80%', left: '78%' },
  { top: '20%', left: '85%' },
  { top: '70%', left: '25%' },
  { top: '30%', left: '60%' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', duration: 0.7 } },
};

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex flex-col items-center justify-center bg-background-base overflow-hidden">
      {/* Floating Tags (desktop only) */}
      <motion.div
        className="absolute inset-0 pointer-events-none select-none hidden md:block"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative w-full max-w-5xl h-[400px] mx-auto">
          {tags.map((tag, i) => (
            <motion.div
              key={tag.label}
              variants={tagVariants}
              className={`tag absolute z-10 ${tagColorMap[tag.color]} shadow-tag text-base px-4 py-2 font-semibold`}
              style={{
                top: tagPositionMap[i].top,
                left: tagPositionMap[i].left,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {tag.label}
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Hero Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center text-center pt-36 pb-20 w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Profile Photo */}
        <div className="flex justify-center mb-10">
          <img
            src="/profile.jpg"
            alt="Muhammed Dhulkifli K profile photo"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-white shadow-lg bg-gray-200"
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-display text-[2.2rem] sm:text-[3rem] md:text-[4.5rem] font-bold uppercase leading-none tracking-tight text-text-main mb-8 md:mb-10"
          style={{ letterSpacing: '-0.04em' }}
        >
          Muhammed Dhulkifli K
        </motion.h1>
        {/* Tags below headline on mobile */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center md:hidden mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {tags.map((tag) => (
            <motion.span
              key={tag.label}
              variants={tagVariants}
              className={`tag ${tagColorMap[tag.color]} shadow-tag text-sm px-3 py-1 font-semibold`}
            >
              {tag.label}
            </motion.span>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="text-base md:text-2xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          DevOps & Cloud Engineer — Building secure, scalable, and automated infrastructure.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="/resume.pdf"
            className="px-7 py-3 rounded-xl font-bold text-white bg-accent-black shadow-card hover:bg-text-main transition-colors duration-200 border-2 border-accent-black"
            variants={tagVariants}
          >
            View Resume
          </motion.a>
          <motion.a
            href="https://github.com/dhulkii"
            target="_blank"
            rel="noopener"
            className="px-7 py-3 rounded-xl font-bold text-accent-black border-2 border-accent-black bg-white hover:bg-accent-black/10 transition-colors duration-200"
            variants={tagVariants}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/muhammed-dhulkifli-k-5a42772b7/"
            target="_blank"
            rel="noopener"
            className="px-7 py-3 rounded-xl font-bold text-accent-blue border-2 border-accent-blue bg-white hover:bg-accent-blue/10 transition-colors duration-200"
            variants={tagVariants}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://medium.com/@muhammeddhulkiflik"
            target="_blank"
            rel="noopener"
            className="px-7 py-3 rounded-xl font-bold text-accent-purple border-2 border-accent-purple bg-white hover:bg-accent-purple/10 transition-colors duration-200"
            variants={tagVariants}
          >
            Medium
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
} 