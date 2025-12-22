'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote: 'AtlasPro AI has transformed how we monitor our distributed infrastructure. What used to take weeks now happens in real-time.',
    author: 'Sarah Chen',
    role: 'Director of Operations',
    company: 'National Energy Corp',
  },
  {
    quote: 'The spatial intelligence platform gave us the visibility we needed to optimize our disaster response protocols and save critical time.',
    author: 'Michael Torres',
    role: 'Head of Geospatial Analytics',
    company: 'Regional Emergency Services',
  },
]

export default function Testimonials() {
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
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-card-lg p-8 hover:shadow-glow transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="text-5xl text-brand-glow mb-4">"</div>

              {/* Quote */}
              <p className="text-lg text-brand-text mb-6 leading-relaxed italic">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="border-t border-brand-text/20 pt-4">
                <p className="text-white font-heading font-bold">
                  {testimonial.author}
                </p>
                <p className="text-brand-text text-sm">
                  {testimonial.role}
                </p>
                <p className="text-brand-secondary text-sm font-semibold">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
