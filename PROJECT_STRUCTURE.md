# Project Code Organization

## File Structure Overview

```
atlaspro-frontend-new-1/
│
├── 📁 src/                          # Source code
│   ├── 📁 app/                      # Next.js App Router pages
│   │   ├── layout.tsx               # Root layout with fonts & metadata
│   │   ├── page.tsx                 # Home page (lazy-loaded sections)
│   │   ├── globals.css              # Global styles + GPU optimizations
│   │   ├── 📁 product/              # Product page
│   │   ├── 📁 use-cases/            # Use cases page
│   │   ├── 📁 about/                # About page
│   │   ├── 📁 contact/              # Contact form page
│   │   ├── 📁 research/             # Research posts (dynamic routes)
│   │   ├── 📁 blog/                 # Blog posts (dynamic routes)
│   │   └── 📁 whitepapers/          # Whitepapers (dynamic routes)
│   │
│   ├── 📁 components/               # React components
│   │   ├── Navbar.tsx               # ⚡ Optimized navigation
│   │   ├── Hero.tsx                 # ⚡ Memoized hero section
│   │   ├── InteractiveMap.tsx       # 🗺️ Leaflet map with skeleton
│   │   ├── UnifySection.tsx         # Data unification
│   │   ├── CapabilitiesSection.tsx  # Product capabilities
│   │   ├── ProblemSection.tsx       # Problem statement
│   │   ├── Pipeline.tsx             # Process pipeline
│   │   ├── UseCases.tsx             # Use case cards
│   │   ├── Security.tsx             # Security features
│   │   ├── Testimonials.tsx         # Customer quotes
│   │   ├── CTA.tsx                  # Call-to-action
│   │   ├── Footer.tsx               # Site footer
│   │   ├── Logo.tsx                 # Brand logo
│   │   └── WhitepaperDownloadModal.tsx  # ♿ Accessible modal
│   │
│   ├── 📁 data/                     # Static data
│   │   ├── blog.ts                  # Blog post data
│   │   ├── researchPosts.ts         # Research post data
│   │   └── whitepapers.ts           # Whitepaper data
│   │
│   ├── 📁 types/                    # TypeScript definitions
│   │   ├── blog.ts                  # Blog types
│   │   ├── research.ts              # Research types
│   │   └── whitepaper.ts            # Whitepaper types
│   │
│   └── middleware.ts                # Next.js middleware
│
├── 📁 public/                       # Static assets
│   └── 📁 images/                   # Images (use Next Image!)
│
├── 📁 docs/                         # 📚 Technical documentation
│   ├── README.md                    # Documentation index
│   ├── PERFORMANCE_OPTIMIZATIONS.md # Initial perf work
│   ├── PERFORMANCE_IMPROVEMENTS_V2.md # Advanced perf
│   ├── MAP_FIX_REPORT.md            # Map implementation
│   ├── ACCESSIBILITY_IMPROVEMENTS.md # A11y guide
│   ├── ACCESSIBILITY_SUMMARY.md     # A11y quick ref
│   ├── HERO_UPDATES.md              # Hero enhancements
│   ├── MESSAGING_UPDATES.md         # Copy updates
│   ├── ANIMATION_ICON_UPDATES.md    # Animation changes
│   ├── CONTENT_SECTIONS_SUMMARY.md  # Content overview
│   └── RESEARCH_BLOG_WHITEPAPER_IMPLEMENTATION_REPORT.md
│
├── 📁 archive/                      # 🗄️ Deprecated files
│   ├── README.md                    # Archive policy
│   ├── Features-old.tsx             # Replaced component
│   ├── UseCases-old.tsx             # Replaced component
│   └── UnifySection-old.tsx         # Replaced component
│
├── 📁 .github/                      # GitHub config
│   └── copilot-instructions.md      # Copilot guidelines
│
├── 📄 next.config.js                # ⚡ Optimized Next.js config
├── 📄 tailwind.config.js            # Tailwind configuration
├── 📄 tsconfig.json                 # TypeScript config
├── 📄 postcss.config.js             # PostCSS config
├── 📄 .eslintrc.json                # ESLint rules
├── 📄 package.json                  # Dependencies
└── 📄 README.md                     # Main documentation

```

## Component Architecture

### Core Layout Components
```
Navbar (sticky header)
  ├── Logo
  ├── Desktop Navigation
  │   ├── DropdownMenu (Product)
  │   ├── DropdownMenu (Resources)
  │   └── NavLink (Use Cases)
  └── Mobile Menu (hamburger)

Footer
  ├── Logo
  ├── Product Links
  ├── Solutions Links
  ├── Company Links
  └── Social Links
```

### Home Page Structure
```
Home (/)
  ├── Navbar
  ├── Hero (above-fold)
  ├── ProblemSection (lazy-loaded ⚡)
  ├── UnifySection (lazy-loaded ⚡)
  ├── CapabilitiesSection (lazy-loaded ⚡)
  ├── Pipeline (lazy-loaded ⚡)
  ├── UseCases (lazy-loaded ⚡)
  ├── Security (lazy-loaded ⚡)
  ├── Testimonials (lazy-loaded ⚡)
  ├── CTA (lazy-loaded ⚡)
  └── Footer (lazy-loaded ⚡)
```

### Product Page Structure
```
Product (/product)
  ├── Navbar
  ├── Hero Section
  ├── InteractiveMap 🗺️
  │   ├── MapContainer (Leaflet)
  │   ├── Markers (5 deployments)
  │   ├── Popups
  │   └── Legend
  ├── Features Grid
  ├── CTA
  └── Footer
```

