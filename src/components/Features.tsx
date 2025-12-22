'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Icon components
const ChartIcon = () => (
  <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
)

const HomeIcon = () => (
  <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>
)

const MapIcon = () => (
  <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
  </svg>
)

const DownloadIcon = () => (
  <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
  </svg>
)

const TrendingIcon = () => (
  <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
  </svg>
)

const features = [
  {
    title: 'Demographic Analysis',
    description: 'AI agents analyze neighborhoods by demographics, income, trends—perfect for targeting marketing campaigns.',
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
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-main relative overflow-hidden">
      {/* Background decoration with parallax effect */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ y: 100 }}
        animate={isInView ? { y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-glow rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary rounded-full blur-3xl"></div>
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
            What AI Agents Can Do For You
          </motion.h2>
          <motion.p 
            className="text-xl text-brand-text max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From marketing analysis to real estate intelligence—AI agents that understand location
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      className="glass rounded-card p-8 hover:shadow-glow transition-all duration-500 group cursor-pointer relative overflow-hidden"
      whileHover={{ y: -12, scale: 1.03 }}
    >
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-glow/0 to-brand-secondary/0 group-hover:from-brand-glow/5 group-hover:to-brand-secondary/5 transition-all duration-500 rounded-card"></div>
      
      <div className="relative z-10">
        <motion.div 
          className="text-brand-glow mb-6"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon />
        </motion.div>
        <h3 className="text-2xl font-heading font-bold mb-3 text-white group-hover:text-brand-glow transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-brand-text leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}
