import { useScrollReveal } from '../hooks/useScrollReveal'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import BusinessTypes from '../components/BusinessTypes'
import Benefits from '../components/Benefits'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })
  const delayClass = delay > 0 ? `animate-fade-up-delay-${delay}` : ''

  return (
    <div
      ref={ref}
      className={`animate-fade-up ${delayClass} ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  )
}

export default function Landing() {
  return (
    <>
      <Hero />
      <AnimatedSection><HowItWorks /></AnimatedSection>
      <AnimatedSection delay={1}><Features /></AnimatedSection>
      <AnimatedSection delay={2}><BusinessTypes /></AnimatedSection>
      <AnimatedSection delay={3}><Benefits /></AnimatedSection>
      <AnimatedSection><Pricing /></AnimatedSection>
      <AnimatedSection delay={1}><FAQ /></AnimatedSection>
      <AnimatedSection delay={2}><Blog /></AnimatedSection>
      <AnimatedSection delay={3}><Contact /></AnimatedSection>
    </>
  )
}
