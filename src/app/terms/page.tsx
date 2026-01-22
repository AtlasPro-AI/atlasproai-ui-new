'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function TermsPage() {
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
              Terms of Service
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
          >
            <div className="glass rounded-card-lg p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-brand-text">
                By accessing and using AtlasPro AI's services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </div>

            <div className="glass rounded-card-lg p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">2. Description of Service</h2>
              <p className="text-brand-text">
                AtlasPro AI provides a spatial intelligence platform that transforms geospatial data into 
                actionable insights. Our services include real-time monitoring, geospatial analytics, 
                simulations, and AI-powered analysis tools.
              </p>
            </div>

            <div className="glass rounded-card-lg p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">3. User Responsibilities</h2>
              <p className="text-brand-text mb-4">
                As a user of our service, you agree to:
              </p>
              <ul className="list-disc list-inside text-brand-text space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the service in compliance with all applicable laws</li>
                <li>Not attempt to gain unauthorized access to any part of the service</li>
                <li>Not use the service for any unlawful purpose</li>
              </ul>
            </div>

            <div className="glass rounded-card-lg p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-brand-text">
                All content, features, and functionality of the AtlasPro AI platform, including but not 
                limited to text, graphics, logos, and software, are the exclusive property of AtlasPro AI 
                and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div className="glass rounded-card-lg p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">5. Limitation of Liability</h2>
              <p className="text-brand-text">
                AtlasPro AI shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages resulting from your use of or inability to use the service. This includes 
                damages for loss of profits, data, or other intangible losses.
              </p>
            </div>

            <div className="glass rounded-card-lg p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">6. Modifications to Terms</h2>
              <p className="text-brand-text">
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes by posting the new Terms of Service on this page and updating the "Last updated" date.
              </p>
            </div>

            <div className="glass rounded-card-lg p-8">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">7. Contact Information</h2>
              <p className="text-brand-text">
                For any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@atlaspro.ai" className="text-brand-glow hover:underline">
                  legal@atlaspro.ai
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
