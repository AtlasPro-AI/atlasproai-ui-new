'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-secondary/90 via-brand-main to-brand-deep relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-glow rounded-full blur-3xl opacity-25 animate-pulse-glow"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl opacity-25 animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 drop-shadow-lg">
            Ready to make location-based tasks{' '}
            <span className="gradient-text">effortless?</span>
          </h2>

          <p className="text-xl text-brand-text mb-12 leading-relaxed max-w-2xl mx-auto">
            Join the waitlist to get early access to AI agents that understand location.
            Be among the first to experience spatial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">
              Join Waitlist
            </Link>
            <Link href="/product" className="btn-secondary text-lg">
              Learn More
            </Link>
          </div>

          <p className="mt-8 text-brand-text text-sm">
            Early access coming soon
          </p>
        </motion.div>
      </div>
    </section>
  )
}
