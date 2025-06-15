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
        'background-base': '#FFFFFF',
        'background-soft': '#F7F8FA',
        'background-card': '#FFFFFF',
        'text-main': '#181A1B',
        'text-secondary': '#4A4A4A',
        'accent-blue': '#3B82F6',
        'accent-green': '#22C55E',
        'accent-orange': '#FB923C',
        'accent-yellow': '#FACC15',
        'accent-purple': '#A78BFA',
        'accent-black': '#181A1B',
        'border-soft': '#E5E7EB',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Playfair Display', 'Sora', 'ui-serif', 'serif'],
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(24,26,27,0.08)',
        cardHover: '0 8px 32px 0 rgba(59,130,246,0.12)',
        tag: '0 2px 8px 0 rgba(59,130,246,0.10)',
        nav: '0 2px 16px 0 rgba(24,26,27,0.06)',
      },
      borderRadius: {
        xl: '2rem',
        '2xl': '2.5rem',
        tag: '1.5rem',
      },
    },
  },
  plugins: [],
} 