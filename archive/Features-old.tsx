'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Demographic Analysis',
    description: 'AI agents analyze neighborhoods by demographics, income, trends—perfect for targeting marketing campaigns.',
    icon: '�',
  },
  {
    title: 'Project Intelligence',
    description: 'Web crawl, synthesize information, and display it on maps to help bid projects with confidence.',
    icon: '📊',
  },
  {
    title: 'Property Discovery',
    description: 'Find homes outside flood zones, identify investment opportunities, or locate high-ROI properties instantly.',
    icon: '🏡',
  },
  {
    title: 'Route Optimization',
    description: 'Plan delivery routes, optimize travel paths, and save time for solo business owners and logistics teams.',
    icon: '🗺️',
  },
  {
    title: 'Data Export & Integration',
    description: 'Query Google Earth AI for infrastructure data, export to KML, GeoJSON, or integrate with your tools.',
    icon: '�',
  },
  {
    title: 'Investment Intelligence',
    description: 'Identify where house flippers should invest next or where developers should build their next project.',
    icon: '💰',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-main relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-glow rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            What AI Agents Can Do For You
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            From marketing analysis to real estate intelligence—AI agents that understand location
          </p>
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-card p-8 hover:shadow-glow transition-all duration-300 group cursor-pointer"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </div>
      <h3 className="text-2xl font-heading font-bold mb-3 text-white">
        {feature.title}
      </h3>
      <p className="text-brand-text leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  )
}
