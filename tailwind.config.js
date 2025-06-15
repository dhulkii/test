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
        'background-base': '#F7FAFC',
        'background-soft': '#F1F5F9',
        'background-card': '#FFFFFF',
        'text-main': '#1A202C',
        'text-secondary': '#4A5568',
        'accent-primary': '#2563EB',
        'accent-teal': '#14B8A6',
        'accent-gold': '#FFD700',
        'border-soft': '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
        display: ['Sora', 'ui-sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(37,99,235,0.08)',
        cardHover: '0 8px 32px 0 rgba(20,184,166,0.12)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
} 