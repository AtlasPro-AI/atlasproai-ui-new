'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/data/researchPosts'
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = getPostBySlug(slug)
  const [activeSection, setActiveSection] = useState('')

  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts()
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Extract headings for table of contents
  const extractHeadings = (content: string) => {
    const lines = content.trim().split('\n')
    const headings: { id: string; text: string; level: number }[] = []
    
    lines.forEach((line, index) => {
      if (line.startsWith('## ')) {
        const text = line.substring(3).trim()
        const id = `section-${index}`
        headings.push({ id, text, level: 2 })
      } else if (line.startsWith('### ')) {
        const text = line.substring(4).trim()
        const id = `section-${index}`
        headings.push({ id, text, level: 3 })
      }
    })
    
    return headings
  }

  const tableOfContents = extractHeadings(post.content)

  // Enhanced markdown-style rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: JSX.Element[] = []
    let key = 0
    let sectionIndex = 0

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      
      // Heading 1 (skip, already rendered as page title)
      if (line.startsWith('# ')) {
        continue
      }
      // Heading 2
      else if (line.startsWith('## ')) {
        const text = line.substring(3).trim()
        const id = `section-${sectionIndex++}`
        elements.push(
          <h2 
            key={key++} 
            id={id}
            className="text-3xl md:text-4xl font-heading font-bold mb-6 mt-16 text-white scroll-mt-24"
          >
            {text}
          </h2>
        )
      }
      // Heading 3
      else if (line.startsWith('### ')) {
        const text = line.substring(4).trim()
        const id = `section-${sectionIndex++}`
        elements.push(
          <h3 
            key={key++} 
            id={id}
            className="text-2xl md:text-3xl font-heading font-bold mb-4 mt-12 text-white scroll-mt-24"
          >
            {text}
          </h3>
        )
      }
      // Bold text with potential inline formatting
      else if (line.includes('**')) {
        const parts = line.split('**')
        const rendered = parts.map((part, idx) => 
          idx % 2 === 1 ? <strong key={idx} className="text-brand-glow font-semibold">{part}</strong> : part
        )
        elements.push(
          <p key={key++} className="text-brand-text leading-loose mb-6 text-lg">
            {rendered}
          </p>
        )
      }
      // List item
      else if (line.trim().startsWith('- ')) {
        elements.push(
          <li key={key++} className="text-brand-text leading-loose ml-6 mb-3 list-disc text-lg marker:text-brand-glow">
            {line.trim().substring(2)}
          </li>
        )
      }
      // Numbered list item
      else if (/^\d+\.\s/.test(line.trim())) {
        const text = line.trim().replace(/^\d+\.\s/, '')
        elements.push(
          <li key={key++} className="text-brand-text leading-loose ml-6 mb-3 list-decimal text-lg marker:text-brand-glow">
            {text}
          </li>
        )
      }
      // Code block
      else if (line.trim().startsWith('```')) {
        const codeLines: string[] = []
        i++ // skip opening ```
        while (i < lines.length && !lines[i].trim().startsWith('```')) {
          codeLines.push(lines[i])
          i++
        }
        elements.push(
          <pre key={key++} className="bg-brand-deep/70 border border-brand-glow/20 rounded-xl p-6 my-8 overflow-x-auto shadow-glow">
            <code className="text-brand-mint text-sm md:text-base font-mono">{codeLines.join('\n')}</code>
          </pre>
        )
      }
      // Horizontal rule
      else if (line.trim() === '---') {
        elements.push(
          <hr key={key++} className="border-brand-text/20 my-12" />
        )
      }
      // Regular paragraph
      else if (line.trim()) {
        elements.push(
          <p key={key++} className="text-brand-text leading-loose mb-6 text-lg">
            {line}
          </p>
        )
      }
      // Empty line (spacing)
      else {
        elements.push(<div key={key++} className="mb-4"></div>)
      }
    }

    return elements
  }

  return (
    <main className="bg-brand-main">
      <Navbar />
      
      {/* Article Header */}
      <article className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-deep via-brand-main to-brand-secondary/20 relative overflow-hidden">
        {/* Background Pattern */}
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

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <Link 
              href="/research" 
              className="inline-flex items-center text-brand-text hover:text-brand-glow transition-colors mb-8 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
              Back to Research
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="text-xs px-4 py-1.5 bg-brand-secondary/30 text-brand-glow rounded-full border border-brand-accent/30 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 text-white leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-brand-text text-sm mb-8 pb-8 border-b border-brand-text/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-secondary/30 flex items-center justify-center border border-brand-glow/30">
                  <svg className="w-5 h-5 text-brand-glow" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">{post.author}</p>
                  <p className="text-xs text-brand-text/70">Research Team</p>
                </div>
              </div>
              <span className="text-brand-text/50">•</span>
              <span>{formatDate(post.date)}</span>
              {post.readTime && (
                <>
                  <span className="text-brand-text/50">•</span>
                  <span>{post.readTime} read</span>
                </>
              )}
            </div>

            {/* Summary */}
            <div className="glass rounded-2xl p-6 md:p-8 border-l-4 border-brand-glow">
              <p className="text-xl text-brand-text leading-relaxed">
                {post.summary}
              </p>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Article Content with Sidebar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-main to-brand-deep">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Table of Contents - Sidebar */}
            {tableOfContents.length > 0 && (
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-32">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass rounded-2xl p-6 border border-brand-text/10"
                  >
                    <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                      Table of Contents
                    </h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((heading, idx) => (
                        <a
                          key={idx}
                          href={`#${heading.id}`}
                          className={`block text-sm transition-colors ${
                            heading.level === 3 ? 'pl-4' : ''
                          } ${
                            activeSection === heading.id
                              ? 'text-brand-glow font-medium'
                              : 'text-brand-text hover:text-brand-glow'
                          }`}
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </motion.div>
                </div>
              </aside>
            )}

            {/* Main Content */}
            <div className={tableOfContents.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4 max-w-4xl mx-auto'}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-invert prose-lg max-w-none"
              >
                <div className="space-y-4">
                  {renderContent(post.content)}
                </div>
              </motion.div>

              {/* Author Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 mt-16 border border-brand-text/10"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-brand-secondary/30 flex items-center justify-center border-2 border-brand-glow/30 flex-shrink-0">
                    <svg className="w-8 h-8 text-brand-glow" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-heading font-bold text-white mb-2">
                      {post.author}
                    </h4>
                    <p className="text-brand-text leading-relaxed">
                      The AtlasPro AI Research Team explores the intersection of spatial intelligence, 
                      graph neural networks, and enterprise geospatial operations. We publish findings 
                      from our work building the spatial intelligence layer for critical infrastructure.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-deep to-brand-main border-t border-brand-text/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-2 text-white">Related Research</h2>
            <p className="text-brand-text mb-10">Continue exploring spatial intelligence topics</p>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/research/${relatedPost.slug}`}>
                    <motion.div
                      className="glass rounded-2xl p-6 h-full flex flex-col hover:shadow-glow-strong transition-all duration-300 group cursor-pointer border border-brand-text/10"
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <div className="flex flex-wrap gap-2 mb-4">
                        {relatedPost.tags.slice(0, 2).map((tag, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-3 py-1 bg-brand-secondary/20 text-brand-mint rounded-full border border-brand-accent/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-brand-glow transition-colors leading-tight">
                        {relatedPost.title}
                      </h3>
                      <p className="text-brand-text text-sm leading-relaxed mb-4 flex-grow">
                        {relatedPost.summary}
                      </p>
                      <div className="inline-flex items-center text-brand-glow font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                        Read Article
                        <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M9 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-secondary/90 via-brand-main to-brand-deep">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
              Ready to Experience AtlasPro AI?
            </h2>
            <p className="text-xl text-brand-text mb-10 max-w-2xl mx-auto">
              See how our spatial intelligence platform can transform your operations 
              with real-time analytics and engineering-grade outputs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg">
                Request a Demo
              </Link>
              <Link href="/research" className="btn-outline text-lg">
                Back to Research
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
