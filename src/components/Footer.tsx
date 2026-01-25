'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Logo from './Logo'

// Apple-style easing
const appleEase = [0.16, 1, 0.3, 1] as const

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [60, 0])

  return (
    <footer ref={containerRef} className="bg-gradient-to-b from-brand-deep to-[#020817] border-t border-white/[0.05] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient glow at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Ambient orbs */}
        <motion.div 
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl"
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-brand-secondary/5 rounded-full blur-3xl"
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10"
        style={{ opacity, y }}
      >
        <div className="grid md:grid-cols-5 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: appleEase }}
          >
            <Link href="/" className="mb-6 inline-block group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Logo />
              </motion.div>
            </Link>
            <p className="text-brand-text text-base mt-6 leading-relaxed max-w-sm">
              The spatial intelligence layer that makes the physical world machine-readable.
            </p>
            
            {/* Newsletter or CTA */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: appleEase }}
            >
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-accent/10 to-brand-secondary/10 border border-white/[0.1] text-sm text-white hover:border-white/[0.2] hover:from-brand-accent/20 hover:to-brand-secondary/20 transition-all duration-300 group"
              >
                <span>Request a Demo</span>
                <motion.svg 
                  className="w-4 h-4 text-brand-accent" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Product */}
          <FooterColumn title="Product" delay={0.1}>
            <FooterLink href="/product">Platform Overview</FooterLink>
            <FooterLink href="/product#monitoring">Real-time Monitoring</FooterLink>
            <FooterLink href="/product#analytics">Geospatial Analytics</FooterLink>
            <FooterLink href="/product#simulations">Simulations</FooterLink>
            <FooterLink href="/product#integrations">Integrations</FooterLink>
          </FooterColumn>

          {/* Solutions */}
          <FooterColumn title="Solutions" delay={0.2}>
            <FooterLink href="/use-cases">Use Cases</FooterLink>
            <FooterLink href="/use-cases#infrastructure">Infrastructure</FooterLink>
            <FooterLink href="/use-cases#disaster">Disaster Response</FooterLink>
            <FooterLink href="/use-cases#environmental">Environmental</FooterLink>
            <FooterLink href="/use-cases#security">Security</FooterLink>
          </FooterColumn>

          {/* Company */}
          <FooterColumn title="Company" delay={0.3}>
            <FooterLink href="/research">Research</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/contact">Request Demo</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
          </FooterColumn>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: appleEase }}
        >
          <p className="text-brand-text/60 text-sm mb-6 md:mb-0">
            © 2025 AtlasPro AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <SocialLink href="https://linkedin.com/company/atlaspro-ai" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </SocialLink>
            <SocialLink href="https://twitter.com/atlaspro_ai" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </SocialLink>
            <SocialLink href="https://github.com/AtlasPro-AI" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </SocialLink>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

function FooterColumn({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: appleEase }}
    >
      <h3 className="text-white font-heading font-bold mb-5 text-sm uppercase tracking-wider">{title}</h3>
      <ul className="space-y-3">
        {children}
      </ul>
    </motion.div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-brand-text/70 hover:text-white transition-colors duration-300 text-sm inline-flex items-center group"
      >
        <span className="relative">
          {children}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-brand-accent to-brand-secondary group-hover:w-full transition-all duration-300" />
        </span>
      </Link>
    </li>
  )
}

function SocialLink({ href, children, 'aria-label': ariaLabel }: { href: string; children: React.ReactNode; 'aria-label': string }) {
  return (
    <motion.a 
      href={href}
      aria-label={ariaLabel}
      className="text-brand-text/50 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/[0.05]"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.a>
  )
}
