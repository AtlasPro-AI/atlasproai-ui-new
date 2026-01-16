'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on link
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (activeDropdown) setActiveDropdown(null)
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [activeDropdown])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-brand-main/80 backdrop-blur-xl border-b border-brand-text/15 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Product Dropdown */}
            <DropdownMenu 
              title="Product" 
              active={activeDropdown === 'product'}
              onToggle={() => setActiveDropdown(activeDropdown === 'product' ? null : 'product')}
              items={[
                { label: 'Overview', href: '/product' },
                { label: 'Capabilities', href: '/product#capabilities' },
                { label: 'MCP Tools', href: '/product#mcp' },
                { label: 'Security', href: '/product#security' },
              ]}
            />

            {/* Resources Dropdown */}
            <DropdownMenu 
              title="Resources" 
              active={activeDropdown === 'resources'}
              onToggle={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
              items={[
                { label: 'Research', href: '/research' },
                { label: 'Blog', href: '/blog' },
                { label: 'Whitepapers', href: '/whitepapers' },
              ]}
            />

            <NavLink href="/use-cases">Use Cases</NavLink>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="btn-primary text-sm px-6 py-3"
              >
                Request Demo
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="lg:hidden text-brand-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-brand-main/95 backdrop-blur-xl border-b border-brand-text/15"
          >
            <div className="px-4 py-6 space-y-4">
              <MobileNavLink href="/product" onClick={closeMobileMenu}>Product</MobileNavLink>
              <MobileNavLink href="/use-cases" onClick={closeMobileMenu}>Use Cases</MobileNavLink>
              <div className="border-t border-brand-text/10 pt-3 mt-3">
                <div className="text-brand-text/60 text-xs uppercase tracking-wider mb-2 px-2">Resources</div>
                <MobileNavLink href="/research" onClick={closeMobileMenu}>Research</MobileNavLink>
                <MobileNavLink href="/blog" onClick={closeMobileMenu}>Blog</MobileNavLink>
                <MobileNavLink href="/whitepapers" onClick={closeMobileMenu}>Whitepapers</MobileNavLink>
              </div>
              <Link
                href="/contact"
                className="block btn-primary text-center mt-4"
                onClick={closeMobileMenu}
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// Memoize dropdown to prevent unnecessary re-renders
const DropdownMenu = memo(function DropdownMenu({ 
  title, 
  items, 
  active, 
  onToggle 
}: { 
  title: string
  items: { label: string; href: string }[]
  active: boolean
  onToggle: () => void
}) {
  return (
    <div 
      className="relative"
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
      onClick={(e) => e.stopPropagation()}
    >
      <button 
        className="text-brand-text hover:text-white transition-colors duration-200 font-medium relative group flex items-center gap-1"
        aria-expanded={active}
        aria-haspopup="true"
      >
        {title}
        <svg className={`w-4 h-4 transition-transform duration-200 ${active ? 'rotate-180' : ''}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-48 bg-brand-main/95 backdrop-blur-xl border border-brand-text/15 rounded-card shadow-glow overflow-hidden"
          >
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-3 text-brand-text hover:text-white hover:bg-brand-secondary/20 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

// Memoize NavLink component
const NavLink = memo(function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-brand-text hover:text-white transition-colors duration-200 font-medium relative group"
    >
      {children}
      <motion.span 
        className="absolute -bottom-1 left-0 h-0.5 bg-brand-glow"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )
})

// Memoize MobileNavLink component
const MobileNavLink = memo(function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-brand-text hover:text-white transition-colors duration-200 font-medium py-2"
    >
      {children}
    </Link>
  )
})