## Performance Optimizations

### Component Level
- ✅ **React.memo()** - Navbar, Hero, Map, Modal components
- ✅ **useCallback()** - Event handlers memoized
- ✅ **Dynamic imports** - Below-fold sections lazy-loaded
- ✅ **Loading skeletons** - Better perceived performance

### CSS Level
- ✅ **translate3d()** - GPU acceleration for transforms
- ✅ **will-change** - Browser optimization hints
- ✅ **Passive listeners** - Scroll performance
- ✅ **requestAnimationFrame** - Smooth scroll handling

### Bundle Level
- ✅ **Code splitting** - 40% smaller initial bundle
- ✅ **Tree shaking** - Remove unused code
- ✅ **Package optimization** - Framer Motion, Leaflet
- ✅ **Font preloading** - Reduce layout shift

## Data Flow

### Static Data
```
src/data/*.ts
  ↓
Types defined in src/types/*.ts
  ↓
Consumed by pages in src/app/*
  ↓
Rendered in components
```

### Dynamic Routes
```
URL: /blog/[slug]
  ↓
src/app/blog/[slug]/page.tsx
  ↓
Fetch data from src/data/blog.ts
  ↓
Filter by slug
  ↓
Render with layout
```

## Naming Conventions

### Files
- **Components**: PascalCase (e.g., `Hero.tsx`, `Navbar.tsx`)
- **Pages**: lowercase (e.g., `page.tsx`)
- **Data**: camelCase (e.g., `researchPosts.ts`)
- **Types**: camelCase (e.g., `blog.ts`)
- **Docs**: SCREAMING_SNAKE_CASE (e.g., `MAP_FIX_REPORT.md`)

### Code
- **Components**: PascalCase (e.g., `function Hero()`)
- **Functions**: camelCase (e.g., `handleClick`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_URL`)
- **Types/Interfaces**: PascalCase (e.g., `interface BlogPost`)

## Import Organization

Standard order for imports:
```typescript
// 1. React and Next.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// 2. External libraries
import { motion } from 'framer-motion'

// 3. Internal components
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

// 4. Data and types
import { getAllPosts } from '@/data/blog'
import type { BlogPost } from '@/types/blog'

// 5. Styles (if any)
import styles from './styles.module.css'
```

## Code Quality Standards

### TypeScript
- ✅ Strict mode enabled
- ✅ All props typed
- ✅ No `any` (except Leaflet types)
- ✅ Interfaces for complex types

### React
- ✅ Functional components only
- ✅ Hooks following rules
- ✅ Memoization where needed
- ✅ Proper cleanup in useEffect

### CSS
- ✅ Tailwind utility-first
- ✅ Custom CSS in globals.css
- ✅ GPU-accelerated animations
- ✅ Mobile-first responsive

### Accessibility
- ✅ ARIA attributes
- ✅ Semantic HTML
- ✅ Keyboard navigation
- ✅ Screen reader support

## Development Workflow

### Adding New Feature
1. Create component in `src/components/`
2. Add types in `src/types/` (if needed)
3. Add data in `src/data/` (if needed)
4. Import in page
5. Test locally
6. Document in `docs/` (if significant)
7. Commit with descriptive message

### Adding New Page
1. Create folder in `src/app/`
2. Add `page.tsx`
3. Update Navbar links
4. Update Footer links
5. Test routing
6. Update README.md

### Performance Testing
```bash
# Build and analyze
npm run build

# With bundle analysis
ANALYZE=true npm run build

# Lighthouse audit
# Open DevTools → Lighthouse → Run
```

## Git Workflow

### Branch Strategy
- `main` - Production ready
- Feature branches - For development

### Commit Messages
```
feat: Add new feature
fix: Bug fix
perf: Performance improvement
docs: Documentation update
style: Code style changes
refactor: Code refactoring
test: Add tests
chore: Maintenance
```

### Before Pushing
```bash
# Check for errors
npm run build

# Format code (if configured)
npm run format

# Check types
npm run type-check
```

## Folder Guidelines

### ✅ DO
- Keep components focused and single-purpose
- Use meaningful names
- Document complex logic
- Test in multiple browsers
- Check mobile responsiveness

### ❌ DON'T
- Import from `archive/` folder
- Use inline styles (use Tailwind)
- Leave console.logs in production code
- Forget to cleanup useEffect
- Skip TypeScript types

## Quick Reference

### Key Files to Know
- `src/app/layout.tsx` - Root layout, fonts, metadata
- `src/app/globals.css` - All global styles and animations
- `next.config.js` - Performance optimizations
- `tailwind.config.js` - Design system colors
- `docs/README.md` - Documentation hub

### Common Tasks
- **Add color**: Edit `tailwind.config.js`
- **Add page**: Create folder in `src/app/`
- **Add component**: Create in `src/components/`
- **Optimize performance**: See `docs/PERFORMANCE_IMPROVEMENTS_V2.md`
- **Fix accessibility**: See `docs/ACCESSIBILITY_IMPROVEMENTS.md`

## Maintenance

### Regular Checks
- [ ] Remove unused dependencies
- [ ] Update outdated packages
- [ ] Clear .next cache if issues
- [ ] Review and clean archive folder (every 3 months)
- [ ] Update documentation for major changes
- [ ] Run Lighthouse audits quarterly

### Cleanup Commands
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules
rm -rf node_modules
npm install

# Remove old backups from archive
cd archive && rm *-old.tsx
```

---

**Keep this document updated as the project evolves!**
