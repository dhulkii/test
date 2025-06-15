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
        'background-base': '#F8FAFC',
        'background-soft': '#F1F5F9',
        'text-main': '#1E293B',
        'text-secondary': '#64748B',
        'accent-teal': '#00B4D8',
        'accent-sky': '#0077B6',
        'accent-electric': '#00FF99',
        'border-soft': '#E2E8F0',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        display: ['Manrope', 'ui-sans-serif'],
      },
      boxShadow: {
        card: '0 4px 32px 0 rgba(20,184,166,0.08)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
} 