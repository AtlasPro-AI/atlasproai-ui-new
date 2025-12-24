'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Icon Components
const RobotIcon = () => (
  <svg className="w-16 h-16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
)

const ToolsIcon = () => (
  <svg className="w-16 h-16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
)

const InterfaceIcon = () => (
  <svg className="w-16 h-16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
  </svg>
)

const dataCards = [
  {
    title: 'AI Agents',
    description: 'Intelligent agents that understand location and accomplish spatial tasks for you',
    items: ['Query geospatial data', 'Analyze neighborhoods', 'Crawl & synthesize web data', 'Identify properties', 'Plan optimal routes', 'Generate insights'],
    icon: RobotIcon,
    color: 'from-blue-500 to-brand-secondary',
  },
  {
    title: 'MCP Tools',
    description: 'Model Context Protocol tools that make your AI spatially intelligent',
    items: ['GeoJSON converter', 'Map overlay access', 'PDF to map simulation', 'Google Earth AI integration', 'KML export', 'Spatial data fusion'],
    icon: ToolsIcon,
    color: 'from-brand-glow to-cyan-400',
  },
  {
    title: 'Simple Interface',
    description: 'Tell AI what you need, visualize results on interactive maps',
    items: ['Natural language queries', 'Interactive map interface', 'Real-time data visualization', 'Export to any format', 'Integrate with your workflow', 'Dashboard analytics'],
    icon: InterfaceIcon,
    color: 'from-brand-accent to-orange-400',
  },
]

export default function UnifySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-main to-brand-deep relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : {}}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-glow rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-brand-secondary rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What We Build
          </motion.h2>
          <motion.p 
            className="text-xl text-brand-text max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            AI Agents powered by spatial intelligence tools to solve your location-based challenges
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {dataCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="relative"
            >
              {/* Connector arrow with animation */}
              {index < dataCards.length - 1 && (
                <motion.div 
                  className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                >
                  <motion.svg 
                    className="w-8 h-8 text-brand-glow" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </motion.svg>
                </motion.div>
              )}

              {/* Card */}
              <motion.div 
                className="glass rounded-card-lg p-8 h-full hover:shadow-glow transition-all duration-500 group relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Gradient top border with animation */}
                <motion.div 
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} rounded-t-card-lg`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                ></motion.div>

                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-glow/0 to-brand-secondary/0 group-hover:from-brand-glow/5 group-hover:to-brand-secondary/5 transition-all duration-500 rounded-card-lg"></div>

                <div className="relative z-10">
                  {/* Icon with animation */}
                  <motion.div 
                    className="text-brand-glow mb-6"
                    whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <card.icon />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-brand-glow transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-text mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Items list */}
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center text-brand-text text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.6 + i * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-brand-glow rounded-full mr-2"></div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
