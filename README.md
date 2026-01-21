# AtlasPro AI - Frontend Application

> **A modern, high-performance marketing website for AtlasPro AI** - The spatial intelligence platform that makes the physical world machine-readable.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-92%2B-success)](https://developers.google.com/web/tools/lighthouse)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Key Features](#-key-features)
- [Performance](#-performance)
- [Design System](#-design-system)
- [Development](#-development)
- [Documentation](#-documentation)
- [Deployment](#-deployment)

---

## 🎯 Overview

AtlasPro AI's frontend is a cutting-edge web application built with modern web technologies, optimized for performance, accessibility, and user experience.

### Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Maps**: Leaflet with React-Leaflet
- **Icons**: Lucide React
- **Performance**: Optimized with lazy loading, memoization, and GPU acceleration

### Live Pages

- 🏠 **Home** (`/`) - Full marketing page with hero, features, use cases
- 📦 **Product** (`/product`) - Platform overview with interactive map
- 💼 **Use Cases** (`/use-cases`) - Industry-specific solutions
- 👥 **About** (`/about`) - Company information and values
- 📞 **Contact** (`/contact`) - Demo request form
- 📚 **Research** (`/research`) - Research publications
- ✍️ **Blog** (`/blog`) - Company blog posts
- 📄 **Whitepapers** (`/whitepapers`) - Technical whitepapers

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/AtlasPro-AI/atlasproai-ui-new.git

# Navigate to project
cd atlasproai-ui-new

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Bundle Analysis

```bash
# Analyze bundle size
ANALYZE=true npm run build
```

---

## 📁 Project Structure

```
atlaspro-frontend-new-1/
│
├── 📂 src/                     # Source code
│   ├── 📂 app/                 # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── product/            # Product page
│   │   ├── use-cases/          # Use cases page
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── research/           # Research posts
│   │   ├── blog/               # Blog posts
│   │   └── whitepapers/        # Whitepapers
│   ├── 📂 components/          # React components
│   │   ├── Navbar.tsx          # Navigation
│   │   ├── Hero.tsx            # Hero section
│   │   ├── InteractiveMap.tsx  # Leaflet map
│   │   ├── Footer.tsx          # Footer
│   │   └── ...                 # Other components
│   ├── 📂 data/                # Static data
│   │   ├── blog.ts             # Blog data
│   │   ├── researchPosts.ts    # Research data
│   │   └── whitepapers.ts      # Whitepaper data
│   └── 📂 types/               # TypeScript types
│       ├── blog.ts
│       ├── research.ts
│       └── whitepaper.ts
│
├── 📂 public/                  # Static assets
│   └── images/                 # Images
│
├── 📂 docs/                    # 📚 Documentation
│   ├── README.md               # Docs index
│   ├── PERFORMANCE_OPTIMIZATIONS.md
│   ├── ACCESSIBILITY_IMPROVEMENTS.md
│   └── ...                     # See docs/README.md
│
├── 📂 archive/                 # 🗄️ Deprecated files
│
├── 📄 next.config.js           # Next.js config
├── 📄 tailwind.config.js       # Tailwind config
├── 📄 tsconfig.json            # TypeScript config
└── 📄 package.json             # Dependencies
```

**� See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed organization guide**

---

## ✨ Key Features

### 🎨 Design System
- **Custom Brand Colors**: Professional green palette
- **Typography**: Space Grotesk (headings) + Inter (body)
- **Components**: Glass morphism, rounded cards, soft shadows
- **Animations**: 60fps GPU-accelerated animations
- **Responsive**: Mobile-first design

### ⚡ Performance Optimizations
- **Lazy Loading**: Below-fold sections load on-demand
- **Code Splitting**: 40% smaller initial bundle
- **Component Memoization**: React.memo() prevents re-renders
- **GPU Acceleration**: translate3d() for smooth animations
- **Image Optimization**: AVIF/WebP with Next.js Image
- **Font Optimization**: Preload and display swap

### ♿ Accessibility
- **WCAG 2.1 AA Compliant**: Full keyboard navigation
- **Screen Reader Support**: Proper ARIA attributes
- **Focus Management**: Clear indicators and focus traps
- **Semantic HTML**: Meaningful element structure
- **Color Contrast**: Meets 4.5:1 ratio minimum

### 🗺️ Interactive Map
- **Leaflet Integration**: Interactive deployment visualization
- **Custom Markers**: Branded markers with animations
- **Loading Skeleton**: Better perceived performance
- **Responsive**: Works on mobile and desktop

---

## ⚡ Performance

### Optimizations Implemented

- **Code Splitting**: 40% smaller initial JavaScript bundle
- **Lazy Loading**: Below-fold sections load on-demand
- **Component Memoization**: React.memo() prevents unnecessary re-renders
- **Scroll Optimization**: requestAnimationFrame for smooth scrolling
- **GPU Acceleration**: translate3d() for 60fps animations
- **Image Optimization**: Next.js Image with AVIF/WebP formats
- **Font Optimization**: Preload critical fonts with display swap
- **Bundle Analysis**: Webpack analyzer for size monitoring

### Performance Metrics

| Metric | Score | Details |
|--------|-------|---------|
| **Lighthouse Performance** | 92+ | Mobile score |
| **First Contentful Paint** | ~1.3s | Fast initial render |
| **Time to Interactive** | ~2.8s | Quick interactivity |
| **Cumulative Layout Shift** | <0.02 | Stable layout |
| **Initial Bundle** | 245KB | 36% reduction |
| **Animation FPS** | 55-60 | GPU-accelerated |

📖 **See [docs/PERFORMANCE_IMPROVEMENTS_V2.md](./docs/PERFORMANCE_IMPROVEMENTS_V2.md) for detailed optimizations**

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--brand-main: #11231F      /* Primary background */
--brand-secondary: #4A9888 /* Brand green */
--brand-deep: #112836      /* Deep backgrounds */

/* Text Colors */
--text-primary: #B5D2CE    /* Off-white green */
--text-light: #FFFFFF      /* Pure white */

/* Accent Colors */
--glow: #7FFFEB            /* Neon accent */
--accent: #5FD4B8          /* Secondary accent */
--warning: #F2C572         /* Warnings/highlights */
```

### Typography

- **Headings**: Space Grotesk (400, 500, 600, 700)
- **Body**: Inter (400, 500, 600)
- **Scale**: 1.25 ratio (16px → 20px → 25px → 31px → 39px)
- **Line Height**: 1.6 for body, 1.2 for headings

### Spacing System

8px base grid: `4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px`

### Component Patterns

- **Glass Morphism**: Subtle transparency with backdrop blur
- **Rounded Corners**: 12px (small), 16px (medium), 24px (large)
- **Shadows**: Soft elevation with colored shadows
- **Animations**: 60fps GPU-accelerated transforms
- **Hover States**: Scale (1.05), glow effects, smooth transitions

---

## 🛠️ Development

### Commands

```bash
# Development
npm run dev          # Start dev server (port 3000)
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Run ESLint

# Analysis
ANALYZE=true npm run build    # Analyze bundle size
```

### Environment Variables

Create `.env.local` for local development:

```bash
NEXT_PUBLIC_API_URL=your_api_url
# Add other environment variables as needed
```

### Code Quality

- **TypeScript**: Strict mode enabled
- **ESLint**: Custom rules for Next.js and React
- **Performance**: Lighthouse CI in deployment pipeline
- **Accessibility**: Automated a11y testing

### Git Workflow

```bash
# Feature development
git checkout -b feature/your-feature
git commit -m "feat: your feature description"
git push origin feature/your-feature

# Create pull request for review
```

---

## 📚 Documentation

Comprehensive technical documentation is available in the [`docs/`](./docs) folder:

### Available Documentation

- 📈 [Performance Optimizations](./docs/PERFORMANCE_IMPROVEMENTS_V2.md) - Detailed optimization strategies
- ♿ [Accessibility Guide](./docs/ACCESSIBILITY_IMPROVEMENTS.md) - WCAG 2.1 AA compliance
- 🗺️ [Map Implementation](./docs/MAP_FIX_REPORT.md) - Leaflet integration details
- 📝 [Content Structure](./docs/CONTENT_SECTIONS_SUMMARY.md) - Page and component layouts
- 🎨 [Animation System](./docs/ANIMATION_ICON_UPDATES.md) - Animation architecture
- 📚 [Blog System](./docs/RESEARCH_BLOG_WHITEPAPER_IMPLEMENTATION_REPORT.md) - Content management

📖 **Start here: [docs/README.md](./docs/README.md)**

---

## � Deployment

### Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Other Platforms

Build the production bundle:

```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

### Build Output

- **Static Assets**: Exported to `public/`
- **Build Files**: Generated in `.next/`
- **Optimized Images**: Processed by Next.js Image

---

## 🔒 Security

- **No Sensitive Data**: All secrets in environment variables
- **Form Validation**: Client and server-side validation
- **Content Security**: CSP headers in production
- **HTTPS Only**: Enforced in production environment
- **Dependencies**: Regular security audits with `npm audit`

---

## 📝 License

**Proprietary** - AtlasPro AI. All rights reserved.

---

## 🤝 Support

### Contact

- **Email**: contact@atlaspro.ai
- **Website**: [atlaspro.ai](https://atlaspro.ai)

### Issues

For bug reports or feature requests, please contact the development team.

---

<div align="center">

**Built with ❤️ by the AtlasPro AI Team**

[Website](https://atlaspro.ai) • [Product](https://atlaspro.ai/product) • [Contact](https://atlaspro.ai/contact)

</div>

