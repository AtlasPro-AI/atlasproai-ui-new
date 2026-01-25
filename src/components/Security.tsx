'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// Apple-style easing
const appleEase = [0.16, 1, 0.3, 1] as const

// Custom SVG icons with gradients
const ShieldIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4L6 10V18C6 27.5 12 34.5 20 36C28 34.5 34 27.5 34 18V10L20 4Z" stroke="url(#shield)" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M14 20L18 24L26 16" stroke="url(#shield)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="shield" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00D4FF"/>
        <stop offset="1" stopColor="#7B2BFF"/>
      </linearGradient>
    </defs>
  </svg>
)

const AuditIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="4" width="24" height="32" rx="2" stroke="url(#audit)" strokeWidth="2"/>
    <path d="M14 12H26M14 18H26M14 24H22" stroke="url(#audit)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="28" cy="28" r="6" stroke="url(#audit)" strokeWidth="2"/>
    <path d="M32 32L36 36" stroke="url(#audit)" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="audit" x1="8" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A855F7"/>
        <stop offset="1" stopColor="#EC4899"/>
      </linearGradient>
    </defs>
  </svg>
)

const LockIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="18" width="20" height="16" rx="2" stroke="url(#lock)" strokeWidth="2"/>
    <path d="M14 18V12C14 8.686 16.686 6 20 6C23.314 6 26 8.686 26 12V18" stroke="url(#lock)" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="26" r="2" fill="url(#lock)"/>
    <path d="M20 28V30" stroke="url(#lock)" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="lock" x1="10" y1="6" x2="30" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFD4"/>
        <stop offset="1" stopColor="#00D4FF"/>
      </linearGradient>
    </defs>
  </svg>
)

const CloudIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 26H32C35.314 26 38 23.314 38 20C38 16.686 35.314 14 32 14C31.716 14 31.436 14.018 31.162 14.054C30.436 10.106 26.976 7.12 22.848 7.12C18.056 7.12 14.15 11.026 14.15 15.818C14.15 16.096 14.162 16.372 14.184 16.644C11.226 17.062 8.954 19.602 8.954 22.682C8.954 26.048 11.706 28.8 15.072 28.8" stroke="url(#cloud)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 22V34M16 30L20 34L24 30" stroke="url(#cloud)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="cloud" x1="9" y1="7" x2="38" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366F1"/>
        <stop offset="1" stopColor="#8B5CF6"/>
      </linearGradient>
    </defs>
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="14" stroke="url(#globe)" strokeWidth="2"/>
    <ellipse cx="20" cy="20" rx="6" ry="14" stroke="url(#globe)" strokeWidth="2"/>
    <path d="M6 20H34" stroke="url(#globe)" strokeWidth="2"/>
    <path d="M10 12H30M10 28H30" stroke="url(#globe)" strokeWidth="2" strokeLinecap="round"/>
    <defs>
      <linearGradient id="globe" x1="6" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10B981"/>
        <stop offset="1" stopColor="#3B82F6"/>
      </linearGradient>
    </defs>
  </svg>
)

const CheckIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="14" stroke="url(#check)" strokeWidth="2"/>
    <path d="M14 20L18 24L26 16" stroke="url(#check)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="check" x1="6" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B"/>
        <stop offset="1" stopColor="#EF4444"/>
      </linearGradient>
    </defs>
  </svg>
)

const securityFeatures = [
  {
    title: 'Role-Based Access Control',
    description: 'Granular permissions ensure users only see what they need',
    icon: ShieldIcon,
    gradient: 'from-cyan-500 to-purple-500',
  },
  {
    title: 'Comprehensive Audit Logs',
    description: 'Track every action for compliance and accountability',
    icon: AuditIcon,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'End-to-End Encryption',
    description: 'Data encrypted at rest and in transit with industry standards',
    icon: LockIcon,
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    title: 'Flexible Deployment',
    description: 'Cloud, on-premises, or hybrid to meet your requirements',
    icon: CloudIcon,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Data Residency',
    description: 'Control where your data is stored and processed',
    icon: GlobeIcon,
    gradient: 'from-emerald-500 to-blue-500',
  },
  {
    title: 'SOC 2 Compliant',
    description: 'Independently verified security and privacy controls',
    icon: CheckIcon,
    gradient: 'from-amber-500 to-red-500',
  },
]

const certifications = [
  { name: 'SOC 2 Type II', description: 'Security & Privacy' },
  { name: 'ISO 27001', description: 'Information Security' },
  { name: 'GDPR', description: 'Data Protection' },
  { name: 'FedRAMP', description: 'Government Ready' },
]

export default function Security() {
  const ref = useRef(null)
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section ref={containerRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-deep via-brand-main to-brand-deep relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Shield pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L10 15v10c0 12.5 8.5 22.5 20 25 11.5-2.5 20-12.5 20-25V15L30 5z' stroke='%23ffffff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
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
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm mb-8"
          >
            <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-brand-text">Enterprise Security</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: appleEase }}
          >
            <span className="text-white">Security & </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">
              Governance
            </span>
            <br />
            <span className="text-white/80 text-3xl md:text-4xl lg:text-5xl">by Design</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-brand-text max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: appleEase }}
          >
            Enterprise-grade security and compliance built into every layer
          </motion.p>
        </motion.div>

        {/* Security features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.1,
                ease: appleEase 
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group"
            >
              <motion.div 
                className={`
                  relative overflow-hidden rounded-2xl p-6
                  bg-gradient-to-br from-white/[0.06] to-white/[0.02]
                  backdrop-blur-xl border border-white/[0.08]
                  transition-all duration-500
                  ${hoveredCard === index ? 'shadow-xl' : ''}
                `}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.4, ease: appleEase }}
              >
                {/* Gradient line */}
                <motion.div 
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${feature.gradient}`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: appleEase }}
                />
                
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon />
                  </motion.div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-brand-text text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover glow */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: appleEase }}
          className="mt-20"
        >
          <p className="text-center text-brand-text mb-10 text-lg">
            Trusted by government agencies and Fortune 500 enterprises
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1, ease: appleEase }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group"
              >
                <div className="relative px-8 py-5 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] backdrop-blur-sm hover:border-white/[0.15] transition-all duration-300">
                  <div className="text-center">
                    <div className="text-white font-semibold mb-1">{cert.name}</div>
                    <div className="text-xs text-brand-text group-hover:text-white/60 transition-colors duration-300">{cert.description}</div>
                  </div>
                  
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-emerald-500/5 group-hover:via-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
