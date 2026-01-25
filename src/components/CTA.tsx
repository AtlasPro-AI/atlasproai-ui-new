'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

// Apple-inspired easing
const easeOutExpo = [0.16, 1, 0.3, 1]

export default function CTA() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-main via-brand-deep to-brand-main" />
      
      {/* Animated ambient orbs */}
      <motion.div 
        className="absolute top-1/2 left-1/3 w-[800px] h-[800px] -translate-y-1/2 -translate-x-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(74, 152, 136, 0.15) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/3 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(127, 255, 235, 0.1) 0%, transparent 60%)',
          filter: 'blur(100px)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Content */}
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutExpo }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            viewport={{ once: true }}
            className="text-brand-glow text-sm font-medium tracking-widest uppercase mb-6"
          >
            Ready to transform your operations?
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-tight"
          >
            Make the physical world{' '}
            <span className="gradient-text">machine-readable</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-brand-text/70 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Transform your spatial operations with AI-powered intelligence. 
            See how AtlasPro AI can automate your workflows and deliver results in minutes, not weeks.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact" className="btn-primary text-lg group">
              <span className="relative z-10">Request a Demo</span>
            </Link>
            <Link href="/product" className="btn-secondary text-lg group">
              <span>Explore Platform</span>
              <motion.svg 
                className="w-5 h-5 ml-2 inline-block" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/5"
          >
            <p className="text-brand-text/40 text-sm">
              Trusted by enterprises and government agencies worldwide
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
