'use client'

import { useState, useEffect, useRef, FormEvent, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface WhitepaperDownloadModalProps {
  isOpen: boolean
  onClose: () => void
  whitepaperTitle?: string
  onSubmit: (formData: FormData) => void
}

interface FormData {
  name: string
  email: string
  company: string
  role: string
}

export default function WhitepaperDownloadModal({ 
  isOpen, 
  onClose, 
  whitepaperTitle,
  onSubmit 
}: WhitepaperDownloadModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: ''
  })
  
  const modalRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  // Memoize handleBackdropClick to prevent unnecessary re-renders
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }, [onClose])

  // Memoize handleSubmit
  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    // Reset form
    setFormData({ name: '', email: '', company: '', role: '' })
    onClose()
  }, [formData, onSubmit, onClose])

  // Save the currently focused element when modal opens
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement
      // Focus first input after a brief delay to allow animation
      setTimeout(() => {
        firstInputRef.current?.focus()
      }, 100)
    } else {
      // Restore focus when modal closes
      previousActiveElement.current?.focus()
    }
  }, [isOpen])

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Focus trap - keep focus within modal
  useEffect(() => {
    if (!isOpen) return

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const modal = modalRef.current
      if (!modal) return

      const focusableElements = modal.querySelectorAll(
        'button, input, textarea, select, a[href], [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [isOpen])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="glass rounded-3xl p-8 max-w-md w-full border border-brand-text/10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-text/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-brand-text/10"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 id="modal-title" className="text-2xl font-heading font-bold text-white mb-2">
              Download Whitepaper
            </h3>
            
            {whitepaperTitle && (
              <p className="text-sm text-brand-glow mb-4 font-medium">
                {whitepaperTitle}
              </p>
            )}
            
            <p id="modal-description" className="text-brand-text mb-6">
              Fill out the form below to receive your free whitepaper.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-brand-deep/50 border border-brand-text/20 rounded-xl text-white placeholder-brand-text/50 focus:outline-none focus:border-brand-glow focus:ring-2 focus:ring-brand-glow/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
                  Work Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-brand-deep/50 border border-brand-text/20 rounded-xl text-white placeholder-brand-text/50 focus:outline-none focus:border-brand-glow focus:ring-2 focus:ring-brand-glow/20 transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-brand-text mb-2">
                  Company Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-brand-deep/50 border border-brand-text/20 rounded-xl text-white placeholder-brand-text/50 focus:outline-none focus:border-brand-glow focus:ring-2 focus:ring-brand-glow/20 transition-all"
                  placeholder="Acme Corp"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-brand-text mb-2">
                  Job Title <span className="text-red-400">*</span>
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  required
                  autoComplete="organization-title"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 bg-brand-deep/50 border border-brand-text/20 rounded-xl text-white placeholder-brand-text/50 focus:outline-none focus:border-brand-glow focus:ring-2 focus:ring-brand-glow/20 transition-all"
                  placeholder="Engineering Manager"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/80 text-white rounded-xl font-semibold transition-all hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-brand-secondary/50"
                >
                  Download PDF
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 bg-transparent border border-brand-text/20 text-brand-text hover:bg-brand-text/10 rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-brand-text/50"
                >
                  Cancel
                </button>
              </div>
            </form>

            <p className="text-xs text-brand-text/60 mt-4 leading-relaxed">
              We respect your privacy. Your information will only be used to send you relevant content and will never be shared with third parties.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
