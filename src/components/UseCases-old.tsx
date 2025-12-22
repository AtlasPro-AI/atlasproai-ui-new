'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const useCases = [
  {
    title: 'Marketing Campaign Targeting',
    description: 'Marketers analyze neighborhoods by demographics to target high-ROI areas for campaigns like Google Fiber marketing sequences.',
    icon: '📈',
    color: 'from-brand-secondary to-brand-glow',
  },
  {
    title: 'Project Bidding Intelligence',
    description: 'CEOs and project managers use AI agents to crawl the web, synthesize data, and display project intelligence on maps.',
    icon: '�',
    color: 'from-brand-accent to-orange-400',
  },
  {
    title: 'Smart Home Buying',
    description: 'First-time home buyers identify properties outside flood zones or find homes matching specific location criteria instantly.',
    icon: '�',
    color: 'from-blue-400 to-brand-glow',
  },
  {
    title: 'Delivery Route Planning',
    description: 'Solo business owners plan optimal delivery routes, saving time and fuel costs with AI-powered routing.',
    icon: '🚚',
    color: 'from-green-400 to-brand-secondary',
  },
  {
    title: 'House Flipping ROI',
    description: 'House flippers query AI agents to identify neighborhoods with the highest investment potential and fastest returns.',
    icon: '�',
    color: 'from-brand-glow to-cyan-400',
  },
  {
    title: 'Real Estate Development',
    description: 'Developers discover which neighborhoods to build condos or multi-family units based on growth trends and demographics.',
    icon: '🏗️',
    color: 'from-orange-400 to-brand-accent',
  },
]

export default function UseCases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-main">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Real-World Use Cases
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            See how professionals use AI agents to solve location-based challenges
          </p>
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
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-card-lg overflow-hidden hover:shadow-glow transition-all duration-300 group cursor-pointer"
      whileHover={{ y: -8 }}
    >
      {/* Gradient header */}
      <div className={`h-2 bg-gradient-to-r ${useCase.color}`}></div>

      <div className="p-8">
        {/* Icon */}
        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {useCase.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-heading font-bold mb-3 text-white">
          {useCase.title}
        </h3>

        {/* Description */}
        <p className="text-brand-text leading-relaxed mb-4">
          {useCase.description}
        </p>

        {/* Learn more link */}
        <div className="flex items-center text-brand-glow font-semibold group-hover:translate-x-2 transition-transform duration-300">
          <span>Learn more</span>
          <svg className="w-5 h-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </div>
      </div>
    </motion.div>
  )
}
