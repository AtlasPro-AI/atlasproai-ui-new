'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// Apple-style easing
const appleEase = [0.16, 1, 0.3, 1] as const

// Enhanced Icon Components with gradients
const RobotIcon = () => (
  <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="16" width="40" height="28" rx="4" stroke="url(#robotGrad)" strokeWidth="2"/>
    <circle cx="20" cy="28" r="4" stroke="url(#robotGrad)" strokeWidth="2"/>
    <circle cx="36" cy="28" r="4" stroke="url(#robotGrad)" strokeWidth="2"/>
    <path d="M28 8V16" stroke="url(#robotGrad)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="28" cy="6" r="3" stroke="url(#robotGrad)" strokeWidth="2"/>
    <path d="M18 36H38" stroke="url(#robotGrad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 28H8M48 28H52" stroke="url(#robotGrad)" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="robotGrad" x1="4" y1="6" x2="52" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7B2BFF"/>
        <stop offset="1" stopColor="#00D4FF"/>
      </linearGradient>
    </defs>
  </svg>
)

const ToolsIcon = () => (
  <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 8L32 12L28 16L24 12L28 8Z" stroke="url(#toolsGrad)" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 24L16 28L12 32L8 28L12 24Z" stroke="url(#toolsGrad)" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M44 24L48 28L44 32L40 28L44 24Z" stroke="url(#toolsGrad)" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M28 40L32 44L28 48L24 44L28 40Z" stroke="url(#toolsGrad)" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M28 16V40M16 28H40" stroke="url(#toolsGrad)" strokeWidth="2"/>
    <circle cx="28" cy="28" r="6" stroke="url(#toolsGrad)" strokeWidth="2"/>
    <defs>
      <linearGradient id="toolsGrad" x1="8" y1="8" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00D4FF"/>
        <stop offset="1" stopColor="#00FFD4"/>
      </linearGradient>
    </defs>
  </svg>
)

const InterfaceIcon = () => (
  <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="44" height="32" rx="3" stroke="url(#interfaceGrad)" strokeWidth="2"/>
    <path d="M6 16H50" stroke="url(#interfaceGrad)" strokeWidth="2"/>
    <circle cx="12" cy="12" r="1.5" fill="url(#interfaceGrad)"/>
    <circle cx="18" cy="12" r="1.5" fill="url(#interfaceGrad)"/>
    <circle cx="24" cy="12" r="1.5" fill="url(#interfaceGrad)"/>
    <path d="M14 24L22 32L14 32" stroke="url(#interfaceGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 32H42" stroke="url(#interfaceGrad)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 48L28 40L36 48" stroke="url(#interfaceGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="interfaceGrad" x1="6" y1="8" x2="50" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00D4FF"/>
        <stop offset="1" stopColor="#FF6B35"/>
      </linearGradient>
    </defs>
  </svg>
)

const dataCards = [
  {
    title: 'AI Agents',
    description: 'Intelligent agents that understand location and accomplish spatial tasks for you',
    items: ['Query geospatial data', 'Analyze neighborhoods', 'Crawl & synthesize web data', 'Identify properties', 'Plan optimal routes', 'Generate insights'],
    icon: RobotIcon,
    gradient: 'from-purple-500 via-violet-500 to-cyan-500',
    bgGradient: 'from-purple-500/10 to-cyan-500/5',
  },
  {
    title: 'MCP Tools',
    description: 'Model Context Protocol tools that make your AI spatially intelligent',
    items: ['GeoJSON converter', 'Map overlay access', 'PDF to map simulation', 'Google Earth AI integration', 'KML export', 'Spatial data fusion'],
    icon: ToolsIcon,
    gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
    bgGradient: 'from-cyan-500/10 to-emerald-500/5',
  },
  {
    title: 'Simple Interface',
    description: 'Tell AI what you need, visualize results on interactive maps',
    items: ['Natural language queries', 'Interactive map interface', 'Real-time data visualization', 'Export to any format', 'Integrate with your workflow', 'Dashboard analytics'],
    icon: InterfaceIcon,
    gradient: 'from-cyan-500 via-blue-500 to-orange-500',
    bgGradient: 'from-blue-500/10 to-orange-500/5',
  },
]

export default function UnifySection() {
  const ref = useRef(null)
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  // Staggered item reveal
  const itemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: appleEase
      }
    })
  }

  return (
    <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-main via-brand-deep to-brand-main relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Animated orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-brand-glow/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-brand-secondary/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="unifyGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#unifyGrid)" />
        </svg>
      </motion.div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: appleEase }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: appleEase }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-glow to-brand-secondary animate-pulse" />
            <span className="text-sm text-brand-text">Building the Future</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: appleEase }}
          >
            <span className="text-white">What We </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-glow via-brand-accent to-brand-secondary">
              Build
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-brand-text max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: appleEase }}
          >
            AI Agents powered by spatial intelligence tools to solve your location-based challenges
          </motion.p>
        </motion.div>

        {/* Cards with flow connectors */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Flow lines between cards - desktop only */}
          <div className="hidden md:block absolute top-1/2 left-[33.33%] w-[33.33%] h-[2px] -translate-y-1/2 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.8, ease: appleEase }}
            />
          </div>
          <div className="hidden md:block absolute top-1/2 left-[66.66%] w-[33.33%] h-[2px] -translate-y-1/2 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 1, ease: appleEase }}
            />
          </div>
          
          {dataCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.4 + index * 0.15,
                ease: appleEase
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              <motion.div
                className={`
                  relative overflow-hidden rounded-3xl h-full
                  bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                  backdrop-blur-xl border border-white/[0.08]
                  transition-all duration-700
                  ${hoveredCard === index ? 'shadow-2xl' : ''}
                `}
                whileHover={{ 
                  y: -16,
                  scale: 1.02,
                }}
                transition={{ duration: 0.5, ease: appleEase }}
              >
                {/* Gradient top bar */}
                <motion.div 
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${card.gradient}`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.15, ease: appleEase }}
                />
                
                {/* Hover background gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
                
                <div className="relative z-10 p-8 lg:p-10">
                  {/* Icon with animated glow */}
                  <motion.div 
                    className="relative mb-8"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: appleEase }}
                  >
                    <div className="relative z-10">
                      <card.icon />
                    </div>
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-r ${card.gradient} blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                      style={{ transform: 'scale(1.5)' }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-2xl lg:text-3xl font-heading font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${card.gradient} transition-all duration-500`}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-text mb-8 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {card.description}
                  </p>

                  {/* Items list with stagger */}
                  <ul className="space-y-3">
                    {card.items.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center text-brand-text text-sm group-hover:text-white/60 transition-colors duration-300"
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      >
                        <motion.div 
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.gradient} mr-3 flex-shrink-0`}
                          animate={hoveredCard === index ? { scale: [1, 1.5, 1] } : {}}
                          transition={{ duration: 0.5, delay: i * 0.05 }}
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Floating number indicator */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-sm font-medium text-white/40 group-hover:text-white/70 group-hover:border-white/20 transition-all duration-300">
                  {index + 1}
                </div>
                
                {/* Corner accent on hover */}
                <motion.div 
                  className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-white/[0.03] to-transparent rounded-tl-full"
                  initial={{ opacity: 0 }}
                  animate={hoveredCard === index ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
