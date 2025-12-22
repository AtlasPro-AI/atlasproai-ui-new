'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const industries = ['All', 'Marketing', 'Real Estate', 'Business Operations', 'Development', 'E-commerce', 'Investment']

// Icon Components
const TrendingUpIcon = () => (
  <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
  </svg>
)

const SignalIcon = () => (
  <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
  </svg>
)

const BriefcaseIcon = () => (
  <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
)

const HomeIcon = () => (
  <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>
)

const TruckIcon = () => (
  <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
  </svg>
)

const HammerIcon = () => (
  <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
  </svg>
)

const BuildingIcon = () => (
  <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
  </svg>
)

const DownloadIcon = () => (
  <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
  </svg>
)

const StoreIcon = () => (
  <svg className="w-10 h-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 3h18v4H3V3zm0 4v14h18V7H3zm6 4h6m-6 4h6"></path>
    <path d="M21 3L21 21M3 3L3 21"></path>
  </svg>
)

const useCases = [
  {
    title: 'Marketing Campaign Targeting',
    industry: 'Marketing',
    problem: 'Marketing teams waste budget targeting the wrong neighborhoods without demographic and location intelligence.',
    solution: 'AtlasPro AI agents analyze neighborhoods by demographics, income levels, and market trends to identify high-ROI areas for campaigns.',
    outcomes: ['Target 3x more effectively', 'Increase campaign ROI by 40%', 'Reduce wasted ad spend'],
    icon: TrendingUpIcon,
    gradient: 'from-brand-secondary to-brand-glow',
  },
  {
    title: 'Google Fiber Market Expansion',
    industry: 'Marketing',
    problem: 'Telecom marketers need to identify neighborhoods with highest subscription potential for new fiber rollouts.',
    solution: 'AI agents query demographic data, internet usage patterns, and competitor coverage to pinpoint optimal marketing sequences.',
    outcomes: ['Find high-conversion neighborhoods', 'Plan market entry strategy', 'Maximize subscriber acquisition'],
    icon: SignalIcon,
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Project Bidding Intelligence',
    industry: 'Business Operations',
    problem: 'CEOs and project managers spend hours manually researching locations, competitors, and site conditions for project bids.',
    solution: 'AI agents crawl the web, synthesize property data, zoning info, and site conditions—all displayed on an interactive map.',
    outcomes: ['Bid projects 5x faster', 'Make data-driven decisions', 'Win more competitive bids'],
    icon: BriefcaseIcon,
    gradient: 'from-brand-accent to-orange-400',
  },
  {
    title: 'First-Time Home Buying',
    industry: 'Real Estate',
    problem: 'Home buyers struggle to identify properties that meet location criteria like flood zones, school districts, or commute times.',
    solution: 'Query AI agents to find homes outside flood maps, near top schools, or within specific commute distances—all mapped instantly.',
    outcomes: ['Find ideal homes faster', 'Avoid risky locations', 'Make confident purchases'],
    icon: HomeIcon,
    gradient: 'from-blue-400 to-brand-glow',
  },
  {
    title: 'Delivery Route Optimization',
    industry: 'E-commerce',
    problem: 'Solo business owners and small delivery services waste time and fuel on inefficient routes.',
    solution: 'AI agents plan optimal multi-stop delivery routes considering traffic, time windows, and road conditions.',
    outcomes: ['Save 30% on fuel costs', 'Complete 20% more deliveries', 'Reduce delivery times'],
    icon: TruckIcon,
    gradient: 'from-green-400 to-brand-secondary',
  },
  {
    title: 'House Flipping Investment',
    industry: 'Investment',
    problem: 'House flippers need to identify undervalued properties in neighborhoods poised for growth.',
    solution: 'AI agents analyze price trends, renovation costs, school ratings, and neighborhood development to recommend investment opportunities.',
    outcomes: ['Identify 10+ opportunities per week', 'Improve investment ROI', 'Reduce due diligence time'],
    icon: HammerIcon,
    gradient: 'from-brand-glow to-cyan-400',
  },
  {
    title: 'Real Estate Development Sites',
    industry: 'Development',
    problem: 'Developers spend months researching where to build multi-family units or condos based on demographics and growth.',
    solution: 'Query AI agents for population growth, income trends, zoning regulations, and competitor analysis—visualized on maps.',
    outcomes: ['Find optimal development sites', 'Reduce research time by 80%', 'Make data-backed investments'],
    icon: BuildingIcon,
    gradient: 'from-orange-400 to-brand-accent',
  },
  {
    title: 'Infrastructure Data Export',
    industry: 'Business Operations',
    problem: 'Teams need to query utility pole locations, fiber lines, or infrastructure data and export it for GIS analysis.',
    solution: 'Interface with AI agents to fetch data from Google Earth AI, filter by criteria, and export to KML, GeoJSON, or CSV.',
    outcomes: ['Access infrastructure data instantly', 'Export to any format', 'Integrate with existing GIS tools'],
    icon: DownloadIcon,
    gradient: 'from-purple-400 to-brand-secondary',
  },
  {
    title: 'Retail Site Selection',
    industry: 'Business Operations',
    problem: 'Retailers struggle to identify optimal locations for new stores based on foot traffic, demographics, and competition.',
    solution: 'AI agents analyze foot traffic patterns, demographic profiles, competitor locations, and accessibility to recommend sites.',
    outcomes: ['Select high-performing locations', 'Reduce site selection time', 'Increase store profitability'],
    icon: StoreIcon,
    gradient: 'from-pink-400 to-brand-accent',
  },
]

