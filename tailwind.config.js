/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-main': '#11231F',
        'brand-secondary': '#4A9888',
        'brand-text': '#B5D2CE',
        'brand-deep': '#112836',
        'brand-glow': '#6FE7D8',
        'brand-accent': '#F2C572',
      },
      fontFamily: {
        'heading': ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
        'card-lg': '24px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(111, 231, 216, 0.15)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #11231F 0%, #112836 50%, #4A9888 100%)',
      },
    },
  },
  plugins: [],
}
