import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import UnifySection from '@/components/UnifySection'
import Features from '@/components/Features'
import Pipeline from '@/components/Pipeline'
import UseCases from '@/components/UseCases'
import Security from '@/components/Security'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <UnifySection />
      <Features />
      <Pipeline />
      <UseCases />
      <Security />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
