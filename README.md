# AtlasPro AI - Marketing Website

<div align="center">

![AtlasPro AI](https://img.shields.io/badge/AtlasPro-AI-4A9888?style=for-the-badge)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-92%2B-success)](https://developers.google.com/web/tools/lighthouse)

**The spatial intelligence layer that makes the physical world machine-readable**

[🌐 Live Site](https://atlaspro.ai) • [📖 Documentation](./docs) • [🚀 Quick Start](#-quick-start) • [💼 Product](#-what-is-atlaspro-ai)

</div>

---

## 📋 Table of Contents

- [What is AtlasPro AI?](#-what-is-atlaspro-ai)
- [The Problem We Solve](#-the-problem-we-solve)
- [Our Solution](#-our-solution)
- [About This Website](#-about-this-website)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Key Features](#-key-features)
- [Performance](#-performance)
- [Development](#-development)
- [Testing](#-testing)
- [Documentation](#-documentation)
- [Deployment](#-deployment)

---

## 🌍 What is AtlasPro AI?

**AtlasPro AI** is a **Spatial Intelligence Operating System** that transforms how enterprises and governments interact with the physical world. We unify maps, satellite imagery, LiDAR, video, and sensor data into a single real-time platform that enables:

- 🎯 **Real-time spatial monitoring** across infrastructure, energy, and defense sectors
- 🤖 **Automated spatial analysis** that replaces weeks of manual engineering work
- 🎮 **Operational simulations** for predictive planning and risk assessment
- 🚀 **Engineering-grade outputs** delivered in minutes instead of months

### Industries We Serve

| Sector | Use Cases |
|--------|-----------|
| **🏗️ Infrastructure** | Fiber network planning, utility grid expansion, site monitoring |
| **⚡ Energy** | Pipeline routing, renewable site selection, hazard avoidance |
| **🛡️ Defense** | Terrain analysis, mission planning, threat detection |
| **🏛️ Government** | Urban planning, disaster response, asset management |
| **🏢 Real Estate** | Property analysis, development feasibility, environmental assessment |

---

## 💡 The Problem We Solve

### The $135B Annual Waste

Enterprises spend **$135 billion annually** on manual spatial workflows that suffer from:

- **🔀 Fragmented Systems**: Disconnected GIS tools, siloed imagery, and separate processing systems create data chaos
- **⏱️ No Real-Time Processing**: Cannot process spatial data together in real-time for engineering-grade outputs  
- **📊 Weeks of Manual Work**: Fiber layout, grid expansion, hazard routing, and site monitoring consume massive human resources
- **❌ Error-Prone Results**: Manual processes lead to costly mistakes in critical infrastructure decisions

### The Core Challenge

Traditional geospatial tools were built for **viewing** maps, not for **operating** on the physical world. AtlasPro AI bridges this gap.

---

## ✨ Our Solution

### The Spatial Intelligence OS

AtlasPro AI provides a **unified operating system** for spatial data that:

1. **🔗 Unifies All Data Sources**
   - Ingests maps, satellite imagery, LiDAR, video, and sensor data into a single platform
   - Breaks down data silos with seamless integration

2. **⚡ Processes in Real-Time**
   - Delivers engineering-grade outputs in minutes, not weeks
   - Enables live monitoring and instant analysis

3. **🤖 Automates Complex Workflows**
   - AI-powered route optimization (fiber, pipelines, power lines)
   - Automated hazard detection and avoidance
   - Intelligent site selection and feasibility analysis

4. **🎯 Delivers Actionable Intelligence**
   - Interactive visualizations for decision-making
   - Predictive simulations for operational planning
   - Export-ready engineering documentation

### Key Capabilities

```
📡 Data Ingestion → 🧠 AI Analysis → 🎯 Real-Time Insights → 📊 Automated Outputs
```

- **Multi-source Integration**: Maps, imagery, LiDAR, video, sensors
- **AI-Powered Analysis**: Computer vision, route optimization, anomaly detection
- **Real-Time Processing**: Live monitoring and instant updates
- **Enterprise Security**: SOC 2 compliant, role-based access control
- **API-First Architecture**: Seamless integration with existing systems

---

## 🖥️ About This Website

This repository contains the **marketing website** for AtlasPro AI - a high-performance, modern web application designed to showcase our spatial intelligence platform and generate enterprise leads.

### Purpose

- 🎯 **Product Marketing**: Communicate the value of AtlasPro AI to enterprise decision-makers
- 📚 **Educational Content**: Share research, blog posts, and whitepapers on spatial intelligence
- 💼 **Lead Generation**: Enable demo requests and customer contact through optimized forms
- 🌐 **Brand Presence**: Establish AtlasPro AI as a thought leader in geospatial AI

### Tech Stack & Architecture

This is a **production-grade Next.js application** optimized for performance, SEO, and user experience:

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Framework** | Next.js 14+ App Router | Server-side rendering, static generation, routing |
| **Language** | TypeScript (strict) | Type safety, developer experience |
| **Styling** | Tailwind CSS | Custom design system, responsive layouts |
| **Animations** | Framer Motion | GPU-accelerated 60fps animations |
| **Maps** | Leaflet + React-Leaflet | Interactive geospatial visualizations |
| **Icons** | Lucide React | Consistent, scalable iconography |
| **Testing** | Jest + Testing Library | Unit, integration, and E2E tests |
| **Performance** | Lazy loading, code splitting, memoization | Sub-3s Time to Interactive |

### Website Pages

| Page | Route | Purpose |
|------|-------|---------|
| 🏠 **Home** | `/` | Hero, problem/solution, features, use cases, testimonials |
| 📦 **Product** | `/product` | Platform overview with interactive deployment map |
| 💼 **Use Cases** | `/use-cases` | Industry-specific solutions and success stories |
| 👥 **About** | `/about` | Company mission, team, and values |
| 📞 **Contact** | `/contact` | Demo request form and enterprise contact |
| 📚 **Research** | `/research` | Technical research publications |
| ✍️ **Blog** | `/blog` | Company updates and thought leadership |
| 📄 **Whitepapers** | `/whitepapers` | In-depth technical documentation |
| 🔒 **Privacy Policy** | `/privacy` | Data privacy and GDPR compliance |
| 📜 **Terms of Service** | `/terms` | Legal terms and conditions |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+ or **yarn** 1.22+
- **Git** for version control

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/AtlasPro-AI/atlasproai-ui-new.git
cd atlasproai-ui-new

# 2. Install dependencies
npm install

# 3. Set up environment variables (if needed)
cp .env.example .env.local
# Edit .env.local with your API keys

# 4. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will hot-reload as you make changes.

### Production Build & Testing

```bash
# Build optimized production bundle
npm run build

# Test production build locally
npm start

# Run test suite
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Analyze bundle size
ANALYZE=true npm run build
```

### Health Check

Verify all pages are working correctly:

```bash
# Start dev server (Terminal 1)
npm run dev

# Run health check (Terminal 2)
chmod +x scripts/health-check.sh
./scripts/health-check.sh
```

---

## 📁 Project Structure

```
atlaspro-frontend-new-1/
│
├── 📂 src/                         # Source code
│   ├── 📂 app/                     # Next.js App Router (pages)
│   │   ├── layout.tsx              # Root layout with metadata
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Global styles & Tailwind
│   │   ├── product/                # Product showcase page
│   │   ├── use-cases/              # Use cases & solutions
│   │   ├── about/                  # Company information
│   │   ├── contact/                # Demo request form
│   │   ├── research/               # Research publications
│   │   ├── blog/                   # Blog articles
│   │   ├── whitepapers/            # Technical whitepapers
│   │   ├── privacy/                # Privacy policy (GDPR)
│   │   └── terms/                  # Terms of service
│   │
│   ├── 📂 components/              # React components
│   │   ├── Navbar.tsx              # Navigation header
│   │   ├── Hero.tsx                # Homepage hero section
│   │   ├── ProblemSection.tsx      # Problem statement
│   │   ├── UnifySection.tsx        # Solution overview
│   │   ├── CapabilitiesSection.tsx # Product capabilities
│   │   ├── Pipeline.tsx            # Data pipeline visualization
│   │   ├── UseCases.tsx            # Use case cards
│   │   ├── InteractiveMap.tsx      # Leaflet map component
│   │   ├── Features.tsx            # Feature highlights
│   │   ├── Security.tsx            # Security & compliance
│   │   ├── Testimonials.tsx        # Customer testimonials
│   │   ├── CTA.tsx                 # Call-to-action section
│   │   ├── Footer.tsx              # Site footer
│   │   └── ...                     # Other reusable components
│   │
│   ├── 📂 data/                    # Static content data
│   │   ├── blog.ts                 # Blog post metadata
│   │   ├── researchPosts.ts        # Research publications
│   │   └── whitepapers.ts          # Whitepaper listings
│   │
│   ├── 📂 types/                   # TypeScript type definitions
│   │   ├── blog.ts
│   │   ├── research.ts
│   │   └── whitepaper.ts
│   │
│   └── middleware.ts               # Next.js middleware (routing, headers)
│
├── 📂 public/                      # Static assets (served as-is)
│   └── images/                     # Images, icons, logos
│
├── 📂 tests/                       # Test suite
│   ├── setup.tsx                   # Jest setup & mocks
│   ├── README.md                   # Testing documentation
│   ├── pages/                      # Page-level tests
│   ├── components/                 # Component tests
│   ├── links/                      # Link validation tests
│   └── e2e/                        # End-to-end smoke tests
│
├── � scripts/                     # Utility scripts
│   ├── health-check.sh             # Verify all pages return 200
│   └── README.md                   # Scripts documentation
│
├── 📂 docs/                        # Technical documentation
│   ├── README.md                   # Documentation index
│   ├── PERFORMANCE_IMPROVEMENTS_V2.md
│   ├── ACCESSIBILITY_IMPROVEMENTS.md
│   ├── MAP_FIX_REPORT.md
│   └── ...                         # See docs/README.md
│
├── 📂 archive/                     # Deprecated/old files
│
├── 📄 next.config.js               # Next.js configuration
├── 📄 tailwind.config.js           # Tailwind CSS config
├── 📄 tsconfig.json                # TypeScript compiler config
├── 📄 jest.config.json             # Jest testing config
├── 📄 postcss.config.js            # PostCSS config
├── 📄 package.json                 # Dependencies & scripts
└── 📄 PROJECT_STRUCTURE.md         # Detailed structure guide
```

**� See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed organization guide**

---

## ✨ Key Features

### 🎨 Modern Design System
- **Brand Identity**: Professional green palette with glass morphism effects
- **Typography**: Space Grotesk (headings) + Inter (body) for readability
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Animations**: 60fps GPU-accelerated animations via Framer Motion
- **Dark Theme**: Sophisticated dark backgrounds with neon accents

### ⚡ Performance Optimizations

Built for speed with enterprise-grade optimizations:

- **Code Splitting**: 40% smaller initial JavaScript bundle
- **Lazy Loading**: Below-fold sections load on-demand to reduce Time to Interactive
- **Component Memoization**: React.memo() prevents unnecessary re-renders
- **GPU Acceleration**: translate3d() for smooth 60fps animations
- **Image Optimization**: Next.js Image with AVIF/WebP formats
- **Font Optimization**: Preload critical fonts with display swap strategy
- **Bundle Analysis**: Webpack analyzer monitors size in production

**Performance Metrics:**

| Metric | Score | Details |
|--------|-------|---------|
| **Lighthouse Performance** | 92+ | Mobile score |
| **First Contentful Paint** | ~1.3s | Fast initial render |
| **Time to Interactive** | ~2.8s | Quick interactivity |
| **Cumulative Layout Shift** | <0.02 | Stable layout |
| **Initial Bundle** | 245KB | 36% reduction from baseline |
| **Animation FPS** | 55-60 | Smooth, jank-free |

📖 **See [docs/PERFORMANCE_IMPROVEMENTS_V2.md](./docs/PERFORMANCE_IMPROVEMENTS_V2.md) for detailed optimizations**

### ♿ Accessibility (WCAG 2.1 AA)

- **Keyboard Navigation**: Full support for keyboard-only users
- **Screen Reader Support**: Proper ARIA attributes and semantic HTML
- **Focus Management**: Clear focus indicators and focus traps in modals
- **Color Contrast**: Meets 4.5:1 minimum contrast ratio
- **Skip Links**: Quick navigation to main content
- **Form Labels**: All form inputs properly labeled

### 🗺️ Interactive Map

- **Leaflet Integration**: High-performance geospatial visualization
- **Custom Markers**: Branded markers with smooth animations
- **Loading Skeletons**: Better perceived performance during map load
- **Touch-Friendly**: Optimized for mobile and tablet gestures
- **Deployment Visualization**: Shows AtlasPro AI platform coverage

### 🔒 Security & Compliance

- **Type Safety**: Strict TypeScript enforcement prevents runtime errors
- **Form Validation**: Client and server-side validation for all user inputs
- **No Sensitive Data**: All secrets managed via environment variables
- **CSP Headers**: Content Security Policy headers in production
- **HTTPS Enforcement**: Secure connections required in production
- **Regular Audits**: Automated dependency security scanning with `npm audit`

---

## 🛠️ Development

### Available Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Build production bundle
npm start            # Run production build locally
npm run lint         # Run ESLint for code quality

# Testing
npm test             # Run Jest test suite
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report

# Analysis
ANALYZE=true npm run build    # Analyze bundle size with webpack-bundle-analyzer
```

### Environment Variables

Create `.env.local` for local development configuration:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://api.atlaspro.ai

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Feature Flags (optional)
NEXT_PUBLIC_ENABLE_MAP=true
```

### Code Quality Standards

- **TypeScript**: Strict mode enabled for maximum type safety
- **ESLint**: Custom rules for Next.js and React best practices
- **Prettier**: Automatic code formatting (if configured)
- **Performance**: Lighthouse CI monitors performance in deployments
- **Accessibility**: Automated a11y testing with jest-axe

### Development Best Practices

1. **Component Structure**: Use functional components with hooks
2. **Performance**: Lazy load below-fold components with `dynamic()`
3. **Animations**: Use Framer Motion for declarative animations
4. **Styling**: Tailwind utility classes with custom design tokens
5. **Types**: Define TypeScript interfaces for all props and data structures
6. **Testing**: Write tests for critical user flows and components

### Git Workflow

```bash
# Feature development
git checkout -b feature/your-feature-name
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name

# Bug fixes
git checkout -b fix/bug-description
git commit -m "fix: resolve bug description"

# Create pull request for team review
```

---

## 🧪 Testing

### Test Infrastructure

This project includes a comprehensive test suite to ensure all features work correctly:

```
tests/
├── setup.tsx           # Jest configuration with mocks
├── pages/              # Page rendering and routing tests
├── components/         # Component unit tests
├── links/              # Link validation tests
└── e2e/                # End-to-end smoke tests
```

### Running Tests

```bash
# Run all tests
npm test

# Watch mode for active development
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run health check on running server
./scripts/health-check.sh
```

### Test Coverage Goals

- **Pages**: All routes render without errors
- **Components**: Critical components have unit tests
- **Links**: All navigation links point to valid destinations
- **Accessibility**: WCAG 2.1 AA compliance verified
- **Performance**: Lighthouse scores meet thresholds

📖 **See [tests/README.md](./tests/README.md) for detailed testing documentation**

---

## 📚 Documentation

Comprehensive technical documentation is available in the [`docs/`](./docs) directory:

### Documentation Index

| Document | Description |
|----------|-------------|
| 📈 [Performance Optimizations](./docs/PERFORMANCE_IMPROVEMENTS_V2.md) | Detailed optimization strategies and results |
| ♿ [Accessibility Guide](./docs/ACCESSIBILITY_IMPROVEMENTS.md) | WCAG 2.1 AA compliance implementation |
| 🗺️ [Map Implementation](./docs/MAP_FIX_REPORT.md) | Leaflet integration and customization |
| 📝 [Content Structure](./docs/CONTENT_SECTIONS_SUMMARY.md) | Page layouts and component organization |
| 🎨 [Animation System](./docs/ANIMATION_ICON_UPDATES.md) | Framer Motion animation architecture |
| 📚 [Content Management](./docs/RESEARCH_BLOG_WHITEPAPER_IMPLEMENTATION_REPORT.md) | Blog, research, and whitepaper systems |
| 🧹 [Cleanup Summary](./docs/CLEANUP_SUMMARY.md) | Code cleanup and refactoring |

📖 **Start here: [docs/README.md](./docs/README.md)**

---

## 🚀 Deployment

### Vercel (Recommended)

The easiest deployment option with zero configuration:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod

# Or use the Vercel Dashboard
# 1. Import your GitHub repository
# 2. Vercel auto-detects Next.js
# 3. Deploy with one click
```

**Benefits:**
- Automatic HTTPS and SSL certificates
- Global CDN for static assets
- Serverless functions for API routes
- Preview deployments for every PR
- Automatic optimizations

### Alternative Platforms

**Netlify:**
```bash
npm run build
# Deploy .next/ directory
```

**AWS Amplify:**
```bash
# Connect GitHub repository
# Amplify auto-detects Next.js configuration
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Build Configuration

**Environment Variables for Production:**
```bash
NEXT_PUBLIC_API_URL=https://api.atlaspro.ai
NEXT_PUBLIC_SITE_URL=https://atlaspro.ai
NODE_ENV=production
```

**Build Output:**
- Static assets → `public/`
- Compiled pages → `.next/`
- Optimized images → `.next/cache/images/`

---

## 🎨 Design System Reference

### Color Palette

```css
/* Primary Colors */
--brand-main: #11231F      /* Primary background */
--brand-secondary: #4A9888 /* Brand green */
--brand-deep: #112836      /* Deep backgrounds */

/* Text Colors */
--text-primary: #B5D2CE    /* Off-white green tint */
--text-light: #FFFFFF      /* Pure white */

/* Accent Colors */
--glow: #7FFFEB            /* Neon glow effect */
--accent: #5FD4B8          /* Secondary accent */
--warning: #F2C572         /* Warnings/highlights */
```

### Typography Scale

- **Font Families**: 
  - Headings: Space Grotesk (400, 500, 600, 700)
  - Body: Inter (400, 500, 600)
- **Type Scale**: 1.25 modular ratio
  - xs: 12px
  - sm: 14px
  - base: 16px
  - lg: 20px
  - xl: 25px
  - 2xl: 31px
  - 3xl: 39px
  - 4xl: 49px
- **Line Heights**: 1.6 (body), 1.2 (headings)

### Spacing System

8px base grid for consistent spacing:

```
4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
```

### Component Patterns

- **Glass Morphism**: `backdrop-blur-md bg-white/10`
- **Rounded Corners**: 12px (small), 16px (medium), 24px (large)
- **Shadows**: Soft elevation with subtle glow effects
- **Hover States**: Scale (1.05), glow effects, smooth 300ms transitions

---

## 🤝 Contributing

### Reporting Issues

Found a bug or have a feature request? Please contact the development team:

- **Email**: dev@atlaspro.ai
- **Internal**: Slack #atlaspro-frontend channel

### Pull Request Process

1. **Fork & Branch**: Create feature branch from `main`
2. **Code**: Follow TypeScript and ESLint standards
3. **Test**: Ensure all tests pass (`npm test`)
4. **Document**: Update README if adding features
5. **Commit**: Use conventional commit messages
6. **PR**: Submit pull request with detailed description

### Commit Message Convention

```
feat: add new feature
fix: resolve bug in component
docs: update documentation
style: format code
refactor: restructure component
test: add test coverage
chore: update dependencies
```

---

## 📝 License

**Proprietary** - © 2024-2026 AtlasPro AI. All rights reserved.

This software and associated documentation are proprietary to AtlasPro AI and may not be copied, distributed, or modified without explicit written permission.

---

## 💬 Support & Contact

### Get in Touch

- 🌐 **Website**: [atlaspro.ai](https://atlaspro.ai)
- 📧 **Email**: contact@atlaspro.ai
- 💼 **Sales**: sales@atlaspro.ai
- 🛠️ **Support**: support@atlaspro.ai

### Request a Demo

Interested in seeing AtlasPro AI in action? [Request a demo](https://atlaspro.ai/contact) to learn how our Spatial Intelligence OS can transform your operations.

### Follow Us

- [LinkedIn](https://linkedin.com/company/atlaspro-ai)
- [Twitter](https://twitter.com/atlaspro_ai)
- [GitHub](https://github.com/AtlasPro-AI)

---

## 📊 Project Stats

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0-FF0055)
![Lighthouse](https://img.shields.io/badge/Lighthouse-92%2B-success)

**Lines of Code**: ~15,000+  
**Components**: 25+  
**Pages**: 10  
**Performance Score**: 92+ (Mobile)  
**Accessibility Score**: 100 (WCAG 2.1 AA)

---

<div align="center">

## 🚀 Built with precision by the AtlasPro AI Engineering Team

**Making the physical world machine-readable**

[🌐 Visit Website](https://atlaspro.ai) • [📦 View Product](https://atlaspro.ai/product) • [📞 Contact Us](https://atlaspro.ai/contact)

---

*Transforming spatial data into actionable intelligence for enterprises worldwide*

</div>

