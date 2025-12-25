'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhitepaperDownloadModal from '@/components/WhitepaperDownloadModal'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getWhitepaperBySlug, whitepaperCategories, getAllWhitepapers } from '@/data/whitepapers'
import { notFound } from 'next/navigation'
import { useState } from 'react'

export default function WhitepaperPage() {
  const params = useParams()
  const slug = params.slug as string
  const whitepaper = getWhitepaperBySlug(slug)
  const allWhitepapers = getAllWhitepapers()
  const [showDownloadModal, setShowDownloadModal] = useState(false)

  if (!whitepaper) {
    notFound()
  }

  const category = whitepaperCategories.find(c => c.id === whitepaper.category)
  const relatedWhitepapers = allWhitepapers
    .filter(wp => wp.slug !== slug && wp.category === whitepaper.category)
    .slice(0, 3)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    })
  }

  const handleSubmitDownload = (formData: any) => {
    alert(`Thank you! Your whitepaper download will begin shortly.`)
  }

  return (
    <main className="bg-brand-main">
      <Navbar />
      
      {/* Whitepaper Hero */}
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 text-sm">
              <Link href="/whitepapers" className="text-brand-text hover:text-brand-glow transition-colors">
                Whitepapers
              </Link>
              <svg className="w-4 h-4 text-brand-text/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
              <span className="text-brand-glow">{category?.name}</span>
            </div>
          </motion.nav>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Category & Meta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-wrap items-center gap-4 mb-6"
              >
                <span className="px-4 py-1.5 bg-brand-secondary/30 text-brand-glow rounded-full border border-brand-accent/30 text-sm font-medium">
                  {category?.name}
                </span>
                <span className="text-brand-text text-sm">{whitepaper.pages} Pages</span>
                <span className="text-brand-text text-sm">•</span>
                <span className="text-brand-text text-sm">{whitepaper.readTime} Read</span>
                <span className="text-brand-text text-sm">•</span>
                <span className="text-brand-text text-sm">{formatDate(whitepaper.date)}</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight"
              >
                {whitepaper.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-brand-glow mb-8 leading-relaxed"
              >
                {whitepaper.subtitle}
              </motion.p>

              {/* Abstract */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="glass rounded-2xl p-8 mb-8 border border-brand-text/10"
              >
                <h2 className="text-2xl font-heading font-bold text-white mb-4">Abstract</h2>
                <div className="text-brand-text leading-relaxed space-y-4">
                  {whitepaper.abstract.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>

              {/* Key Findings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="glass rounded-2xl p-8 mb-8 border border-brand-text/10"
              >
                <h2 className="text-2xl font-heading font-bold text-white mb-6">Key Findings</h2>
                <ul className="space-y-4">
                  {whitepaper.keyFindings.map((finding, idx) => (
                    <li key={idx} className="flex gap-3">
                      <svg className="w-6 h-6 text-brand-glow flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-brand-text leading-relaxed">{finding}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Table of Contents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="glass rounded-2xl p-8 mb-8 border border-brand-text/10"
              >
                <h2 className="text-2xl font-heading font-bold text-white mb-6">Table of Contents</h2>
                <ol className="space-y-3">
                  {whitepaper.tableOfContents.map((section, idx) => (
                    <li key={idx} className="flex gap-3 text-brand-text">
                      <span className="text-brand-glow font-semibold w-8">{idx + 1}.</span>
                      <span>{section}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>

              {/* Authors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="glass rounded-2xl p-8 border border-brand-text/10"
              >
                <h2 className="text-2xl font-heading font-bold text-white mb-6">Authors</h2>
                <div className="space-y-4">
                  {whitepaper.authors.map((author, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-secondary/30 flex items-center justify-center text-brand-glow font-bold flex-shrink-0">
                        {author.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{author.name}</div>
                        <div className="text-brand-text text-sm">{author.title}</div>
                        {author.bio && (
                          <div className="text-brand-text text-sm mt-1">{author.bio}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="sticky top-32 space-y-6"
              >
                {/* Download CTA */}
                <div className="glass rounded-2xl p-6 border border-brand-text/10">
                  <h3 className="text-xl font-heading font-bold text-white mb-4">
                    Download Whitepaper
                  </h3>
                  <p className="text-brand-text text-sm mb-6">
                    Get instant access to the full {whitepaper.pages}-page PDF whitepaper.
                  </p>
                  <button
                    onClick={() => setShowDownloadModal(true)}
                    className="w-full px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/80 text-white rounded-xl font-semibold transition-all hover:shadow-glow mb-3"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      <span>Download PDF</span>
                    </div>
                  </button>
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 bg-transparent border-2 border-brand-glow/50 text-brand-glow hover:bg-brand-glow/10 rounded-xl font-semibold transition-all text-center"
                  >
                    Discuss with Expert
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="glass rounded-2xl p-6 border border-brand-text/10">
                  <h3 className="text-lg font-heading font-bold text-white mb-4">
                    At a Glance
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-brand-text text-sm mb-1">Pages</div>
                      <div className="text-white font-semibold text-xl">{whitepaper.pages}</div>
                    </div>
                    <div>
                      <div className="text-brand-text text-sm mb-1">Reading Time</div>
                      <div className="text-white font-semibold text-xl">{whitepaper.readTime}</div>
                    </div>
                    <div>
                      <div className="text-brand-text text-sm mb-1">Category</div>
                      <div className="text-white font-semibold">{category?.name}</div>
                    </div>
                    <div>
                      <div className="text-brand-text text-sm mb-1">Published</div>
                      <div className="text-white font-semibold">{formatDate(whitepaper.date)}</div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                {whitepaper.tags.length > 0 && (
                  <div className="glass rounded-2xl p-6 border border-brand-text/10">
                    <h3 className="text-lg font-heading font-bold text-white mb-4">
                      Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {whitepaper.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 bg-brand-deep/50 text-brand-mint rounded-full border border-brand-accent/20 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Whitepapers */}
      {relatedWhitepapers.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-deep to-brand-main">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-white">Related Whitepapers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedWhitepapers.map((wp, index) => (
                <motion.div
                  key={wp.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/whitepapers/${wp.slug}`}>
                    <div className="glass rounded-2xl p-6 h-full flex flex-col border border-brand-text/10 hover:shadow-glow-strong transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs px-3 py-1 bg-brand-secondary/20 text-brand-mint rounded-full border border-brand-accent/20">
                          {whitepaperCategories.find(c => c.id === wp.category)?.name}
                        </span>
                        <span className="text-brand-text text-xs">{wp.pages}p</span>
                      </div>
                      <h3 className="text-lg font-heading font-bold mb-2 text-white leading-tight">
                        {wp.title}
                      </h3>
                      <p className="text-brand-text text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                        {wp.summary}
                      </p>
                      <div className="text-brand-glow text-sm font-semibold">View Details →</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Download Modal */}
      <WhitepaperDownloadModal
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        whitepaperTitle={whitepaper.title}
        onSubmit={handleSubmitDownload}
      />

      <Footer />
    </main>
  )
}
