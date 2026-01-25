'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { memo, useRef } from 'react'

// Apple-inspired easing curves
const easeOutExpo = [0.16, 1, 0.3, 1]
const easeOutQuint = [0.22, 1, 0.36, 1]

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-main"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep via-brand-main to-brand-main" />
        
        {/* Ambient glow orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(74, 152, 136, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
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
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(127, 255, 235, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(181, 210, 206, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(181, 210, 206, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content with parallax */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
        style={{ y, opacity, scale }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-glow animate-pulse" />
              <span className="text-sm text-brand-text font-medium">Now available for enterprise</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.1 }}
              className="text-6xl md:text-8xl font-heading font-bold mb-6 tracking-tight"
            >
              <span className="block">AtlasPro</span>
              <span className="gradient-text">AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.2 }}
              className="text-2xl md:text-3xl font-heading font-medium mb-6 text-white/90 leading-tight"
            >
              The spatial intelligence layer that makes the physical world{' '}
              <span className="gradient-text">machine-readable</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.3 }}
              className="text-lg text-brand-text/80 mb-10 leading-relaxed max-w-xl"
            >
              Transform maps, satellite imagery, and sensor data into real-time intelligence. 
              Operate safer, faster, and smarter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/contact" className="btn-primary group">
                <span className="relative z-10">Request a Demo</span>
                <motion.span 
                  className="absolute inset-0 rounded-xl bg-white/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
              <Link href="/product" className="btn-secondary group">
                <span>Explore Platform</span>
                <motion.svg 
                  className="w-4 h-4 ml-2 inline-block" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 pt-8 border-t border-white/5"
            >
              <p className="text-sm text-brand-text/50 mb-4">Trusted by industry leaders</p>
              <div className="flex items-center gap-8 justify-center lg:justify-start opacity-40">
                {['Enterprise', 'Government', 'Defense'].map((item, i) => (
                  <motion.span 
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="text-sm font-medium text-white/60"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: easeOutExpo, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <GeospatialVisual />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-brand-text/40 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-brand-text/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Memoize visual component to prevent unnecessary re-renders
const GeospatialVisual = memo(function GeospatialVisual() {
  return (
    <div className="relative w-full h-[500px]">
      {/* Map container with realistic map background */}
      <motion.div
        className="absolute inset-0 rounded-card-lg overflow-hidden border border-brand-text/20"
        style={{
          background: 'linear-gradient(180deg, #0f1f1a 0%, #0d1d1f 100%)',
        }}
      >
        {/* Street grid - realistic city layout */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              {/* Building fill pattern */}
              <pattern id="building-texture" width="4" height="4" patternUnits="userSpaceOnUse">
                <rect width="4" height="4" fill="rgba(181, 210, 206, 0.05)"/>
                <rect width="1" height="1" x="1" y="1" fill="rgba(181, 210, 206, 0.1)"/>
              </pattern>

              {/* Park/green space pattern */}
              <pattern id="park-texture" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="1" fill="rgba(74, 152, 136, 0.15)"/>
              </pattern>
            </defs>

            {/* City blocks - light background */}
            <rect x="0" y="0" width="800" height="600" fill="#0d1815" />

            {/* City Blocks (building areas) */}
            {/* Top-left neighborhood */}
            <rect x="20" y="20" width="140" height="90" fill="url(#building-texture)" stroke="rgba(181, 210, 206, 0.15)" strokeWidth="0.5"/>
            <rect x="170" y="20" width="120" height="90" fill="url(#building-texture)" stroke="rgba(181, 210, 206, 0.15)" strokeWidth="0.5"/>
            <rect x="300" y="20" width="150" height="90" fill="url(#building-texture)" stroke="rgba(181, 210, 206, 0.15)" strokeWidth="0.5"/>
            
            {/* Commercial district (slightly brighter) */}
            <rect x="460" y="20" width="160" height="90" fill="rgba(181, 210, 206, 0.08)" stroke="rgba(181, 210, 206, 0.2)" strokeWidth="0.5"/>
            <rect x="630" y="20" width="150" height="90" fill="rgba(181, 210, 206, 0.08)" stroke="rgba(181, 210, 206, 0.2)" strokeWidth="0.5"/>

            {/* Second row blocks */}
            <rect x="20" y="120" width="140" height="110" fill="url(#building-texture)" stroke="rgba(181, 210, 206, 0.15)" strokeWidth="0.5"/>
            <rect x="170" y="120" width="120" height="110" fill="url(#building-texture)" stroke="rgba(181, 210, 206, 0.15)" strokeWidth="0.5"/>
            
            {/* Park (green space) */}
            <rect x="300" y="120" width="200" height="110" fill="url(#park-texture)" stroke="rgba(74, 152, 136, 0.3)" strokeWidth="1"/>
            <text x="400" y="175" textAnchor="middle" fill="rgba(74, 152, 136, 0.4)" fontSize="10" fontFamily="Arial">Central Park</text>
            
            <rect x="510" y="120" width="140" height="110" fill="url(#building-texture)" stroke="rgba(181, 210, 206, 0.15)" strokeWidth="0.5"/>
            <rect x="660" y="120" width="120" height="110" fill="url(#building-texture)" stroke="rgba(181, 210, 206, 0.15)" strokeWidth="0.5"/>

            {/* Water body - river running through city */}
            <motion.path
              d="M 0 280 Q 200 260, 400 280 Q 600 300, 800 280 L 800 350 Q 600 370, 400 350 Q 200 330, 0 350 Z"
              fill="rgba(127, 255, 235, 0.12)"
              stroke="rgba(127, 255, 235, 0.3)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <text x="400" y="320" textAnchor="middle" fill="rgba(127, 255, 235, 0.5)" fontSize="12" fontFamily="Arial" fontStyle="italic">Atlas River</text>

            {/* Bottom neighborhood blocks */}
            <rect x="20" y="370" width="140" height="100" fill="url(#building-texture)" stroke="rgba(181, 210, 206, 0.15)" strokeWidth="0.5"/>
            <rect x="170" y="370" width="150" height="100" fill="url(#building-texture)" stroke="rgba(181, 210, 206, 0.15)" strokeWidth="0.5"/>
            <rect x="330" y="370" width="130" height="100" fill="url(#building-texture)" stroke="rgba(181, 210, 206, 0.15)" strokeWidth="0.5"/>
            <rect x="470" y="370" width="140" height="100" fill="rgba(181, 210, 206, 0.08)" stroke="rgba(181, 210, 206, 0.2)" strokeWidth="0.5"/>
            <rect x="620" y="370" width="160" height="100" fill="url(#building-texture)" stroke="rgba(181, 210, 206, 0.15)" strokeWidth="0.5"/>

            {/* Bottom industrial area */}
            <rect x="20" y="480" width="760" height="100" fill="rgba(181, 210, 206, 0.05)" stroke="rgba(181, 210, 206, 0.15)" strokeWidth="0.5"/>
            <text x="400" y="530" textAnchor="middle" fill="rgba(181, 210, 206, 0.3)" fontSize="10" fontFamily="Arial">Industrial District</text>

            {/* Streets - Major Highways (yellow/amber like real maps) */}
            <motion.line 
              x1="0" y1="115" x2="800" y2="115" 
              stroke="rgba(242, 197, 114, 0.6)" 
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.line 
              x1="0" y1="235" x2="800" y2="235" 
              stroke="rgba(242, 197, 114, 0.6)" 
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            />
            <motion.line 
              x1="0" y1="365" x2="800" y2="365" 
              stroke="rgba(242, 197, 114, 0.6)" 
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
            />
            <motion.line 
              x1="0" y1="475" x2="800" y2="475" 
              stroke="rgba(242, 197, 114, 0.6)" 
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
            />

            {/* Vertical streets */}
            <motion.line 
              x1="165" y1="0" x2="165" y2="600" 
              stroke="rgba(181, 210, 206, 0.3)" 
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />
            <motion.line 
              x1="295" y1="0" x2="295" y2="600" 
              stroke="rgba(181, 210, 206, 0.3)" 
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.line 
              x1="455" y1="0" x2="455" y2="600" 
              stroke="rgba(181, 210, 206, 0.3)" 
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
            />
            <motion.line 
              x1="625" y1="0" x2="625" y2="600" 
              stroke="rgba(181, 210, 206, 0.3)" 
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
            />

            {/* Street Labels */}
            <text x="400" y="108" textAnchor="middle" fill="rgba(242, 197, 114, 0.5)" fontSize="8" fontFamily="Arial">MAIN STREET</text>
            <text x="400" y="228" textAnchor="middle" fill="rgba(242, 197, 114, 0.5)" fontSize="8" fontFamily="Arial">COMMERCE BLVD</text>
            <text x="400" y="358" textAnchor="middle" fill="rgba(242, 197, 114, 0.5)" fontSize="8" fontFamily="Arial">RIVERSIDE AVE</text>

            {/* Interstate Highway curved overlay */}
            <motion.path
              d="M 0 315 Q 200 295, 400 315 Q 600 335, 800 315"
              fill="none"
              stroke="rgba(127, 255, 235, 0.7)"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
            />
            {/* Highway center line */}
            <motion.path
              d="M 0 315 Q 200 295, 400 315 Q 600 335, 800 315"
              fill="none"
              stroke="rgba(17, 35, 31, 0.8)"
              strokeWidth="1"
              strokeDasharray="15,10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.4, ease: "easeInOut" }}
            />

            {/* Highway shields */}
            <g transform="translate(100, 295)">
              <rect x="-15" y="-12" width="30" height="24" rx="3" fill="rgba(127, 255, 235, 0.9)" stroke="rgba(17, 35, 31, 0.8)" strokeWidth="1.5"/>
              <text x="0" y="4" textAnchor="middle" fill="#0d1815" fontSize="14" fontFamily="Arial" fontWeight="bold">I-5</text>
            </g>
            <g transform="translate(700, 335)">
              <rect x="-15" y="-12" width="30" height="24" rx="3" fill="rgba(127, 255, 235, 0.9)" stroke="rgba(17, 35, 31, 0.8)" strokeWidth="1.5"/>
              <text x="0" y="4" textAnchor="middle" fill="#0d1815" fontSize="14" fontFamily="Arial" fontWeight="bold">I-5</text>
            </g>
          </svg>
        </div>

        {/* Location markers - Points of Interest overlay */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
          <defs>
            <radialGradient id="marker-glow">
              <stop offset="0%" stopColor="rgba(242, 197, 114, 0.9)" />
              <stop offset="100%" stopColor="rgba(242, 197, 114, 0)" />
            </radialGradient>
          </defs>

          {/* AI Camera Markers */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            {/* Marker 1 - Downtown */}
            <motion.g
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
            >
              <circle cx="90" cy="65" r="20" fill="rgba(242, 197, 114, 0.1)" />
              <circle cx="90" cy="65" r="8" fill="rgba(242, 197, 114, 0.9)" stroke="#0d1815" strokeWidth="2" />
              <text x="90" y="52" textAnchor="middle" fill="rgba(242, 197, 114, 0.95)" fontSize="10" fontFamily="Arial" fontWeight="600">CAM-01</text>
            </motion.g>

            {/* Marker 2 - Commercial */}
            <motion.g
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 2, delay: 0.4, repeat: Infinity, repeatDelay: 0.5 }}
            >
              <circle cx="540" cy="75" r="20" fill="rgba(127, 255, 235, 0.1)" />
              <circle cx="540" cy="75" r="8" fill="rgba(127, 255, 235, 0.9)" stroke="#0d1815" strokeWidth="2" />
              <text x="540" y="62" textAnchor="middle" fill="rgba(127, 255, 235, 0.95)" fontSize="10" fontFamily="Arial" fontWeight="600">SEN-12</text>
            </motion.g>

            {/* Marker 3 - Park */}
            <motion.g
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatDelay: 0.5 }}
            >
              <circle cx="400" cy="175" r="20" fill="rgba(74, 152, 136, 0.1)" />
              <circle cx="400" cy="175" r="8" fill="rgba(74, 152, 136, 0.9)" stroke="#0d1815" strokeWidth="2" />
              <text x="400" y="162" textAnchor="middle" fill="rgba(74, 152, 136, 0.95)" fontSize="10" fontFamily="Arial" fontWeight="600">PARK-03</text>
            </motion.g>

            {/* Marker 4 - Industrial */}
            <motion.g
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 2, delay: 1.2, repeat: Infinity, repeatDelay: 0.5 }}
            >
              <circle cx="260" cy="520" r="20" fill="rgba(242, 197, 114, 0.1)" />
              <circle cx="260" cy="520" r="8" fill="rgba(242, 197, 114, 0.9)" stroke="#0d1815" strokeWidth="2" />
              <text x="260" y="507" textAnchor="middle" fill="rgba(242, 197, 114, 0.95)" fontSize="10" fontFamily="Arial" fontWeight="600">CAM-15</text>
            </motion.g>

            {/* Marker 5 - East side */}
            <motion.g
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 2, delay: 1.6, repeat: Infinity, repeatDelay: 0.5 }}
            >
              <circle cx="700" cy="180" r="20" fill="rgba(127, 255, 235, 0.1)" />
              <circle cx="700" cy="180" r="8" fill="rgba(127, 255, 235, 0.9)" stroke="#0d1815" strokeWidth="2" />
              <text x="700" y="167" textAnchor="middle" fill="rgba(127, 255, 235, 0.95)" fontSize="10" fontFamily="Arial" fontWeight="600">HUB-A</text>
            </motion.g>
          </motion.g>
        </svg>

        {/* Sensor network and monitoring points */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 500">
          <defs>
            <radialGradient id="sensor-glow">
              <stop offset="0%" stopColor="rgba(127, 255, 235, 0.8)" />
              <stop offset="100%" stopColor="rgba(127, 255, 235, 0)" />
            </radialGradient>
          </defs>

          {/* Data transmission lines - network mesh */}
          {[
            { x1: 100, y1: 60, x2: 300, y2: 250, delay: 0 },
            { x1: 300, y1: 250, x2: 500, y2: 180, delay: 0.3 },
            { x1: 100, y1: 440, x2: 300, y2: 250, delay: 0.6 },
            { x1: 500, y1: 440, x2: 300, y2: 250, delay: 0.9 },
            { x1: 100, y1: 60, x2: 500, y2: 180, delay: 1.2 },
            { x1: 100, y1: 440, x2: 500, y2: 440, delay: 1.5 },
          ].map((line, i) => (
            <motion.line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="rgba(127, 255, 235, 0.3)"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0, 0.5, 0.5] 
              }}
              transition={{ 
                duration: 1.5, 
                delay: 2 + line.delay 
              }}
            />
          ))}

          {/* Monitoring stations / IoT sensors */}
          {[
            { cx: 100, cy: 60, type: 'camera' as const, label: 'CAM-01' },
            { cx: 500, cy: 180, type: 'sensor' as const, label: 'SEN-12' },
            { cx: 100, cy: 440, type: 'lidar' as const, label: 'LID-08' },
            { cx: 500, cy: 440, type: 'camera' as const, label: 'CAM-15' },
            { cx: 300, cy: 250, type: 'hub' as const, label: 'HUB-A' },
          ].map((station, i) => {
            const colors = {
              camera: '#7FFFEB',
              sensor: '#4A9888',
              lidar: '#F2C572',
              hub: '#B5D2CE',
            }
            
            return (
              <g key={i}>
                {/* Sensor coverage area */}
                <motion.circle
                  cx={station.cx}
                  cy={station.cy}
                  r="30"
                  fill="url(#sensor-glow)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1.2, 1],
                    opacity: [0, 0.3, 0.1]
                  }}
                  transition={{ 
                    duration: 1, 
                    delay: 2.5 + (i * 0.2) 
                  }}
                />
                
                {/* Sensor node */}
                <motion.circle
                  cx={station.cx}
                  cy={station.cy}
                  r={station.type === 'hub' ? '10' : '6'}
                  fill={colors[station.type]}
                  stroke="rgba(17, 35, 31, 0.8)"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 2.5 + (i * 0.2) 
                  }}
                />
                
                {/* Pulsing ring */}
                <motion.circle
                  cx={station.cx}
                  cy={station.cy}
                  r={station.type === 'hub' ? '10' : '6'}
                  fill="none"
                  stroke={colors[station.type]}
                  strokeWidth="2"
                  animate={{ 
                    scale: [1, 2.5, 1],
                    opacity: [0.8, 0, 0.8]
                  }}
                  transition={{ 
                    duration: 2, 
                    delay: 2.5 + (i * 0.2), 
                    repeat: Infinity 
                  }}
                />

                {/* Label */}
                <motion.text
                  x={station.cx}
                  y={station.cy - 20}
                  textAnchor="middle"
                  fill="#B5D2CE"
                  fontSize="8"
                  fontFamily="monospace"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ delay: 3 + (i * 0.2) }}
                >
                  {station.label}
                </motion.text>
              </g>
            )
          })}

          {/* Data packets flowing through network */}
          {[
            { from: [100, 60], to: [300, 250], delay: 3.5, color: '#7FFFEB' },
            { from: [300, 250], to: [500, 180], delay: 4, color: '#7FFFEB' },
            { from: [100, 440], to: [300, 250], delay: 4.5, color: '#4A9888' },
            { from: [500, 440], to: [300, 250], delay: 5, color: '#F2C572' },
          ].map((packet, i) => (
            <motion.circle
              key={i}
              r="4"
              fill={packet.color}
              initial={{ cx: packet.from[0], cy: packet.from[1], opacity: 0 }}
              animate={{
                cx: [packet.from[0], packet.to[0]],
                cy: [packet.from[1], packet.to[1]],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: packet.delay,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>

        {/* Satellite scan sweep effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 opacity-60"
          style={{ 
            background: 'linear-gradient(90deg, transparent 0%, rgba(127, 255, 235, 0.8) 50%, transparent 100%)',
            boxShadow: '0 0 20px rgba(127, 255, 235, 0.8), 0 0 40px rgba(127, 255, 235, 0.4)',
            filter: 'blur(1px)'
          }}
          animate={{ 
            y: [0, 500],
            opacity: [0, 0.6, 0.6, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "linear",
            times: [0, 0.1, 0.9, 1]
          }}
        />

        {/* Real-time status overlay */}
        <div className="absolute top-4 left-4 glass rounded px-3 py-2 text-[10px] flex items-center gap-2">
          <motion.div 
            className="w-2 h-2 bg-brand-glow rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-brand-glow font-mono font-bold">LIVE</span>
          <span className="text-brand-text">•</span>
          <span className="text-brand-text">Real-time Monitoring</span>
        </div>

        {/* Map legend and statistics */}
        <motion.div
          className="absolute top-4 right-4 glass rounded-lg px-4 py-3 text-xs max-w-[180px]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
        >
          <div className="text-white font-bold text-[10px] mb-2">Active Coverage</div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-accent rounded-sm"></div>
                <span className="text-brand-text text-[9px]">Residential</span>
              </div>
              <span className="text-white text-[9px] font-mono">12</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-glow rounded-sm"></div>
                <span className="text-brand-text text-[9px]">Commercial</span>
              </div>
              <span className="text-white text-[9px] font-mono">8</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-text rounded-sm"></div>
                <span className="text-brand-text text-[9px]">Industrial</span>
              </div>
              <span className="text-white text-[9px] font-mono">5</span>
            </div>
            <div className="border-t border-brand-text/20 mt-2 pt-2">
              <div className="flex justify-between">
                <span className="text-brand-text/70 text-[9px]">IoT Sensors:</span>
                <span className="text-brand-glow text-[9px] font-mono font-bold">24</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-4 glass rounded-lg px-4 py-3 text-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3 }}
        >
          <div className="text-brand-text font-bold text-[10px] mb-1">Detection Summary</div>
          <div className="flex items-center gap-4">
            <div>
              <div className="text-brand-glow font-bold text-lg font-mono">127</div>
              <div className="text-brand-text text-[9px]">Objects Tracked</div>
            </div>
            <div className="border-l border-brand-text/20 pl-4">
              <div className="text-brand-accent font-bold text-lg font-mono">3</div>
              <div className="text-brand-text text-[9px]">Anomalies</div>
            </div>
          </div>
        </motion.div>

        {/* Multi-Agent AI System Badge (like reference) */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 glass rounded-full px-6 py-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
        >
          <div className="text-center">
            <div className="text-brand-text text-[9px] mb-1">Powered by our</div>
            <div className="text-white font-heading font-bold text-sm tracking-wide">
              MULTI-AGENT AI SYSTEM
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 right-8 glass rounded-lg px-4 py-3 text-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9 }}
        >
          <div className="text-brand-secondary font-bold">98.7% Accuracy</div>
          <div className="text-brand-text text-[10px]">AI Analysis</div>
        </motion.div>
      </motion.div>
    </div>
  )
})
