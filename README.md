# AtlasPro AI - Marketing Website

A modern, high conversion marketing website for AtlasPro AI, the spatial intelligence platform that makes the physical world machine readable.

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
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and animations
│   ├── product/
│   │   └── page.tsx        # Product page
│   ├── use-cases/
│   │   └── page.tsx        # Use cases with filtering
│   ├── about/
│   │   └── page.tsx        # About page
│   └── contact/
│       └── page.tsx        # Contact/Demo request page
└── components/
    ├── Navbar.tsx          # Sticky navigation
    ├── Hero.tsx            # Animated hero section
    ├── UnifySection.tsx    # Data unification cards
    ├── Features.tsx        # Product capabilities
    ├── Pipeline.tsx        # How it works pipeline
    ├── UseCases.tsx        # Use case cards
    ├── Security.tsx        # Security features
    ├── Testimonials.tsx    # Customer testimonials
    ├── CTA.tsx             # Call-to-action section
    └── Footer.tsx          # Site footer
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

- Optimized images with Next.js Image component
- Font optimization with next/font
- Minimal JavaScript with server components where possible
- Smooth 60fps animations with Framer Motion
- Fast page loads with Next.js optimization

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
