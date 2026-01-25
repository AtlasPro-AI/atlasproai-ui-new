'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// Apple-style easing
const appleEase = [0.16, 1, 0.3, 1] as const

const painPoints = [
  {
    title: 'Fragmented Systems',
    description: 'Disconnected GIS tools, siloed imagery, separate video and LiDAR processing create data chaos',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 16L24 8L40 16M8 16L24 24M8 16V32L24 40M40 16L24 24M40 16V32L24 40M24 24V40" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="gradient1" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00D4FF"/>
            <stop offset="1" stopColor="#7B2BFF"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    color: 'from-cyan-500/20 to-blue-500/20',
    accentColor: 'bg-gradient-to-r from-cyan-400 to-blue-500',
  },
  {
    title: 'No Real-Time Processing',
    description: 'Cannot process spatial data together in real-time for engineering-grade outputs',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" stroke="url(#gradient2)" strokeWidth="2"/>
        <path d="M24 16V24L30 28" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 12L40 8M8 40L12 36" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round"/>
        <defs>
          <linearGradient id="gradient2" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF6B6B"/>
            <stop offset="1" stopColor="#FFE66D"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    color: 'from-red-500/20 to-yellow-500/20',
    accentColor: 'bg-gradient-to-r from-red-400 to-yellow-400',
  },
  {
    title: 'Weeks of Manual Work',
    description: 'Fiber layout, grid expansion, hazard routing, and site monitoring consume massive resources',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="14" width="32" height="24" rx="2" stroke="url(#gradient3)" strokeWidth="2"/>
        <path d="M16 26H32M16 32H28" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 20H20" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round"/>
        <defs>
          <linearGradient id="gradient3" x1="8" y1="14" x2="40" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A855F7"/>
            <stop offset="1" stopColor="#EC4899"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    color: 'from-purple-500/20 to-pink-500/20',
    accentColor: 'bg-gradient-to-r from-purple-400 to-pink-400',
  },
]

export default function ProblemSection() {
  const ref = useRef(null)
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const orb1Y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  // Number counter animation
  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: appleEase,
        delay: 0.2 
      }
    }
  }

  return (
    <section 
      ref={containerRef} 
      className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-deep via-brand-main to-brand-deep relative overflow-hidden"
    >
      {/* Animated background effects */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Floating orbs with parallax */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-brand-accent/10 to-transparent rounded-full blur-3xl"
          style={{ y: orb1Y }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-brand-secondary/10 to-transparent rounded-full blur-3xl"
          style={{ y: orb2Y }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </motion.div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header with dramatic stat */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: appleEase }}
          className="text-center mb-20"
        >
          {/* The big number - Apple style */}
          <motion.div
            variants={numberVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative inline-block mb-8"
          >
            <motion.span 
              className="text-8xl md:text-9xl lg:text-[10rem] font-heading font-bold bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-transparent leading-none"
              initial={{ filter: 'blur(20px)', opacity: 0 }}
              animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
              transition={{ duration: 1.2, ease: appleEase, delay: 0.3 }}
            >
              $135B
            </motion.span>
            
            {/* Glow effect behind number */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 via-brand-secondary/20 to-brand-glow/20 blur-3xl -z-10 scale-150" />
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-brand-text mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: appleEase, delay: 0.5 }}
          >
            spent on manual geospatial workflows annually
          </motion.p>

          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: appleEase, delay: 0.6 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              Waiting for our
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-glow">
              Spatial Intelligence OS
            </span>
          </motion.h2>
        </motion.div>

        {/* Pain Points with 3D cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 perspective-1000">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 + index * 0.15,
                ease: appleEase
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className={`
                  relative overflow-hidden rounded-3xl p-8 lg:p-10
                  bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                  backdrop-blur-xl border border-white/[0.08]
                  transition-all duration-700 ease-out
                  ${hoveredCard === index ? 'shadow-2xl shadow-brand-accent/10' : ''}
                `}
                whileHover={{ 
                  y: -12,
                  rotateY: 2,
                  rotateX: 2,
                  scale: 1.02,
                }}
                transition={{ duration: 0.4, ease: appleEase }}
              >
                {/* Animated gradient bar */}
                <motion.div 
                  className={`absolute top-0 left-0 right-0 h-[2px] ${point.accentColor}`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1 + index * 0.15, ease: appleEase }}
                />
                
                {/* Background gradient on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
                
                {/* Icon container with glow */}
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative z-10">
                    {point.icon}
                  </div>
                  <motion.div 
                    className={`absolute inset-0 ${point.accentColor} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    style={{ transform: 'scale(2)' }}
                  />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-heading font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all duration-300">
                  {point.title}
                </h3>
                <p className="text-brand-text leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {point.description}
                </p>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement with arrow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: appleEase, delay: 1.4 }}
          className="text-center mt-20"
        >
          <motion.div 
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/[0.08] backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-lg text-brand-text">
              <span className="text-white font-semibold">The solution?</span> A unified spatial intelligence OS
            </span>
            <motion.svg 
              className="w-5 h-5 text-brand-accent"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
