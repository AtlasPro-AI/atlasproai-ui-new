'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const securityFeatures = [
  {
    title: 'Role-Based Access Control',
    description: 'Granular permissions ensure users only see what they need',
    icon: '🔐',
  },
  {
    title: 'Comprehensive Audit Logs',
    description: 'Track every action for compliance and accountability',
    icon: '📋',
  },
  {
    title: 'End-to-End Encryption',
    description: 'Data encrypted at rest and in transit with industry standards',
    icon: '🔒',
  },
  {
    title: 'Flexible Deployment',
    description: 'Cloud, on-premises, or hybrid to meet your requirements',
    icon: '☁️',
  },
  {
    title: 'Data Residency',
    description: 'Control where your data is stored and processed',
    icon: '🌍',
  },
  {
    title: 'SOC 2 Compliant',
    description: 'Independently verified security and privacy controls',
    icon: '✓',
  },
]

export default function Security() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-deep to-brand-main">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Security & Governance by Design
          </h2>
          <p className="text-xl text-brand-text max-w-3xl mx-auto">
            Enterprise-grade security and compliance built into every layer of the platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4 p-6 glass rounded-card hover:shadow-glow transition-all duration-300"
            >
              <div className="text-3xl flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-brand-text text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-brand-text mb-6">Trusted by government agencies and Fortune 500 enterprises</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="glass px-8 py-4 rounded-lg">SOC 2 Type II</div>
            <div className="glass px-8 py-4 rounded-lg">ISO 27001</div>
            <div className="glass px-8 py-4 rounded-lg">GDPR Compliant</div>
            <div className="glass px-8 py-4 rounded-lg">FedRAMP Ready</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
