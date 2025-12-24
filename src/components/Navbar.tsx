'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass shadow-2xl backdrop-blur-xl border-b border-brand-text/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative w-12 h-12"
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              {/* AtlasPro Logo - Circular background with A */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary to-brand-glow rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                  <path d="M12 2L2 19h4l6-10 6 10h4L12 2z" className="text-white"/>
                  <path d="M8 19h8l-2-3.5H10L8 19z" className="text-white opacity-80"/>
                </svg>
              </div>
              {/* Subtle rotating ring on hover */}
              <motion.div 
                className="absolute inset-0 border-2 border-brand-glow rounded-full opacity-0 group-hover:opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <motion.span 
              className="text-white font-heading font-bold text-xl"
              whileHover={{ x: 2 }}
            >
              AtlasPro <span className="text-brand-glow">AI</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/product">Product</NavLink>
            <NavLink href="/use-cases">Use Cases</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="btn-primary text-sm px-6 py-3"
              >
                Join Waitlist
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-brand-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden glass"
      >
        <div className="px-4 py-6 space-y-4">
          <MobileNavLink href="/product" onClick={() => setIsMobileMenuOpen(false)}>Product</MobileNavLink>
          <MobileNavLink href="/use-cases" onClick={() => setIsMobileMenuOpen(false)}>Use Cases</MobileNavLink>
          <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
          <MobileNavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
          <Link
            href="/contact"
            className="block btn-primary text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join Waitlist
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
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
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-brand-text hover:text-white transition-colors duration-200 font-medium py-2"
    >
      {children}
    </Link>
  )
}
