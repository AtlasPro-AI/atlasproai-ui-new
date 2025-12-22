'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'

const industries = ['All', 'Marketing', 'Real Estate', 'Business Operations', 'Development', 'E-commerce', 'Investment']

const useCases = [
  {
    title: 'Marketing Campaign Targeting',
    industry: 'Marketing',
    problem: 'Marketing teams waste budget targeting the wrong neighborhoods without demographic and location intelligence.',
    solution: 'AtlasPro AI agents analyze neighborhoods by demographics, income levels, and market trends to identify high-ROI areas for campaigns.',
    outcomes: ['Target 3x more effectively', 'Increase campaign ROI by 40%', 'Reduce wasted ad spend'],
    icon: '📈',
  },
  {
    title: 'Google Fiber Market Expansion',
    industry: 'Marketing',
    problem: 'Telecom marketers need to identify neighborhoods with highest subscription potential for new fiber rollouts.',
    solution: 'AI agents query demographic data, internet usage patterns, and competitor coverage to pinpoint optimal marketing sequences.',
    outcomes: ['Find high-conversion neighborhoods', 'Plan market entry strategy', 'Maximize subscriber acquisition'],
    icon: '�',
  },
  {
    title: 'Project Bidding Intelligence',
    industry: 'Business Operations',
    problem: 'CEOs and project managers spend hours manually researching locations, competitors, and site conditions for project bids.',
    solution: 'AI agents crawl the web, synthesize property data, zoning info, and site conditions—all displayed on an interactive map.',
    outcomes: ['Bid projects 5x faster', 'Make data-driven decisions', 'Win more competitive bids'],
    icon: '💼',
  },
  {
    title: 'First-Time Home Buying',
    industry: 'Real Estate',
    problem: 'Home buyers struggle to identify properties that meet location criteria like flood zones, school districts, or commute times.',
    solution: 'Query AI agents to find homes outside flood maps, near top schools, or within specific commute distances—all mapped instantly.',
    outcomes: ['Find ideal homes faster', 'Avoid risky locations', 'Make confident purchases'],
    icon: '�',
  },
  {
    title: 'Delivery Route Optimization',
    industry: 'E-commerce',
    problem: 'Solo business owners and small delivery services waste time and fuel on inefficient routes.',
    solution: 'AI agents plan optimal multi-stop delivery routes considering traffic, time windows, and road conditions.',
    outcomes: ['Save 30% on fuel costs', 'Complete 20% more deliveries', 'Reduce delivery times'],
    icon: '�',
  },
  {
    title: 'House Flipping Investment',
    industry: 'Investment',
    problem: 'House flippers need to identify undervalued properties in neighborhoods poised for growth.',
    solution: 'AI agents analyze price trends, renovation costs, school ratings, and neighborhood development to recommend investment opportunities.',
    outcomes: ['Identify 10+ opportunities per week', 'Improve investment ROI', 'Reduce due diligence time'],
    icon: '🔨',
  },
  {
    title: 'Real Estate Development Sites',
    industry: 'Development',
    problem: 'Developers spend months researching where to build multi-family units or condos based on demographics and growth.',
    solution: 'Query AI agents for population growth, income trends, zoning regulations, and competitor analysis—visualized on maps.',
    outcomes: ['Find optimal development sites', 'Reduce research time by 80%', 'Make data-backed investments'],
    icon: '🏗️',
  },
  {
    title: 'Infrastructure Data Export',
    industry: 'Business Operations',
    problem: 'Teams need to query utility pole locations, fiber lines, or infrastructure data and export it for GIS analysis.',
    solution: 'Interface with AI agents to fetch data from Google Earth AI, filter by criteria, and export to KML, GeoJSON, or CSV.',
    outcomes: ['Access infrastructure data instantly', 'Export to any format', 'Integrate with existing GIS tools'],
    icon: '📤',
  },
  {
    title: 'Retail Site Selection',
    industry: 'Business Operations',
    problem: 'Retailers struggle to identify optimal locations for new stores based on foot traffic, demographics, and competition.',
    solution: 'AI agents analyze foot traffic patterns, demographic profiles, competitor locations, and accessibility to recommend sites.',
    outcomes: ['Select high-performing locations', 'Reduce site selection time', 'Increase store profitability'],
    icon: '�',
  },
]

export default function UseCasesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All')

  const filteredUseCases = selectedIndustry === 'All' 
    ? useCases 
    : useCases.filter(uc => uc.industry === selectedIndustry)

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-deep via-brand-main to-brand-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Use Cases
            </h1>
            <p className="text-xl md:text-2xl text-brand-text max-w-4xl mx-auto">
              See how professionals use AI agents to solve real location-based challenges
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-brand-deep sticky top-20 z-40 border-b border-brand-text/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-brand-secondary text-white shadow-glow'
                    : 'glass text-brand-text hover:text-white hover:shadow-glow'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-main">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredUseCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass rounded-card-lg overflow-hidden hover:shadow-glow transition-all duration-300 flex flex-col"
              >
                <div className="p-8 flex-1 flex flex-col">
                  {/* Icon and Industry */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-5xl">{useCase.icon}</div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-glow/20 text-brand-glow border border-brand-glow/30">
                      {useCase.industry}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-white mb-4">
                    {useCase.title}
                  </h3>

                  {/* Problem */}
                  <div className="mb-4">
                    <h4 className="text-brand-accent font-semibold text-sm mb-2">Problem</h4>
                    <p className="text-brand-text text-sm leading-relaxed">
                      {useCase.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <h4 className="text-brand-glow font-semibold text-sm mb-2">How AtlasPro Helps</h4>
                    <p className="text-brand-text text-sm leading-relaxed">
                      {useCase.solution}
                    </p>
                  </div>

                  {/* Outcomes */}
                  <div className="mt-auto">
                    <h4 className="text-white font-semibold text-sm mb-2">Measurable Outcomes</h4>
                    <ul className="space-y-1">
                      {useCase.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start text-brand-text text-xs">
                          <svg className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to transform your operations?
            </h2>
            <p className="text-xl text-brand-text mb-8">
              Let's discuss how AtlasPro AI can solve your specific challenges
            </p>
            <a href="/contact" className="btn-primary text-lg">
              Schedule a Consultation
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
