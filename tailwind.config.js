/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background-base': '#FFF8F0',
        'background-soft': '#FFF3E6',
        'background-card': '#FFFFFF',
        'text-main': '#3B2F2F',
        'text-secondary': '#7C6F57',
        'accent-peach': '#FFB085',
        'accent-mint': '#A8E6CF',
        'accent-sky': '#89CFF0',
        'accent-lavender': '#C3B1E1',
        'accent-gold': '#FFD700',
        'border-soft': '#F5E9DA',
      },
      fontFamily: {
        sans: ['Nunito', 'Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Quicksand', 'Sora', 'Manrope', 'ui-sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(255,176,133,0.10)',
        fun: '0 2px 16px 0 rgba(168,230,207,0.15)',
      },
      borderRadius: {
        xl: '1.5rem',
        '2xl': '2.5rem',
        fun: '2rem',
      },
    },
  },
  plugins: [],
} 