'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Ingest',
    description: 'Satellite imagery, LiDAR scans, IoT sensors, maps, and drone data',
    icon: '📥',
  },
  {
    number: '02',
    title: 'Normalize & Fuse',
    description: 'Standardize formats, align coordinates, and merge multi-source data',
    icon: '🔄',
  },
  {
    number: '03',
    title: 'Spatial Intelligence',
    description: 'AI models, spatial rules, and intelligent agents analyze and classify',
    icon: '🧠',
  },
  {
    number: '04',
    title: 'Outputs',
    description: 'Interactive dashboards, real-time alerts, simulations, and API access',
    icon: '📊',
  },
]

export default function Pipeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-main to-brand-deep">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            From raw spatial data to operational intelligence in four seamless steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary via-brand-glow to-brand-secondary transform -translate-y-1/2 opacity-30"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <PipelineStep key={index} step={step} index={index} isInView={isInView} />
            ))}
          </div>

          {/* Animated flow indicator */}
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 w-16 h-16 transform -translate-y-1/2"
            animate={{
              x: ['0%', '1600%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className="w-4 h-4 bg-brand-glow rounded-full shadow-glow"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function PipelineStep({ step, index, isInView }: { step: typeof steps[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Card */}
      <div className="glass rounded-card p-8 hover:shadow-glow transition-all duration-300 group cursor-pointer h-full">
        {/* Step number */}
        <div className="text-6xl font-heading font-bold text-brand-glow/20 mb-4">
          {step.number}
        </div>

        {/* Icon */}
        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {step.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-heading font-bold mb-3 text-white">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-brand-text leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Arrow connector for mobile */}
      {index < steps.length - 1 && (
        <div className="lg:hidden flex justify-center my-4">
          <svg className="w-8 h-8 text-brand-glow" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      )}
    </motion.div>
  )
}
