'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import InteractiveMap from '@/components/InteractiveMap'
import { motion } from 'framer-motion'
import Link from 'next/link'

const platformModules = [
  {
    title: 'Real-Time Monitoring',
    description: 'Continuous surveillance of your areas of interest with automated change detection and instant alerts.',
    features: ['Live satellite feeds', 'IoT sensor integration', 'Automated anomaly detection', 'Custom alert rules'],
    icon: '📡',
  },
  {
    title: 'Geospatial Analytics',
    description: 'AI-powered analysis that transforms raw spatial data into actionable insights and intelligence.',
    features: ['Object detection & classification', 'Spatial pattern analysis', 'Predictive modeling', 'Historical trend analysis'],
    icon: '🧠',
  },
  {
    title: 'Operational Simulations',
    description: 'Run what-if scenarios to optimize planning, response strategies, and resource allocation.',
    features: ['Scenario modeling', 'Impact assessment', 'Resource optimization', 'Risk analysis'],
    icon: '🎯',
  },
  {
    title: 'Data Fusion Engine',
    description: 'Seamlessly combine multiple data sources into a unified, queryable spatial intelligence layer.',
    features: ['Multi-source integration', 'Format normalization', 'Spatial alignment', 'Quality validation'],
    icon: '🔗',
  },
  {
    title: 'Enterprise Integrations',
    description: 'Connect with your existing tools and workflows through robust APIs and pre-built connectors.',
    features: ['REST & GraphQL APIs', 'GIS tool integration', 'Cloud storage sync', 'Custom webhooks'],
    icon: '⚡',
  },
  {
    title: 'Governance & Security',
    description: 'Enterprise-grade controls ensure your data remains secure and compliant at all times.',
    features: ['Role-based access', 'Audit logging', 'Data encryption', 'Compliance reporting'],
    icon: '🔐',
  },
]

export default function ProductPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-deep via-brand-main to-brand-secondary min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              The Complete Spatial Intelligence Platform
            </h1>
            <p className="text-xl md:text-2xl text-brand-text max-w-4xl mx-auto leading-relaxed">
              From raw geospatial data to operational insights—everything you need to monitor, 
              analyze, and act on the physical world in real-time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-main">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Platform Modules
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Six integrated modules that work together to deliver comprehensive spatial intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-card-lg p-8 hover:shadow-glow transition-all duration-300"
              >
                <div className="text-5xl mb-4">{module.icon}</div>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">
                  {module.title}
                </h3>
                <p className="text-brand-text mb-6 leading-relaxed">
                  {module.description}
                </p>
                <ul className="space-y-2">
                  {module.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-brand-text text-sm">
                      <svg className="w-5 h-5 text-brand-glow mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Deployments Map */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-main to-brand-deep">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Real-Time Deployment View
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              See how AtlasPro powers spatial intelligence operations across infrastructure projects, 
              monitoring zones, and analytics deployments
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <InteractiveMap />
          </motion.div>

          {/* Map Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <div className="glass rounded-card p-6 text-center">
              <div className="text-brand-glow text-4xl font-bold mb-2">127</div>
              <div className="text-brand-text">Active Monitors</div>
              <div className="text-brand-text/60 text-sm mt-1">Across 5 deployments</div>
            </div>
            <div className="glass rounded-card p-6 text-center">
              <div className="text-brand-accent text-4xl font-bold mb-2">98.7%</div>
              <div className="text-brand-text">Detection Accuracy</div>
              <div className="text-brand-text/60 text-sm mt-1">AI-powered analysis</div>
            </div>
            <div className="glass rounded-card p-6 text-center">
              <div className="text-brand-secondary text-4xl font-bold mb-2">3.2s</div>
              <div className="text-brand-text">Average Query Time</div>
              <div className="text-brand-text/60 text-sm mt-1">Real-time responsiveness</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-main">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to see it in action?
            </h2>
            <p className="text-xl text-brand-text mb-8">
              Schedule a personalized demo with our team
            </p>
            <Link href="/contact" className="btn-primary text-lg">
              Request a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
