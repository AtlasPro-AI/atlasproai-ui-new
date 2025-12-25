'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getAllPosts, getFeaturedPost, getAllTags } from '@/data/blogPosts'
import { useState } from 'react'

export default function ResearchPage() {
  const allPosts = getAllPosts()
  const featuredPost = getFeaturedPost()
  const allTags = getAllTags()
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')

  // Filter posts by tag and search query
  const filteredPosts = allPosts.filter(post => {
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true
    const matchesSearch = searchQuery
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      : true
    return matchesTag && matchesSearch
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder - no actual functionality
    alert('Newsletter subscription coming soon!')
    setEmail('')
  }

  const filterCategories = [
    'Spatial Intelligence',
    'GNN + Networks',
    'Change Detection',
    'Visual AI',
    'MCP + Agents',
    'Telecom/Utilities',
    'Compliance/Government',
    'Simulations',
    'Product'
  ]

  return (
    <main className="bg-brand-main">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-deep via-brand-main to-brand-secondary/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="topo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10 Q 30 30, 50 10 T 90 10" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-glow"/>
                <path d="M10 30 Q 30 50, 50 30 T 90 30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-glow"/>
                <path d="M10 50 Q 30 70, 50 50 T 90 50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-glow"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo)" />
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
              Research
            </h1>
            <p className="text-xl md:text-2xl text-brand-text max-w-4xl mx-auto leading-relaxed mb-8">
              Notes, methods, and field learnings on spatial intelligence, multimodal fusion, 
              and agent-driven geospatial operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#topics" 
                className="btn-secondary text-lg"
              >
                Browse Topics
              </a>
              <a 
                href="#newsletter" 
                className="btn-outline text-lg"
              >
                Subscribe
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search + Filter Section */}
      <section id="topics" className="py-8 px-4 sm:px-6 lg:px-8 bg-brand-main/95 backdrop-blur-lg border-y border-brand-text/10 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search papers, posts, and experiments…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 bg-brand-deep/50 border border-brand-text/20 rounded-2xl text-white placeholder-brand-text/50 focus:outline-none focus:border-brand-glow/50 focus:shadow-glow transition-all"
              />
              <svg 
                className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-brand-text/50"
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </motion.div>

          {/* Filter Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                selectedTag === null
                  ? 'bg-brand-secondary text-white shadow-glow'
                  : 'bg-brand-deep/50 text-brand-text hover:bg-brand-secondary/30 border border-brand-text/10'
              }`}
            >
              All Topics
            </button>
            {filterCategories.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                  selectedTag === tag
                    ? 'bg-brand-secondary text-white shadow-glow'
                    : 'bg-brand-deep/50 text-brand-text hover:bg-brand-secondary/30 border border-brand-text/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPost && !searchQuery && !selectedTag && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-main to-brand-deep">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold mb-2 text-white">Featured</h2>
              <p className="text-brand-text mb-8">Deep dives into our latest research and product developments</p>
              
              <Link href={`/research/${featuredPost.slug}`}>
                <motion.div
                  className="glass rounded-3xl overflow-hidden group cursor-pointer relative"
                  whileHover={{ y: -8, scale: 1.005 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Abstract Illustration Background */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#7FFFEB', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#4A9888', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      {/* Topographic contours */}
                      <path d="M50 50 Q100 100, 200 50 T400 50" stroke="url(#grad1)" strokeWidth="2" fill="none" opacity="0.5"/>
                      <path d="M50 100 Q100 150, 200 100 T400 100" stroke="url(#grad1)" strokeWidth="2" fill="none" opacity="0.4"/>
                      <path d="M50 150 Q100 200, 200 150 T400 150" stroke="url(#grad1)" strokeWidth="2" fill="none" opacity="0.3"/>
                      {/* Node graph overlay */}
                      <circle cx="100" cy="80" r="4" fill="#7FFFEB" opacity="0.8"/>
                      <circle cx="200" cy="120" r="4" fill="#7FFFEB" opacity="0.8"/>
                      <circle cx="300" cy="90" r="4" fill="#7FFFEB" opacity="0.8"/>
                      <line x1="100" y1="80" x2="200" y2="120" stroke="#7FFFEB" strokeWidth="1" opacity="0.5"/>
                      <line x1="200" y1="120" x2="300" y2="90" stroke="#7FFFEB" strokeWidth="1" opacity="0.5"/>
                    </svg>
                  </div>

                  <div className="p-8 md:p-12 relative z-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-4 py-1.5 bg-brand-secondary/30 text-brand-glow rounded-full border border-brand-accent/30 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white group-hover:text-brand-glow transition-colors leading-tight">
                      {featuredPost.title}
                    </h3>
                    <div className="flex items-center gap-4 text-brand-text text-sm mb-6">
                      <span>{formatDate(featuredPost.date)}</span>
                      <span>•</span>
                      <span>{featuredPost.author}</span>
                      {featuredPost.readTime && (
                        <>
                          <span>•</span>
                          <span>{featuredPost.readTime} read</span>
                        </>
                      )}
                    </div>
                    <p className="text-lg md:text-xl text-brand-text leading-relaxed mb-8 max-w-4xl">
                      {featuredPost.summary}
                    </p>
                    <div className="inline-flex items-center text-brand-glow font-semibold text-lg group-hover:gap-3 gap-2 transition-all">
                      Read Full Article
                      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-deep to-brand-main">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-white mb-2">
              {selectedTag ? `${selectedTag}` : searchQuery ? 'Search Results' : 'All Research'}
            </h2>
            <p className="text-brand-text">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/research/${post.slug}`}>
                  <motion.div
                    className="glass rounded-2xl p-6 h-full flex flex-col hover:shadow-glow-strong transition-all duration-300 group cursor-pointer border border-brand-text/10"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-3 py-1 bg-brand-secondary/20 text-brand-mint rounded-full border border-brand-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-brand-glow transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 text-brand-text text-xs mb-4">
                      <span>{formatDate(post.date)}</span>
                      {post.readTime && (
                        <>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </>
                      )}
                    </div>
                    <p className="text-brand-text leading-relaxed mb-6 flex-grow text-sm">
                      {post.summary}
                    </p>
                    <div className="inline-flex items-center text-brand-glow font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                      Read More
                      <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="glass rounded-2xl p-12 max-w-2xl mx-auto">
                <svg className="w-16 h-16 mx-auto mb-4 text-brand-text/30" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-brand-text text-lg mb-6">No articles found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedTag(null)
                    setSearchQuery('')
                  }}
                  className="text-brand-glow hover:text-brand-mint transition-colors font-semibold"
                >
                  Clear all filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-secondary/20 via-brand-main to-brand-deep">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-brand-secondary/30 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-brand-glow" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
              Get updates when we publish new research
            </h2>
            <p className="text-lg text-brand-text mb-8 max-w-2xl mx-auto">
              Join our mailing list to receive the latest research papers, product updates, 
              and technical insights on spatial intelligence.
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 bg-brand-deep/50 border border-brand-text/20 rounded-xl text-white placeholder-brand-text/50 focus:outline-none focus:border-brand-glow/50 focus:shadow-glow transition-all"
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-brand-text/60 mt-4">
                No spam. Unsubscribe at any time.
              </p>
            </form>
          </motion.div>
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
              Ready to Transform Your Spatial Workflows?
            </h2>
            <p className="text-xl text-brand-text mb-8 max-w-2xl mx-auto">
              See how AtlasPro AI can help your team move from manual GIS workflows 
              to automated spatial intelligence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">
                Request a Demo
              </Link>
              <Link href="/product" className="btn-outline text-lg">
                Explore Platform
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
