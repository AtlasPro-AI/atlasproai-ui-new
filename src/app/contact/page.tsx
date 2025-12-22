'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    message: '',
    useCase: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
    alert('You\'re on the list! We\'ll notify you as soon as early access is available.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
              Join the Waitlist
            </h1>
            <p className="text-xl md:text-2xl text-brand-text max-w-4xl mx-auto">
              Get early access to AI agents that understand location
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-main">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Be Among the First
              </h2>
              <p className="text-brand-text text-lg leading-relaxed mb-8">
                Join our waitlist to get early access to AtlasPro AI. We'll notify you as soon as 
                we're ready to onboard new users. Tell us about your location-based challenges, and 
                we'll make sure the platform is ready to solve them.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="text-brand-glow">
                    <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-heading font-bold mb-2">Early Access</h3>
                    <p className="text-brand-text">Be first to experience AI agents with spatial intelligence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-brand-glow">
                    <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-heading font-bold mb-2">Priority Support</h3>
                    <p className="text-brand-text">Get hands-on help setting up your first AI agents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-brand-glow">
                    <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-heading font-bold mb-2">Shape the Product</h3>
                    <p className="text-brand-text">Your feedback will help us build what you need</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-card p-6">
                <h3 className="text-white font-heading font-bold mb-4">Contact Information</h3>
                <div className="space-y-3 text-brand-text">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-brand-glow" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    contact@atlaspro.ai
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-brand-glow" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass rounded-card-lg p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-white font-semibold mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-deep border border-brand-text/20 rounded-lg text-white focus:outline-none focus:border-brand-glow transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white font-semibold mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-deep border border-brand-text/20 rounded-lg text-white focus:outline-none focus:border-brand-glow transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-deep border border-brand-text/20 rounded-lg text-white focus:outline-none focus:border-brand-glow transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-white font-semibold mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-deep border border-brand-text/20 rounded-lg text-white focus:outline-none focus:border-brand-glow transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-white font-semibold mb-2">
                    Your Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="e.g., Director of Operations, CTO, VP Engineering"
                    className="w-full px-4 py-3 bg-brand-deep border border-brand-text/20 rounded-lg text-white focus:outline-none focus:border-brand-glow transition-colors placeholder-brand-text/40"
                  />
                </div>

                <div>
                  <label htmlFor="useCase" className="block text-white font-semibold mb-2">
                    Primary Use Case *
                  </label>
                  <select
                    id="useCase"
                    name="useCase"
                    required
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-deep border border-brand-text/20 rounded-lg text-white focus:outline-none focus:border-brand-glow transition-colors"
                  >
                    <option value="">Select a use case</option>
                    <option value="infrastructure">Infrastructure Monitoring</option>
                    <option value="disaster">Disaster Response</option>
                    <option value="urban">Urban Planning</option>
                    <option value="environmental">Environmental Compliance</option>
                    <option value="security">Security & Defense</option>
                    <option value="industrial">Industrial Safety</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What challenges are you looking to solve?"
                    className="w-full px-4 py-3 bg-brand-deep border border-brand-text/20 rounded-lg text-white focus:outline-none focus:border-brand-glow transition-colors placeholder-brand-text/40 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg"
                >
                  Join Waitlist
                </button>

                <p className="text-brand-text text-xs text-center">
                  By submitting this form, you agree to our Privacy Policy. 
                  We will only use your information to notify you when early access is available.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
