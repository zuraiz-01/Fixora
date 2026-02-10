import { useEffect, useState } from 'react'
import './App.css'
import CursorLayer from './components/common/CursorLayer'
import BackToTopButton from './components/common/BackToTopButton'
import Header from './components/sections/Header'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ServicesSection from './components/sections/ServicesSection'
import TickerSection from './components/sections/TickerSection'
import StatsSection from './components/sections/StatsSection'
import ProcessSection from './components/sections/ProcessSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import FaqSection from './components/sections/FaqSection'
import FooterSection from './components/sections/FooterSection'
import { checklist, faqs, processSteps, quickFacts, serviceCards, testimonials } from './data/siteContent'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('')
  const [showBackToTop, setShowBackToTop] = useState(false)

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId)
    if (!target) {
      return
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMenuOpen(false)
  }

  const handleNavClick = (event, sectionId) => {
    event.preventDefault()
    scrollToSection(sectionId)
  }

  const handleNewsletterSubmit = (event) => {
    event.preventDefault()
    const trimmedEmail = email.trim()

    if (!trimmedEmail) {
      setNewsletterStatus('Please enter your email first.')
      return
    }

    setNewsletterStatus('Thanks. Your request has been sent successfully.')
    setEmail('')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    if (!revealElements.length) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    )

    revealElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 320)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isFinePointer || prefersReducedMotion) {
      return undefined
    }

    const cursorRing = document.querySelector('.cursor-ring')
    const cursorLine = document.querySelector('.cursor-line')
    const cursorGlow = document.querySelector('.cursor-glow')

    if (!cursorRing || !cursorLine || !cursorGlow) {
      return undefined
    }

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let ringX = targetX
    let ringY = targetY
    let glowX = targetX
    let glowY = targetY
    let rafId = 0

    const animateCursor = () => {
      ringX += (targetX - ringX) * 0.34
      ringY += (targetY - ringY) * 0.34
      glowX += (targetX - glowX) * 0.2
      glowY += (targetY - glowY) * 0.2

      const lineCenterX = ringX - 26
      const lineCenterY = ringY

      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      cursorLine.style.transform = `translate3d(${lineCenterX}px, ${lineCenterY}px, 0) translate(-50%, -50%)`
      cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`

      rafId = window.requestAnimationFrame(animateCursor)
    }

    const toggleVisibility = (isVisible) => {
      const method = isVisible ? 'add' : 'remove'
      cursorRing.classList[method]('is-active')
      cursorLine.classList[method]('is-active')
      cursorGlow.classList[method]('is-active')
    }

    const handleMouseMove = (event) => {
      targetX = event.clientX
      targetY = event.clientY
      toggleVisibility(true)
    }

    const handleMouseLeave = () => {
      toggleVisibility(false)
    }

    const handleMouseEnter = () => {
      toggleVisibility(true)
    }

    const handleHoverState = (event) => {
      if (!(event.target instanceof Element)) {
        return
      }

      const interactiveTarget = event.target.closest(
        'a, button, input, textarea, summary, .service-card, .process-card, .review-card'
      )
      const isHover = Boolean(interactiveTarget)

      cursorRing.classList.toggle('is-hover', isHover)
      cursorLine.classList.toggle('is-hover', isHover)
      cursorGlow.classList.toggle('is-hover', isHover)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleHoverState)

    rafId = window.requestAnimationFrame(animateCursor)

    return () => {
      window.cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleHoverState)
    }
  }, [])

  return (
    <div className="site-shell" id="home">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((current) => !current)}
        onNavClick={handleNavClick}
      />

      <HeroSection onScrollToSection={scrollToSection} />
      <AboutSection checklist={checklist} onScrollToSection={scrollToSection} />
      <ServicesSection serviceCards={serviceCards} onScrollToSection={scrollToSection} />
      <TickerSection />
      <StatsSection quickFacts={quickFacts} />
      <ProcessSection processSteps={processSteps} />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />

      <FooterSection
        onScrollToSection={scrollToSection}
        onNavClick={handleNavClick}
        email={email}
        onEmailChange={setEmail}
        onNewsletterSubmit={handleNewsletterSubmit}
        newsletterStatus={newsletterStatus}
      />

      <BackToTopButton show={showBackToTop} onClick={scrollToTop} />
      <CursorLayer />
    </div>
  )
}

export default App
