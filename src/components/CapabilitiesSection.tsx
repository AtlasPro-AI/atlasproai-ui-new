'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Icon Components
const BlueprintIcon = () => (
  <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
  </svg>
)

const NetworkIcon = () => (
  <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
  </svg>
)

const EyeIcon = () => (
  <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
  </svg>
)

const SatelliteIcon = () => (
  <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
)

const MCPIcon = () => (
  <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
  </svg>
)

const capabilities = [
  {
    title: 'High-Impact Blueprint & Simulation Generation',
    description: 'Generate engineering-grade outputs in KML/KMZ/GeoJSON/SHP formats with full topology validation. Create accurate spatial designs for infrastructure deployment.',
    features: ['Topology validation', 'Multi-format export', 'Engineering precision', 'Compliance-ready'],
    icon: BlueprintIcon,
    color: 'from-brand-secondary to-brand-accent',
  },
  {
    title: 'GNN Model Trained on 10M+ Assets',
    description: 'Graph Neural Network model analyzes network redundancy, cost modeling, and compliance checks across massive spatial datasets.',
    features: ['Redundancy analysis', 'Cost optimization', 'Risk assessment', 'Network topology'],
    icon: NetworkIcon,
    color: 'from-brand-accent to-brand-mint',
  },
  {
    title: 'Real-Time Event Detection',
    description: 'Process CCTV, LiDAR, and sensor feeds in real-time. Track labor productivity, inventory, safety incidents, and anomalies mapped to specific parcels and assets.',
    features: ['Live monitoring', 'Safety alerts', 'Productivity tracking', 'Asset mapping'],
    icon: EyeIcon,
    color: 'from-brand-glow to-brand-secondary',
  },
  {
    title: 'Satellite Change Detection for Compliance',
    description: 'Sub-meter accuracy satellite analysis for BEAD compliance, DoD monitoring, and environmental reporting. Automated change detection with partnership integrations.',
    features: ['Sub-meter accuracy', 'BEAD compliance', 'Change tracking', 'Automated reporting'],
    icon: SatelliteIcon,
    color: 'from-brand-secondary to-brand-glow',
  },
  {
    title: 'MCP Enabling Other AI Agents',
    description: 'Model Context Protocol integration lets Claude, ChatGPT, and custom agents control spatial operations via natural language. Seamless ERP integration.',
    features: ['Natural language control', 'Claude/ChatGPT integration', 'ERP connectivity', 'API-first design'],
    icon: MCPIcon,
    color: 'from-brand-mint to-brand-accent',
  },
]

export default function CapabilitiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-main relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ y: 100 }}
        animate={isInView ? { y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-glow rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl"></div>
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
            A Unified <span className="gradient-text">Spatial Intelligence OS</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-brand-text max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            AI agents + multi-modal data fusion engine processing vector maps, satellite imagery, 
            sensors, and live video into instant insights, simulations, and automation
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.slice(0, 3).map((capability, index) => (
            <CapabilityCard key={index} capability={capability} index={index} isInView={isInView} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {capabilities.slice(3).map((capability, index) => (
            <CapabilityCard key={index + 3} capability={capability} index={index + 3} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CapabilityCard({ capability, index, isInView }: { capability: typeof capabilities[0]; index: number; isInView: boolean }) {
  const Icon = capability.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="glass rounded-card-lg p-8 hover:shadow-glow-strong transition-all duration-500 group cursor-pointer relative overflow-hidden"
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Gradient top accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.color}`}></div>
      
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-glow/0 to-brand-secondary/0 group-hover:from-brand-glow/10 group-hover:to-brand-accent/10 transition-all duration-500 rounded-card-lg"></div>
      
      <div className="relative z-10">
        <motion.div 
          className="text-brand-glow mb-6"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon />
        </motion.div>
        
        <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-brand-mint transition-colors duration-300">
          {capability.title}
        </h3>
        
        <p className="text-brand-text leading-relaxed mb-4">
          {capability.description}
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-2">
          {capability.features.map((feature, idx) => (
            <span 
              key={idx}
              className="text-xs px-3 py-1 bg-brand-secondary/20 text-brand-mint rounded-full border border-brand-accent/30"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
