'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'

// Apple-inspired easing
const easeOutExpo = [0.16, 1, 0.3, 1]

// Icon Components
const TrendingUpIcon = () => (
  <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
)

const HomeIcon = () => (
  <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>
)

const TruckIcon = () => (
  <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
  </svg>
)

const HammerIcon = () => (
  <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
  </svg>
)

const BuildingIcon = () => (
  <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
  </svg>
)

const useCases = [
  {
    title: 'Marketing Campaign Targeting',
    description: 'Analyze neighborhoods by demographics to target high-ROI areas for campaigns.',
    icon: TrendingUpIcon,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
    slug: 'marketing-campaign-targeting',
  },
  {
    title: 'Project Bidding Intelligence',
    description: 'Use AI agents to crawl, synthesize data, and display project intelligence on maps.',
    icon: BriefcaseIcon,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
    slug: 'project-bidding-intelligence',
  },
  {
    title: 'Smart Home Buying',
    description: 'Identify properties outside flood zones matching specific location criteria instantly.',
    icon: HomeIcon,
    gradient: 'from-violet-500/20 to-purple-500/20',
    iconColor: 'text-violet-400',
    slug: 'smart-home-buying',
  },
  {
    title: 'Delivery Route Planning',
    description: 'Plan optimal delivery routes, saving time and fuel with AI-powered routing.',
    icon: TruckIcon,
    gradient: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400',
    slug: 'delivery-route-planning',
  },
  {
    title: 'House Flipping ROI',
    description: 'Query AI agents to identify neighborhoods with the highest investment potential.',
    icon: HammerIcon,
    gradient: 'from-rose-500/20 to-pink-500/20',
    iconColor: 'text-rose-400',
    slug: 'house-flipping-roi',
  },
  {
    title: 'Real Estate Development',
    description: 'Discover which neighborhoods to build based on growth trends and demographics.',
    icon: BuildingIcon,
    gradient: 'from-teal-500/20 to-emerald-500/20',
    iconColor: 'text-teal-400',
    slug: 'real-estate-development',
  },
]

export default function UseCases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-main via-brand-deep to-brand-main" />
      
      {/* Ambient effects */}
      <motion.div 
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(127, 255, 235, 0.05) 0%, transparent 60%)',
          filter: 'blur(60px)',
          y
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="text-brand-glow text-sm font-medium tracking-widest uppercase mb-4"
          >
            Solutions
          </motion.p>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.1 }}
          >
            Real-World Use Cases
          </motion.h2>
          
          <motion.p 
            className="text-xl text-brand-text/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.2 }}
          >
            See how professionals use AI agents to solve location-based challenges
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} index={index} isInView={isInView} />
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: easeOutExpo, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/use-cases" className="btn-secondary inline-flex items-center gap-2">
            View all use cases
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function UseCaseCard({ useCase, index, isInView }: { useCase: typeof useCases[0]; index: number; isInView: boolean }) {
  const Icon = useCase.icon
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <Link href={`/use-cases#${useCase.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.08,
          ease: easeOutExpo
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group h-full"
      >
        <motion.div
          className="relative h-full p-6 rounded-2xl overflow-hidden cursor-pointer"
          style={{
            background: 'rgba(17, 35, 31, 0.6)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(181, 210, 206, 0.08)',
          }}
          whileHover={{ 
            y: -6,
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
          }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
        >
          {/* Gradient background on hover */}
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} rounded-2xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Shine effect */}
          <motion.div 
            className="absolute inset-0 rounded-2xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <motion.div
              className="absolute top-0 -left-full w-full h-full"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
              }}
              animate={isHovered ? { left: '100%' } : { left: '-100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </motion.div>

          <div className="relative z-10">
            {/* Icon */}
            <motion.div 
              className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${useCase.iconColor}`}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              animate={{ 
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon />
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-heading font-semibold mb-2 text-white group-hover:text-brand-glow transition-colors duration-300">
              {useCase.title}
            </h3>

            {/* Description */}
            <p className="text-brand-text/60 text-sm leading-relaxed">
              {useCase.description}
            </p>
            
            {/* Arrow */}
            <motion.div 
              className="mt-4 flex items-center text-brand-text/40 text-sm"
              animate={{ 
                x: isHovered ? 4 : 0,
                color: isHovered ? 'rgba(127, 255, 235, 0.8)' : 'rgba(181, 210, 206, 0.4)'
              }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  )
}
