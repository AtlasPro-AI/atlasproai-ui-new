'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getAllWhitepapers, getFeaturedWhitepapers, whitepaperCategories } from '@/data/whitepapers'
import { useState } from 'react'

export default function WhitepapersPage() {
  const allWhitepapers = getAllWhitepapers()
  const featuredWhitepapers = getFeaturedWhitepapers()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const [selectedWhitepaper, setSelectedWhitepaper] = useState<string>('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: ''
  })

  const filteredWhitepapers = selectedCategory
    ? allWhitepapers.filter(wp => wp.category === selectedCategory)
    : allWhitepapers

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    })
  }

  const handleDownload = (slug: string) => {
    setSelectedWhitepaper(slug)
    setShowDownloadModal(true)
  }

  const handleSubmitDownload = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder - would send to backend/CRM
    alert(`Thank you! Your whitepaper download will begin shortly.`)
    setShowDownloadModal(false)
    setFormData({ name: '', email: '', company: '', role: '' })
  }

  return (
    <main className="bg-brand-main">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-deep via-brand-main to-brand-secondary/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="docs" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <rect x="5" y="5" width="40" height="50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-glow"/>
                <line x1="10" y1="15" x2="40" y2="15" stroke="currentColor" strokeWidth="0.5" className="text-brand-glow"/>
                <line x1="10" y1="25" x2="35" y2="25" stroke="currentColor" strokeWidth="0.5" className="text-brand-glow"/>
                <line x1="10" y1="35" x2="38" y2="35" stroke="currentColor" strokeWidth="0.5" className="text-brand-glow"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#docs)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
              Whitepapers
            </h1>
            <p className="text-xl md:text-2xl text-brand-text max-w-4xl mx-auto leading-relaxed mb-8">
              In-depth technical guides, ROI analyses, and best practices for spatial intelligence 
              deployment across infrastructure operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-brand-main/95 backdrop-blur-lg border-y border-brand-text/10 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-5 py-2.5 rounded-full transition-all duration-200 text-sm font-medium ${
                selectedCategory === null
                  ? 'bg-brand-secondary text-white shadow-glow'
                  : 'bg-brand-deep/50 text-brand-text hover:bg-brand-secondary/30 border border-brand-text/10'
              }`}
            >
              All Whitepapers
            </button>
            {whitepaperCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full transition-all duration-200 text-sm font-medium ${
                  selectedCategory === category.id
                    ? 'bg-brand-secondary text-white shadow-glow'
                    : 'bg-brand-deep/50 text-brand-text hover:bg-brand-secondary/30 border border-brand-text/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Whitepapers */}
      {featuredWhitepapers.length > 0 && !selectedCategory && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-main to-brand-deep">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-2 text-white">Featured</h2>
            <p className="text-brand-text mb-8">Essential reading for infrastructure operators</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredWhitepapers.map((wp, index) => (
                <motion.div
                  key={wp.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="glass rounded-3xl overflow-hidden border border-brand-text/10 h-full flex flex-col">
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs px-4 py-1.5 bg-brand-secondary/30 text-brand-glow rounded-full border border-brand-accent/30 font-medium">
                          {whitepaperCategories.find(c => c.id === wp.category)?.name}
                        </span>
                        <span className="text-brand-text text-sm">{wp.pages} pages</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-white leading-tight">
                        {wp.title}
                      </h3>
                      <p className="text-lg text-brand-glow mb-4">{wp.subtitle}</p>
                      <p className="text-brand-text leading-relaxed mb-6 flex-grow">
                        {wp.summary}
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="text-white font-semibold text-sm">Key Findings:</div>
                        <ul className="space-y-2">
                          {wp.keyFindings.slice(0, 3).map((finding, idx) => (
                            <li key={idx} className="flex gap-2 text-sm text-brand-text">
                              <svg className="w-5 h-5 text-brand-glow flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span>{finding}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleDownload(wp.slug)}
                          className="flex-1 px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/80 text-white rounded-xl font-semibold transition-all hover:shadow-glow"
                        >
                          Download PDF
                        </button>
                        <Link 
                          href={`/whitepapers/${wp.slug}`}
                          className="px-6 py-3 bg-transparent border-2 border-brand-glow/50 text-brand-glow hover:bg-brand-glow/10 rounded-xl font-semibold transition-all text-center"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Whitepapers Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-deep to-brand-main">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-white mb-2">
              {selectedCategory 
                ? whitepaperCategories.find(c => c.id === selectedCategory)?.name 
                : 'All Whitepapers'}
            </h2>
            <p className="text-brand-text">
              {filteredWhitepapers.length} {filteredWhitepapers.length === 1 ? 'whitepaper' : 'whitepapers'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWhitepapers.map((wp, index) => (
              <motion.div
                key={wp.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="glass rounded-2xl p-6 h-full flex flex-col border border-brand-text/10 hover:shadow-glow-strong transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs px-3 py-1 bg-brand-secondary/20 text-brand-mint rounded-full border border-brand-accent/20">
                      {whitepaperCategories.find(c => c.id === wp.category)?.name}
                    </span>
                    <span className="text-brand-text text-xs">{wp.pages}p • {wp.readTime}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-white leading-tight">
                    {wp.title}
                  </h3>
                  <p className="text-sm text-brand-glow mb-3">{wp.subtitle}</p>
                  <p className="text-brand-text leading-relaxed mb-6 flex-grow text-sm line-clamp-3">
                    {wp.summary}
                  </p>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleDownload(wp.slug)}
                      className="w-full px-4 py-2.5 bg-brand-secondary hover:bg-brand-secondary/80 text-white rounded-lg font-semibold transition-all text-sm"
                    >
                      Download PDF
                    </button>
                    <Link 
                      href={`/whitepapers/${wp.slug}`}
                      className="w-full px-4 py-2.5 bg-transparent border border-brand-glow/50 text-brand-glow hover:bg-brand-glow/10 rounded-lg font-semibold transition-all text-center text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-secondary/90 via-brand-main to-brand-deep">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-brand-text mb-8 max-w-2xl mx-auto">
              Talk to our team about tailored spatial intelligence solutions for your infrastructure operations.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-brand-secondary hover:bg-brand-secondary/80 text-white rounded-xl font-semibold transition-all hover:shadow-glow text-lg inline-block">
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-3xl p-8 max-w-md w-full border border-brand-text/10"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Download Whitepaper
            </h3>
            <p className="text-brand-text mb-6">
              Fill out the form below to receive your free whitepaper.
            </p>
            <form onSubmit={handleSubmitDownload} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-brand-deep/50 border border-brand-text/20 rounded-xl text-white placeholder-brand-text/50 focus:outline-none focus:border-brand-glow/50"
              />
              <input
                type="email"
                placeholder="Work Email *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-brand-deep/50 border border-brand-text/20 rounded-xl text-white placeholder-brand-text/50 focus:outline-none focus:border-brand-glow/50"
              />
              <input
                type="text"
                placeholder="Company Name *"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-brand-deep/50 border border-brand-text/20 rounded-xl text-white placeholder-brand-text/50 focus:outline-none focus:border-brand-glow/50"
              />
              <input
                type="text"
                placeholder="Job Title *"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-3 bg-brand-deep/50 border border-brand-text/20 rounded-xl text-white placeholder-brand-text/50 focus:outline-none focus:border-brand-glow/50"
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/80 text-white rounded-xl font-semibold transition-all"
                >
                  Download
                </button>
                <button
                  type="button"
                  onClick={() => setShowDownloadModal(false)}
                  className="px-6 py-3 bg-transparent border border-brand-text/20 text-brand-text hover:bg-brand-text/10 rounded-xl font-semibold transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
            <p className="text-xs text-brand-text/60 mt-4">
              We respect your privacy. Your information will only be used to send you relevant content.
            </p>
          </motion.div>
        </div>
      )}

      <Footer />
    </main>
  )
}
