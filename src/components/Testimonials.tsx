'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// Apple-style easing
const appleEase = [0.16, 1, 0.3, 1] as const

const testimonials = [
  {
    quote: 'AtlasPro AI has transformed how we monitor our distributed infrastructure. What used to take weeks now happens in real-time.',
    author: 'Sarah Chen',
    role: 'Director of Operations',
    company: 'National Energy Corp',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    quote: 'The spatial intelligence platform gave us the visibility we needed to optimize our disaster response protocols and save critical time.',
    author: 'Michael Torres',
    role: 'Head of Geospatial Analytics',
    company: 'Regional Emergency Services',
    gradient: 'from-purple-500 to-pink-500',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-main via-brand-deep to-brand-main relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Large quote marks in background */}
        <motion.div 
          className="absolute top-20 left-10 text-[300px] font-serif text-white/[0.02] leading-none select-none"
          animate={{ opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          "
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-10 text-[300px] font-serif text-white/[0.02] leading-none rotate-180 select-none"
          animate={{ opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          "
        </motion.div>
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-brand-accent/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-gradient-to-br from-brand-secondary/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: appleEase }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: appleEase }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm mb-8"
          >
            <div className="flex -space-x-1">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <div className="w-2 h-2 rounded-full bg-purple-400" />
            </div>
            <span className="text-sm text-brand-text">Trusted Worldwide</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: appleEase }}
          >
            <span className="text-white">Trusted by </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-glow">
              Industry Leaders
            </span>
          </motion.h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.4 + index * 0.15, 
                ease: appleEase 
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group"
            >
              <motion.div 
                className={`
                  relative overflow-hidden rounded-3xl p-8 lg:p-10 h-full
                  bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                  backdrop-blur-xl border border-white/[0.08]
                  transition-all duration-700
                  ${hoveredCard === index ? 'shadow-2xl' : ''}
                `}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.5, ease: appleEase }}
              >
                {/* Gradient top bar */}
                <motion.div 
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${testimonial.gradient}`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.15, ease: appleEase }}
                />
                
                {/* Quote icon with gradient */}
                <motion.div 
                  className={`text-7xl font-serif mb-6 bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent leading-none`}
                  animate={hoveredCard === index ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  "
                </motion.div>

                {/* Quote text */}
                <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed font-light">
                  {testimonial.quote}
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08]">
                  {/* Avatar placeholder with gradient */}
                  <motion.div 
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </motion.div>
                  
                  <div>
                    <p className="text-white font-heading font-bold text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-brand-text text-sm">
                      {testimonial.role}
                    </p>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                
                {/* Hover gradient overlay */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
                />
                
                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: appleEase }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['Energy', 'Government', 'Telecom', 'Defense', 'Real Estate'].map((industry, i) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                className="text-brand-text/50 text-sm font-medium hover:text-brand-text transition-colors duration-300"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
