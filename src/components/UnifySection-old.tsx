'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const dataCards = [
  {
    title: 'AI Agents',
    description: 'Intelligent agents that understand location and accomplish spatial tasks for you',
    items: ['Query geospatial data', 'Analyze neighborhoods', 'Crawl & synthesize web data', 'Identify properties', 'Plan optimal routes', 'Generate insights'],
    icon: '🤖',
    color: 'from-blue-500 to-brand-secondary',
  },
  {
    title: 'MCP Tools',
    description: 'Model Context Protocol tools that make your AI spatially intelligent',
    items: ['GeoJSON converter', 'Map overlay access', 'PDF to map simulation', 'Google Earth AI integration', 'KML export', 'Spatial data fusion'],
    icon: '🛠️',
    color: 'from-brand-glow to-cyan-400',
  },
  {
    title: 'Simple Interface',
    description: 'Tell AI what you need, visualize results on interactive maps',
    items: ['Natural language queries', 'Interactive map interface', 'Real-time data visualization', 'Export to any format', 'Integrate with your workflow', 'Dashboard analytics'],
    icon: '💬',
    color: 'from-brand-accent to-orange-400',
  },
]

export default function UnifySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-main to-brand-deep">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            What We Build
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            AI Agents powered by spatial intelligence tools to solve your location-based challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {dataCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector arrow */}
              {index < dataCards.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-brand-glow" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </div>
              )}

              {/* Card */}
              <div className="glass rounded-card-lg p-8 h-full hover:shadow-glow transition-all duration-300 group">
                {/* Gradient top border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} rounded-t-card-lg`}></div>

                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-bold text-white mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-brand-text mb-6 leading-relaxed">
                  {card.description}
                </p>

                {/* Items list */}
                <ul className="space-y-2">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-center text-brand-text text-sm">
                      <div className="w-1.5 h-1.5 bg-brand-glow rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
