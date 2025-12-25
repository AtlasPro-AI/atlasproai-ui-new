'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getAllBlogPosts, getFeaturedBlogPosts, blogCategories } from '@/data/blog'
import { useState } from 'react'

export default function BlogPage() {
  const allPosts = getAllBlogPosts()
  const featuredPosts = getFeaturedBlogPosts()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true
    const matchesSearch = searchQuery
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      : true
    return matchesCategory && matchesSearch
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
    alert('Newsletter subscription coming soon!')
    setEmail('')
  }

  return (
    <main className="bg-brand-main">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-deep via-brand-main to-brand-secondary/20 relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-glow"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
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
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-brand-text max-w-4xl mx-auto leading-relaxed mb-8">
              Product updates, customer stories, industry insights, and technical deep-dives 
              from the AtlasPro AI team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-brand-main/95 backdrop-blur-lg border-y border-brand-text/10 sticky top-20 z-40">
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
                placeholder="Search articles..."
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

          {/* Category Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
              All Posts
            </button>
            {blogCategories.map((category) => (
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

      {/* Featured Posts */}
      {featuredPosts.length > 0 && !searchQuery && !selectedCategory && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-main to-brand-deep">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-2 text-white">Featured</h2>
            <p className="text-brand-text mb-8">Top stories and announcements</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <motion.div
                      className="glass rounded-3xl overflow-hidden group cursor-pointer border border-brand-text/10 h-full flex flex-col"
                      whileHover={{ y: -8, scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs px-4 py-1.5 bg-brand-secondary/30 text-brand-glow rounded-full border border-brand-accent/30 font-medium">
                            {blogCategories.find(c => c.id === post.category)?.name}
                          </span>
                          <span className="text-brand-text text-sm">{formatDate(post.date)}</span>
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-brand-glow transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-brand-text leading-relaxed mb-6 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-brand-text/10">
                          <div className="w-10 h-10 rounded-full bg-brand-secondary/30 flex items-center justify-center text-brand-glow font-bold">
                            {post.author.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-white font-medium text-sm">{post.author.name}</div>
                            <div className="text-brand-text text-xs">{post.author.title}</div>
                          </div>
                          <div className="ml-auto text-brand-text text-sm">{post.readTime}</div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-deep to-brand-main">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-white mb-2">
              {selectedCategory 
                ? blogCategories.find(c => c.id === selectedCategory)?.name 
                : searchQuery 
                ? 'Search Results' 
                : 'Latest Articles'}
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
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <motion.div
                    className="glass rounded-2xl p-6 h-full flex flex-col hover:shadow-glow-strong transition-all duration-300 group cursor-pointer border border-brand-text/10"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs px-3 py-1 bg-brand-secondary/20 text-brand-mint rounded-full border border-brand-accent/20">
                        {blogCategories.find(c => c.id === post.category)?.name}
                      </span>
                      <span className="text-brand-text text-xs">{formatDate(post.date)}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-brand-glow transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-brand-text leading-relaxed mb-6 flex-grow text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-secondary/30 flex items-center justify-center text-brand-glow font-bold text-sm">
                        {post.author.name.charAt(0)}
                      </div>
                      <div className="flex-grow">
                        <div className="text-white font-medium text-xs">{post.author.name}</div>
                      </div>
                      <div className="text-brand-text text-xs">{post.readTime}</div>
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
                    setSelectedCategory(null)
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-secondary/20 via-brand-main to-brand-deep">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 text-center border border-brand-text/10"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-brand-secondary/30 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-brand-glow" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
              Stay Updated
            </h2>
            <p className="text-lg text-brand-text mb-8 max-w-2xl mx-auto">
              Get the latest product updates, customer stories, and spatial intelligence insights 
              delivered to your inbox.
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
                  className="px-8 py-4 bg-brand-secondary hover:bg-brand-secondary/80 text-white rounded-xl font-semibold transition-all hover:shadow-glow whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-brand-text/60 mt-4">
                Weekly updates. Unsubscribe anytime.
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
              Ready to See AtlasPro AI in Action?
            </h2>
            <p className="text-xl text-brand-text mb-8 max-w-2xl mx-auto">
              Discover how leading infrastructure operators are transforming their 
              spatial workflows with AI-powered intelligence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-brand-secondary hover:bg-brand-secondary/80 text-white rounded-xl font-semibold transition-all hover:shadow-glow text-lg">
                Request a Demo
              </Link>
              <Link href="/product" className="px-8 py-4 bg-transparent border-2 border-brand-glow/50 text-brand-glow hover:bg-brand-glow/10 rounded-xl font-semibold transition-all text-lg">
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
