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
        'brand-glow': '#7FFFEB',        // Lighter mint/teal for accents (no blue)
        'brand-accent': '#5FD4B8',      // Green accent instead of orange
        'brand-mint': '#A3F5E1',        // Soft mint for highlights
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
        'glow': '0 0 30px rgba(127, 255, 235, 0.2)',
        'glow-strong': '0 0 40px rgba(95, 212, 184, 0.3)',
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
