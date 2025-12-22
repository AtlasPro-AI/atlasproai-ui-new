'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

const values = [
  {
    title: 'Accuracy',
    description: 'Spatial intelligence demands precision. We build systems that deliver reliable, validated insights you can trust for critical decisions.',
    icon: '🎯',
  },
  {
    title: 'Speed',
    description: 'Real-time matters. Our platform processes massive spatial datasets instantly, so you can act when it counts.',
    icon: '⚡',
  },
  {
    title: 'Reliability',
    description: 'Mission-critical operations require 24/7 uptime. We engineer for resilience, redundancy, and operational continuity.',
    icon: '🛡️',
  },
  {
    title: 'Interoperability',
    description: 'Your data should not live in silos. We connect seamlessly with existing systems, tools, and workflows.',
    icon: '🔗',
  },
  {
    title: 'Safety',
    description: 'From infrastructure to emergency response, our technology helps protect people, assets, and communities.',
    icon: '🚨',
  },
  {
    title: 'Innovation',
    description: 'Spatial intelligence is evolving rapidly. We stay at the forefront of AI, geospatial tech, and data science.',
    icon: '🚀',
  },
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-deep via-brand-main to-brand-secondary min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Building the Spatial Intelligence Layer
            </h1>
            <p className="text-xl md:text-2xl text-brand-text max-w-4xl mx-auto leading-relaxed">
              We believe the physical world should be as machine-readable as the digital one.
              AtlasPro AI makes that vision a reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-main">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-2xl text-brand-text leading-relaxed">
              We're building the infrastructure that transforms maps, satellite imagery, LiDAR, 
              and sensor data into real-time operational intelligence—enabling enterprises and 
              governments to operate safer, faster, and smarter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass rounded-card-lg p-12"
          >
            <h3 className="text-3xl font-heading font-bold text-white mb-6">
              The Physical World is Data-Rich but Intelligence-Poor
            </h3>
            <div className="space-y-4 text-lg text-brand-text leading-relaxed">
              <p>
                Every day, satellites capture petabytes of imagery. Sensors generate endless streams 
                of location data. Drones map infrastructure. LiDAR scans capture reality in 3D. 
                Yet most organizations can't make sense of it fast enough to act.
              </p>
              <p>
                AtlasPro AI changes that. We've built the spatial intelligence layer that ingests 
                unstructured geospatial data, fuses it intelligently, and delivers actionable 
                insights in real-time—whether you're monitoring critical infrastructure, responding 
                to disasters, or planning the next generation of sustainable cities.
              </p>
              <p>
                We serve the teams that keep the world running: energy operators, emergency responders, 
                urban planners, environmental stewards, and security professionals. They need more than 
                maps—they need machine intelligence that understands the physical world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              The principles that guide how we build, operate, and serve our customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-card-lg p-8 hover:shadow-glow transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-brand-text leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-main">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Built by Geospatial & AI Experts
            </h2>
            <p className="text-xl text-brand-text leading-relaxed mb-8">
              Our team brings deep expertise from satellite imaging companies, GIS platforms, 
              defense technology, AI research labs, and enterprise SaaS. We've spent our careers 
              at the intersection of spatial data and machine intelligence—and now we're building 
              the platform we always wished existed.
            </p>
            <div className="glass rounded-card-lg p-8 inline-block">
              <p className="text-brand-text italic">
                "We're not just building software. We're building the nervous system for 
                the physical world."
              </p>
              <p className="text-white font-heading font-bold mt-4">
                — AtlasPro AI Founding Team
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-secondary via-brand-main to-brand-deep">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Join us in making the physical world machine-readable
            </h2>
            <p className="text-xl text-brand-text mb-8">
              Whether you're a potential customer, partner, or future team member—let's talk.
            </p>
            <Link href="/contact" className="btn-primary text-lg">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
