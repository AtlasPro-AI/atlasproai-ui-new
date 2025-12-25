'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getBlogPostBySlug, getRelatedBlogPosts, blogCategories } from '@/data/blog'
import { notFound } from 'next/navigation'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = getBlogPostBySlug(slug)
  const relatedPosts = getRelatedBlogPosts(slug, 3)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const category = blogCategories.find(c => c.id === post.category)

  return (
    <main className="bg-brand-main">
      <Navbar />
      
      {/* Article Hero */}
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 text-sm">
              <Link href="/blog" className="text-brand-text hover:text-brand-glow transition-colors">
                Blog
              </Link>
              <svg className="w-4 h-4 text-brand-text/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
              <span className="text-brand-glow">{category?.name}</span>
            </div>
          </motion.nav>

          {/* Category Badge & Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="px-4 py-1.5 bg-brand-secondary/30 text-brand-glow rounded-full border border-brand-accent/30 text-sm font-medium">
              {category?.name}
            </span>
            <span className="text-brand-text text-sm">{formatDate(post.date)}</span>
            <span className="text-brand-text text-sm">•</span>
            <span className="text-brand-text text-sm">{post.readTime}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-brand-text leading-relaxed mb-8"
          >
            {post.excerpt}
          </motion.p>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 pb-8 border-b border-brand-text/10"
          >
            <div className="w-12 h-12 rounded-full bg-brand-secondary/30 flex items-center justify-center text-brand-glow font-bold text-lg">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <div className="text-white font-semibold">{post.author.name}</div>
              <div className="text-brand-text text-sm">{post.author.title}</div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Article Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="text-brand-text leading-relaxed space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-brand-text/10"
            >
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-brand-deep/50 text-brand-mint rounded-full border border-brand-accent/20 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Share & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 pt-8 border-t border-brand-text/10"
          >
            <div className="glass rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Want to Learn More About AtlasPro AI?
              </h3>
              <p className="text-brand-text mb-6">
                See how our spatial intelligence platform can transform your infrastructure operations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/80 text-white rounded-xl font-semibold transition-all hover:shadow-glow">
                  Request a Demo
                </Link>
                <Link href="/blog" className="px-6 py-3 bg-transparent border-2 border-brand-glow/50 text-brand-glow hover:bg-brand-glow/10 rounded-xl font-semibold transition-all">
                  Back to Blog
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-deep to-brand-main">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-white">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <motion.div
                      className="glass rounded-2xl p-6 h-full flex flex-col hover:shadow-glow-strong transition-all duration-300 group cursor-pointer border border-brand-text/10"
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs px-3 py-1 bg-brand-secondary/20 text-brand-mint rounded-full border border-brand-accent/20">
                          {blogCategories.find(c => c.id === relatedPost.category)?.name}
                        </span>
                      </div>
                      <h3 className="text-lg font-heading font-bold mb-3 text-white group-hover:text-brand-glow transition-colors leading-tight">
                        {relatedPost.title}
                      </h3>
                      <p className="text-brand-text leading-relaxed mb-4 flex-grow text-sm line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="text-brand-text text-xs">{formatDate(relatedPost.date)} • {relatedPost.readTime}</div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
