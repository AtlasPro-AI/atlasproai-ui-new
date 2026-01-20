# AtlasPro AI - Marketing Website

A modern, high-conversion marketing website for AtlasPro AI, the spatial intelligence platform that makes the physical world machine readable.

## 🚀 Features

- **Next.js 14+** with App Router and TypeScript
- **Tailwind CSS** for styling with custom design system
- **Framer Motion** for smooth animations and interactions
- **Responsive Design** - Mobile-first approach
- **Enterprise-Grade** aesthetic with premium feel
- **SEO Optimized** with proper metadata

## 🎨 Design System

### Color Palette
- **Main**: `#11231F` - Primary background
- **Secondary**: `#4A9888` - Brand color
- **Text**: `#B5D2CE` - Off-white green text
- **Deep**: `#112836` - Deep background variant
- **Glow**: `#7FFFEB` - Accent glow for CTAs and highlights (green-only)
- **Accent**: `#F2C572` - Warning/Highlight color

### Typography
- **Headings**: Space Grotesk
- **Body**: Inter
- All fonts loaded via Google Fonts with optimal display swap

### Components
- Glass morphism effects
- Rounded cards (16-24px radius)
- Soft shadows and glows
- Smooth animations and micro-interactions
- 8px spacing grid system

## 📁 Project Structure

```
atlaspro-frontend-new-1/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts
│   │   ├── page.tsx                # Home page with lazy-loaded sections
│   │   ├── globals.css             # Global styles, animations, GPU optimization
│   │   ├── product/
│   │   │   └── page.tsx            # Product page with interactive map
│   │   ├── use-cases/
│   │   │   └── page.tsx            # Use cases with filtering
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact/Demo request page
│   │   ├── research/
│   │   │   ├── page.tsx            # Research posts listing
│   │   │   └── [slug]/page.tsx    # Individual research post
│   │   ├── blog/
│   │   │   ├── page.tsx            # Blog posts listing
│   │   │   └── [slug]/page.tsx    # Individual blog post
│   │   └── whitepapers/
│   │       ├── page.tsx            # Whitepapers listing
│   │       └── [slug]/page.tsx    # Individual whitepaper
│   ├── components/
│   │   ├── Navbar.tsx              # Optimized sticky navigation
│   │   ├── Hero.tsx                # Memoized hero with animations
│   │   ├── InteractiveMap.tsx      # Leaflet map with loading skeleton
│   │   ├── UnifySection.tsx        # Data unification cards
│   │   ├── CapabilitiesSection.tsx # Product capabilities
│   │   ├── Pipeline.tsx            # How it works pipeline
│   │   ├── UseCases.tsx            # Use case cards
│   │   ├── Security.tsx            # Security features
│   │   ├── Testimonials.tsx        # Customer testimonials
│   │   ├── CTA.tsx                 # Call-to-action section
│   │   ├── Footer.tsx              # Site footer
│   │   ├── Logo.tsx                # Brand logo component
│   │   └── WhitepaperDownloadModal.tsx  # Accessible modal
│   ├── data/
│   │   ├── blog.ts                 # Blog post data
│   │   ├── researchPosts.ts        # Research post data
│   │   └── whitepapers.ts          # Whitepaper data
│   ├── types/
│   │   ├── blog.ts                 # Blog type definitions
│   │   ├── research.ts             # Research type definitions
│   │   └── whitepaper.ts           # Whitepaper type definitions
│   └── middleware.ts               # Next.js middleware
├── public/
│   └── images/                     # Static images
├── docs/                           # 📚 Technical documentation
│   ├── README.md                   # Documentation index
│   ├── PERFORMANCE_OPTIMIZATIONS.md
│   ├── PERFORMANCE_IMPROVEMENTS_V2.md
│   ├── MAP_FIX_REPORT.md
│   ├── ACCESSIBILITY_IMPROVEMENTS.md
│   └── ... (see docs/README.md)
├── archive/                        # 🗄️ Deprecated components
│   ├── README.md
│   ├── Features-old.tsx
│   ├── UseCases-old.tsx
│   └── UnifySection-old.tsx
├── next.config.js                  # Next.js config with optimizations
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

### Home (`/`)
Complete marketing page with:
- Hero with animated background
- Unify unstructured data section
- Product capabilities (6 features)
- How it works pipeline (4 steps)
- Use cases showcase
- Security & governance
- Customer testimonials
- Final CTA

### Product (`/product`)
Detailed platform overview:
- Platform modules (6 cards)
- Dashboard visualization
- Feature deep-dives
- CTA for demo

### Use Cases (`/use-cases`)
Industry-specific use cases:
- Filterable by industry (Government, Energy, Transportation, etc.)
- Problem → Solution → Outcomes structure
- 9 detailed use cases

### About (`/about`)
Company information:
- Mission statement
- Company values (6 core values)
- Team overview
- CTA for contact

### Contact (`/contact`)
Demo request form:
- Multi-field form
- Form validation
- Enterprise messaging
- Quick response promise

## 🎭 Animations

- **Hero**: Topographic contour lines, floating elements, scan sweep
- **Scroll animations**: Fade-up on scroll with Framer Motion
- **Hover effects**: Scale, glow, lift on cards
- **Pipeline**: Animated flow indicator
- **Micro-interactions**: Underline slide, button glow

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to update the color palette:
```javascript
colors: {
  'brand-main': '#11231F',
  'brand-secondary': '#4A9888',
  // ... other colors
}
```

### Fonts
Update in `src/app/layout.tsx`:
```typescript
const spaceGrotesk = Space_Grotesk({ ... })
const inter = Inter({ ... })
```

### Content
All content is in the component files and page files. No CMS required - edit directly in the code for maximum control.

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Other Platforms
Build the static export:
```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## 📊 Performance

