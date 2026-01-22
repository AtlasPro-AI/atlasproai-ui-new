'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <main className="bg-brand-main min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-deep via-brand-main to-brand-secondary/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-brand-text">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="glass rounded-card-lg p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-brand-text mb-4">
                At AtlasPro AI, we collect information you provide directly to us, such as when you create an account, 
                request a demo, subscribe to our newsletter, or contact us for support.
              </p>
              <ul className="list-disc list-inside text-brand-text space-y-2">
                <li>Contact information (name, email, company)</li>
                <li>Account credentials</li>
                <li>Communication preferences</li>
                <li>Usage data and analytics</li>
              </ul>
            </div>

            <div className="glass rounded-card-lg p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-brand-text mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-brand-text space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new products and services</li>
              </ul>
            </div>

            <div className="glass rounded-card-lg p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">3. Data Security</h2>
              <p className="text-brand-text">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. This includes encryption, 
                secure servers, and regular security audits.
              </p>
            </div>

            <div className="glass rounded-card-lg p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">4. Data Retention</h2>
              <p className="text-brand-text">
                We retain your personal information for as long as necessary to fulfill the purposes for which 
                it was collected, including to satisfy any legal, accounting, or reporting requirements.
              </p>
            </div>

            <div className="glass rounded-card-lg p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">5. Your Rights</h2>
              <p className="text-brand-text mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-brand-text space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div className="glass rounded-card-lg p-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">6. Contact Us</h2>
              <p className="text-brand-text">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@atlaspro.ai" className="text-brand-glow hover:underline">
                  privacy@atlaspro.ai
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
