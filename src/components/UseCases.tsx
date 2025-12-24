'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Icon Components
const TrendingUpIcon = () => (
  <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
)

const HomeIcon = () => (
  <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>
)

const TruckIcon = () => (
  <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
  </svg>
)

const HammerIcon = () => (
  <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
  </svg>
)

const BuildingIcon = () => (
  <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
  </svg>
)

const useCases = [
  {
    title: 'Marketing Campaign Targeting',
    description: 'Marketers analyze neighborhoods by demographics to target high-ROI areas for campaigns like Google Fiber marketing sequences.',
    icon: TrendingUpIcon,
    color: 'from-brand-secondary to-brand-glow',
  },
  {
    title: 'Project Bidding Intelligence',
    description: 'CEOs and project managers use AI agents to crawl the web, synthesize data, and display project intelligence on maps.',
    icon: BriefcaseIcon,
    color: 'from-brand-accent to-orange-400',
  },
  {
    title: 'Smart Home Buying',
    description: 'First-time home buyers identify properties outside flood zones or find homes matching specific location criteria instantly.',
    icon: HomeIcon,
    color: 'from-blue-400 to-brand-glow',
  },
  {
    title: 'Delivery Route Planning',
    description: 'Solo business owners plan optimal delivery routes, saving time and fuel costs with AI-powered routing.',
    icon: TruckIcon,
    color: 'from-green-400 to-brand-secondary',
  },
  {
    title: 'House Flipping ROI',
    description: 'House flippers query AI agents to identify neighborhoods with the highest investment potential and fastest returns.',
    icon: HammerIcon,
    color: 'from-brand-glow to-cyan-400',
  },
  {
    title: 'Real Estate Development',
    description: 'Developers discover which neighborhoods to build condos or multi-family units based on growth trends and demographics.',
    icon: BuildingIcon,
    color: 'from-orange-400 to-brand-accent',
  },
]

export default function UseCases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-main relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.05 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-glow rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real-World Use Cases
          </motion.h2>
          <motion.p 
            className="text-xl text-brand-text max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            See how professionals use AI agents to solve location-based challenges
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCaseCard({ useCase, index, isInView }: { useCase: typeof useCases[0]; index: number; isInView: boolean }) {
  const Icon = useCase.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      className="glass rounded-card-lg overflow-hidden hover:shadow-glow transition-all duration-500 group cursor-pointer relative"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Gradient header with animation */}
      <motion.div 
        className={`h-2 bg-gradient-to-r ${useCase.color}`}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
      ></motion.div>

      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-glow/0 to-brand-secondary/0 group-hover:from-brand-glow/5 group-hover:to-brand-secondary/5 transition-all duration-500"></div>

      <div className="p-8 relative z-10">
        {/* Icon with hover animation */}
        <motion.div 
          className="text-brand-glow mb-4"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-heading font-bold mb-3 text-white group-hover:text-brand-glow transition-colors duration-300">
          {useCase.title}
        </h3>

        {/* Description */}
        <p className="text-brand-text leading-relaxed mb-4">
          {useCase.description}
        </p>

        {/* Learn more link with animated arrow */}
        <motion.div 
          className="flex items-center text-brand-glow font-semibold"
          initial={{ x: 0 }}
          whileHover={{ x: 8 }}
          transition={{ duration: 0.3 }}
        >
          <span>Learn more</span>
          <motion.svg 
            className="w-5 h-5 ml-2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </motion.svg>
        </motion.div>
      </div>
    </motion.div>
  )
}
