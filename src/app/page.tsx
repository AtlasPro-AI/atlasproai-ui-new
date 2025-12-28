import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

// Lazy load below-fold components for better initial page load performance
const ProblemSection = dynamic(() => import('@/components/ProblemSection'), {
  loading: () => <div className="min-h-screen bg-brand-main animate-pulse" />
})

const UnifySection = dynamic(() => import('@/components/UnifySection'), {
  loading: () => <div className="min-h-screen bg-brand-deep animate-pulse" />
})

const CapabilitiesSection = dynamic(() => import('@/components/CapabilitiesSection'), {
  loading: () => <div className="min-h-screen bg-brand-main animate-pulse" />
})

const Pipeline = dynamic(() => import('@/components/Pipeline'), {
  loading: () => <div className="min-h-screen bg-brand-deep animate-pulse" />
})

const UseCases = dynamic(() => import('@/components/UseCases'), {
  loading: () => <div className="min-h-screen bg-brand-main animate-pulse" />
})

const Security = dynamic(() => import('@/components/Security'), {
  loading: () => <div className="min-h-screen bg-brand-deep animate-pulse" />
})

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="min-h-screen bg-brand-main animate-pulse" />
})

const CTA = dynamic(() => import('@/components/CTA'), {
  loading: () => <div className="min-h-[50vh] bg-brand-deep animate-pulse" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[30vh] bg-brand-main animate-pulse" />
})

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <UnifySection />
      <CapabilitiesSection />
      <Pipeline />
      <UseCases />
      <Security />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
