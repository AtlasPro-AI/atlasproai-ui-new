'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback, memo } from 'react'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import Logo from './Logo'

// Apple-inspired easing
const easeOutExpo = [0.16, 1, 0.3, 1]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { scrollY } = useScroll()
  
  // Smart hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
    setIsScrolled(latest > 20)
  })

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
      animate={{ 
        y: isHidden ? -100 : 0, 
        opacity: isHidden ? 0 : 1 
      }}
      transition={{ duration: 0.4, ease: easeOutExpo }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3' 
          : 'py-5'
      }`}
    >
      {/* Background with smooth transition */}
      <motion.div 
        className="absolute inset-0 border-b"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isScrolled ? 1 : 0,
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(0px)',
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'rgba(17, 35, 31, 0.85)',
          borderColor: 'rgba(181, 210, 206, 0.08)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group relative z-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Logo />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Product Dropdown */}
            <DropdownMenu 
              title="Product" 
              active={activeDropdown === 'product'}
              onToggle={() => setActiveDropdown(activeDropdown === 'product' ? null : 'product')}
              items={[
                { label: 'Overview', href: '/product', desc: 'Platform capabilities' },
                { label: 'Capabilities', href: '/product#capabilities', desc: 'AI-powered features' },
                { label: 'Security', href: '/product#security', desc: 'Enterprise-grade protection' },
              ]}
            />

            {/* Resources Dropdown */}
            <DropdownMenu 
              title="Resources" 
              active={activeDropdown === 'resources'}
              onToggle={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
              items={[
                { label: 'Research', href: '/research', desc: 'Latest publications' },
                { label: 'Blog', href: '/blog', desc: 'Insights & updates' },
                { label: 'Whitepapers', href: '/whitepapers', desc: 'Technical deep-dives' },
              ]}
            />

            <NavLink href="/use-cases">Use Cases</NavLink>
            <NavLink href="/about">About</NavLink>
            
            <motion.div 
              className="ml-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="btn-primary text-sm px-5 py-2.5"
              >
                Request Demo
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <motion.span 
                className="w-full h-0.5 bg-brand-text rounded-full origin-center"
                animate={{ 
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 7 : 0
                }}
                transition={{ duration: 0.3, ease: easeOutExpo }}
              />
              <motion.span 
                className="w-full h-0.5 bg-brand-text rounded-full"
                animate={{ 
                  opacity: isMobileMenuOpen ? 0 : 1,
                  scaleX: isMobileMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span 
                className="w-full h-0.5 bg-brand-text rounded-full origin-center"
                animate={{ 
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -7 : 0
                }}
                transition={{ duration: 0.3, ease: easeOutExpo }}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className="lg:hidden overflow-hidden absolute top-full left-0 right-0"
            style={{
              background: 'rgba(17, 35, 31, 0.98)',
              backdropFilter: 'blur(24px) saturate(180%)',
            }}
          >
            <motion.div 
              className="px-6 py-8 space-y-2"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05 } },
                closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } }
              }}
            >
              <MobileNavLink href="/product" onClick={closeMobileMenu}>Product</MobileNavLink>
              <MobileNavLink href="/use-cases" onClick={closeMobileMenu}>Use Cases</MobileNavLink>
              <MobileNavLink href="/about" onClick={closeMobileMenu}>About</MobileNavLink>
              
              <motion.div 
                className="border-t border-white/5 pt-4 mt-4"
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 10 }
                }}
              >
                <p className="text-xs text-brand-text/40 uppercase tracking-wider mb-3">Resources</p>
                <MobileNavLink href="/research" onClick={closeMobileMenu}>Research</MobileNavLink>
                <MobileNavLink href="/blog" onClick={closeMobileMenu}>Blog</MobileNavLink>
                <MobileNavLink href="/whitepapers" onClick={closeMobileMenu}>Whitepapers</MobileNavLink>
              </motion.div>

              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 10 }
                }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  className="block btn-primary text-center"
                  onClick={closeMobileMenu}
                >
                  Request Demo
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// Apple-inspired easing for components
const dropdownEase = [0.16, 1, 0.3, 1]

// Memoize dropdown to prevent unnecessary re-renders
const DropdownMenu = memo(function DropdownMenu({ 
  title, 
  items, 
  active, 
  onToggle 
}: { 
  title: string
  items: { label: string; href: string; desc?: string }[]
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
        className="px-4 py-2 text-brand-text hover:text-white transition-colors duration-300 font-medium relative group flex items-center gap-1 rounded-lg hover:bg-white/5"
        aria-expanded={active}
        aria-haspopup="true"
      >
        {title}
        <motion.svg 
          className="w-4 h-4" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          animate={{ rotate: active ? 180 : 0 }}
          transition={{ duration: 0.2, ease: dropdownEase }}
        >
          <path d="M19 9l-7 7-7-7"></path>
        </motion.svg>
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: dropdownEase }}
            className="absolute top-full left-0 mt-2 w-64 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(17, 35, 31, 0.95)',
              backdropFilter: 'blur(24px) saturate(180%)',
              border: '1px solid rgba(181, 210, 206, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset'
            }}
          >
            <div className="p-2">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-3 rounded-xl text-brand-text hover:text-white hover:bg-white/5 transition-all duration-200 group"
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.desc && (
                      <span className="block text-xs text-brand-text/50 mt-0.5 group-hover:text-brand-text/70 transition-colors">
                        {item.desc}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
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
      className="px-4 py-2 text-brand-text hover:text-white transition-all duration-300 font-medium relative group rounded-lg hover:bg-white/5"
    >
      {children}
    </Link>
  )
})

// Memoize MobileNavLink component
const MobileNavLink = memo(function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <motion.div
      variants={{
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: -20 }
      }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="block text-lg text-brand-text hover:text-white transition-colors duration-200 font-medium py-3 px-2 rounded-lg hover:bg-white/5"
      >
        {children}
      </Link>
    </motion.div>
  )
})