- **Lazy Loading**: Below-fold sections load on-demand for faster initial page load
- **Component Memoization**: React.memo() prevents unnecessary re-renders
- **GPU-Accelerated Animations**: translate3d() and will-change for smooth 60fps
- **Optimized Images**: Next.js Image component with AVIF/WebP support
- **Font Optimization**: Preload and display swap for zero layout shift
- **Scroll Optimization**: requestAnimationFrame for efficient scroll handling
- **Bundle Splitting**: Dynamic imports reduce initial JavaScript bundle by 40%
- **Leaflet Map**: Loading skeleton and optimized imports
- **Code Quality**: TypeScript strict mode, ESLint, and performance best practices

**Performance Metrics:**
- Lighthouse Score: 92+ (Mobile)
- First Contentful Paint: ~1.3s
- Time to Interactive: ~2.8s
- Cumulative Layout Shift: <0.02

📖 **See [docs/PERFORMANCE_IMPROVEMENTS_V2.md](./docs/PERFORMANCE_IMPROVEMENTS_V2.md) for detailed optimizations**

## ♿ Accessibility

- **WCAG 2.1 AA Compliant**: Proper ARIA attributes, semantic HTML
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader**: Optimized for NVDA, JAWS, VoiceOver
- **Focus Management**: Clear focus indicators and focus trap in modals
- **Color Contrast**: All text meets 4.5:1 contrast ratio minimum
- **Form Labels**: Proper labels and autocomplete attributes

📖 **See [docs/ACCESSIBILITY_IMPROVEMENTS.md](./docs/ACCESSIBILITY_IMPROVEMENTS.md) for full details**

## 📚 Documentation

Comprehensive technical documentation is available in the [`docs/`](./docs) folder:

- **Performance Optimizations** - Lazy loading, memoization, GPU acceleration
- **Feature Implementation** - Interactive map, blog system, modals
- **Accessibility Guide** - WCAG compliance, testing procedures
- **Content Structure** - Page layouts, component architecture
- **Update Logs** - Change history and version notes

📖 **Start here: [docs/README.md](./docs/README.md)**

## 🔒 Security

- No sensitive data in client code
- Form validation on client and server
- Environment variables for API keys
- HTTPS enforced in production

## 📝 License

Proprietary - AtlasPro AI

## 🤝 Support

For questions or support, contact: contact@atlaspro.ai

---

**Built with ❤️ for AtlasPro AI**
