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
        'background-base': '#10141A',
        'background-glass': 'rgba(24, 28, 38, 0.7)',
        'background-gradient': 'linear-gradient(135deg, #10141A 0%, #1A2233 100%)',
        'text-main': '#F8FAFC',
        'text-secondary': '#A0AEC0',
        'accent-neon': '#00FFF7',
        'accent-blue': '#1E90FF',
        'accent-purple': '#A259FF',
        'accent-gold': '#FFD700',
        'accent-green': '#00FF99',
        'border-glass': 'rgba(255,255,255,0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
        display: ['Sora', 'Manrope', 'ui-sans-serif'],
      },
      boxShadow: {
        card: '0 8px 40px 0 rgba(0,255,247,0.10)',
        glass: '0 4px 32px 0 rgba(0,0,0,0.25)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
} 