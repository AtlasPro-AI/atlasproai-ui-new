'use client'

import { motion } from 'framer-motion'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Circular gradient mark */}
      <motion.div 
        className="relative w-10 h-10"
        whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        {/* Gradient circle */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary via-brand-accent to-brand-glow rounded-full opacity-90"></div>
        
        {/* Stylized "A" mark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path d="M12 2L2 20h4l6-11 6 11h4L12 2z" className="text-white"/>
            <path d="M8 20h8l-2-4H10L8 20z" className="text-white opacity-80"/>
          </svg>
        </div>
        
        {/* Subtle rotating ring on hover */}
        <motion.div 
          className="absolute inset-0 border-2 border-brand-mint rounded-full opacity-0 group-hover:opacity-50"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      
      {/* Text logo */}
      <div className="flex items-baseline">
        <span className="text-2xl font-heading font-bold text-white tracking-tight">
          AtlasPro
        </span>
        <span className="text-2xl font-heading font-light text-brand-glow ml-1">
          AI
        </span>
      </div>
    </div>
  )
}
