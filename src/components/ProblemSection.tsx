'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const painPoints = [
  {
    title: 'Fragmented Systems',
    description: 'Disconnected GIS tools, siloed imagery, separate video and LiDAR processing create data chaos',
    icon: '🔀',
  },
  {
    title: 'No Real-Time Processing',
    description: 'Cannot process spatial data together in real-time for engineering-grade outputs',
    icon: '⏱️',
  },
  {
    title: 'Weeks of Manual Work',
    description: 'Fiber layout, grid expansion, hazard routing, and site monitoring consume massive resources',
    icon: '📊',
  },
]

export default function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-deep to-brand-main relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="text-6xl md:text-7xl font-heading font-bold text-white">$135B</span>
            <span className="block text-xl text-brand-text mt-2">spent on manual workflow annually</span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Waiting for our Spatial Intelligence OS to automate
          </motion.h2>
          
          <motion.p 
            className="text-xl text-brand-text max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The infrastructure, energy, and defense sectors are drowning in spatial data fragmentation
          </motion.p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.5 + index * 0.15,
                ease: "easeOut"
              }}
              className="glass rounded-card-lg p-8 relative overflow-hidden group hover:shadow-glow-strong transition-all duration-500"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-glow"></div>
              
              {/* Icon */}
              <div className="text-5xl mb-4">{point.icon}</div>
              
              {/* Content */}
              <h3 className="text-2xl font-heading font-bold mb-3 text-white">
                {point.title}
              </h3>
              <p className="text-brand-text leading-relaxed">
                {point.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-glow/0 to-brand-secondary/0 group-hover:from-brand-glow/5 group-hover:to-brand-secondary/10 transition-all duration-500 rounded-card-lg pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-brand-text">
            <span className="text-white font-semibold">The solution?</span> A unified spatial intelligence OS that ends the chaos.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
