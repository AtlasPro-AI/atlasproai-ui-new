'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// Apple-inspired easing
const easeOutExpo = [0.16, 1, 0.3, 1]

// Icon components
const ChartIcon = () => (
  <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
)

const HomeIcon = () => (
  <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>
)

const MapIcon = () => (
  <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
  </svg>
)

const DownloadIcon = () => (
  <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
  </svg>
)

const TrendingIcon = () => (
  <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
  </svg>
)

const features = [
  {
    title: 'Demographic Analysis',
    description: 'AI agents analyze neighborhoods by demographics, income, and trends—perfect for targeting marketing campaigns.',
    icon: ChartIcon,
  },
  {
    title: 'Project Intelligence',
    description: 'Web crawl, synthesize information, and display it on maps to help bid projects with confidence.',
    icon: BriefcaseIcon,
  },
  {
    title: 'Property Discovery',
    description: 'Find homes outside flood zones, identify investment opportunities, or locate high-ROI properties instantly.',
    icon: HomeIcon,
  },
  {
    title: 'Route Optimization',
    description: 'Plan delivery routes, optimize travel paths, and save time for solo business owners and logistics teams.',
    icon: MapIcon,
  },
  {
    title: 'Data Export & Integration',
    description: 'Query Google Earth AI for infrastructure data, export to KML, GeoJSON, or integrate with your tools.',
    icon: DownloadIcon,
  },
  {
    title: 'Investment Intelligence',
    description: 'Identify where house flippers should invest next or where developers should build their next project.',
    icon: TrendingIcon,
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -50])

  return (
    <section ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 bg-brand-main relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/50 via-transparent to-brand-deep/50" />
        <motion.div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(127, 255, 235, 0.03) 0%, transparent 60%)',
            y
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="text-brand-glow text-sm font-medium tracking-widest uppercase mb-4"
          >
            Capabilities
          </motion.p>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.1 }}
          >
            What AI Agents Can Do
          </motion.h2>
          
          <motion.p 
            className="text-xl text-brand-text/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.2 }}
          >
            From marketing analysis to real estate intelligence—AI agents that understand location
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index, isInView }: { feature: typeof features[0]; index: number; isInView: boolean }) {
  const Icon = feature.icon
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: easeOutExpo
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        className="relative h-full p-8 rounded-2xl overflow-hidden cursor-pointer"
        style={{
          background: 'linear-gradient(135deg, rgba(17, 35, 31, 0.8) 0%, rgba(15, 30, 26, 0.9) 100%)',
          border: '1px solid rgba(181, 210, 206, 0.08)',
        }}
        whileHover={{ 
          y: -8,
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(127, 255, 235, 0.1)',
        }}
        transition={{ duration: 0.4, ease: easeOutExpo }}
      >
        {/* Hover gradient overlay */}
        <motion.div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(127, 255, 235, 0.05) 0%, rgba(74, 152, 136, 0.05) 100%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Top accent line */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(127, 255, 235, 0.5), transparent)',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
        />
        
        <div className="relative z-10">
          {/* Icon */}
          <motion.div 
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(127, 255, 235, 0.1) 0%, rgba(74, 152, 136, 0.1) 100%)',
              border: '1px solid rgba(127, 255, 235, 0.15)',
            }}
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              borderColor: isHovered ? 'rgba(127, 255, 235, 0.3)' : 'rgba(127, 255, 235, 0.15)'
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="text-brand-glow"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon />
            </motion.div>
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-heading font-semibold mb-3 text-white group-hover:text-brand-glow transition-colors duration-300">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-brand-text/70 leading-relaxed text-sm">
            {feature.description}
          </p>
          
          {/* Arrow indicator */}
          <motion.div 
            className="mt-6 flex items-center text-brand-glow/60 text-sm font-medium"
            animate={{ 
              x: isHovered ? 4 : 0,
              color: isHovered ? 'rgba(127, 255, 235, 1)' : 'rgba(127, 255, 235, 0.6)'
            }}
            transition={{ duration: 0.3 }}
          >
            <span>Learn more</span>
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