export default function UseCasesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All')

  const filteredUseCases = selectedIndustry === 'All' 
    ? useCases 
    : useCases.filter(uc => uc.industry === selectedIndustry)

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-deep via-brand-main to-brand-secondary relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-glow rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-heading font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Use Cases
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-brand-text max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              See how professionals use AI agents to solve real location-based challenges
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="py-8 px-4 sm:px-6 lg:px-8 glass sticky top-20 z-40 border-b border-brand-text/10 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry, index) => (
              <motion.button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-500 relative overflow-hidden ${
                  selectedIndustry === industry
                    ? 'bg-gradient-to-r from-brand-secondary to-brand-glow text-white shadow-glow'
                    : 'glass text-brand-text hover:text-white'
                }`}
              >
                {selectedIndustry === industry && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-glow rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{industry}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Use Cases Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-main min-h-screen">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndustry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredUseCases.map((useCase, index) => (
                <UseCaseCard key={useCase.title} useCase={useCase} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function UseCaseCard({ useCase, index }: { useCase: typeof useCases[0]; index: number }) {
  const Icon = useCase.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-brand-glow/20 transition-all duration-500 flex flex-col group"
    >
      {/* Gradient header */}
      <div className={`h-2 bg-gradient-to-r ${useCase.gradient} relative overflow-hidden`}>
        <motion.div
          className="absolute inset-0 bg-white/30"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <div className="p-8 flex-1 flex flex-col relative">
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-glow/0 to-brand-secondary/0 group-hover:from-brand-glow/5 group-hover:to-brand-secondary/5 transition-all duration-700 rounded-2xl pointer-events-none"></div>

        {/* Icon and Industry */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <motion.div 
            className="text-brand-glow"
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon />
          </motion.div>
          <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-brand-glow/20 text-brand-glow border border-brand-glow/30 backdrop-blur-sm">
            {useCase.industry}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-brand-glow transition-colors duration-300 relative z-10">
          {useCase.title}
        </h3>

        {/* Problem */}
        <div className="mb-4 relative z-10">
          <h4 className="text-brand-accent font-semibold text-sm mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Problem
          </h4>
          <p className="text-brand-text text-sm leading-relaxed">
            {useCase.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-6 relative z-10">
          <h4 className="text-brand-glow font-semibold text-sm mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            How AtlasPro Helps
          </h4>
          <p className="text-brand-text text-sm leading-relaxed">
            {useCase.solution}
          </p>
        </div>

        {/* Outcomes */}
        <div className="mt-auto relative z-10">
          <h4 className="text-white font-semibold text-sm mb-3 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
            Measurable Outcomes
          </h4>
          <ul className="space-y-2">
            {useCase.outcomes.map((outcome, i) => (
              <motion.li 
                key={i} 
                className="flex items-start text-brand-text text-xs"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + i * 0.1 }}
              >
                <svg className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                {outcome}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
