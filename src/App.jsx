import { useEffect, useState } from 'react'
import './App.css'

const serviceCards = [
  {
    title: 'Home Maintenance',
    text: 'Preventive checks, leak fixing, and routine care to keep every corner working.',
    image: '/images/service-home.jpg',
  },
  {
    title: 'Electrical Services',
    text: 'Safe wiring diagnostics, switchboard updates, and emergency repairs by experts.',
    image: '/images/service-electric.jpg',
  },
  {
    title: 'Wiring & Installation',
    text: 'Ceiling fans, lighting, outlets, and appliance setups with clean finishing.',
    image: '/images/service-wiring.jpg',
  },
  {
    title: 'Renovation & Painting',
    text: 'From patchwork to full interior refresh with durable materials and sharp detailing.',
    image: '/images/service-renovation.jpg',
  },
]

const checklist = [
  'Large range of services across all home systems',
  'Skilled professionals with verified local experience',
  'Reliable quality, fast turnaround, and clear pricing',
]

const quickFacts = [
  'Large range of services provided',
  'Professional experience',
  'Number of grateful customers',
]

const processSteps = [
  {
    title: 'Request & Inspection',
    text: 'Share your issue online or by call. We inspect and suggest the most practical plan.',
  },
  {
    title: 'Transparent Quote',
    text: 'You receive clear pricing with timeline details before any work begins.',
  },
  {
    title: 'Expert Execution',
    text: 'Certified technicians complete work with safety checks and clean finishing.',
  },
  {
    title: 'Final Quality Check',
    text: 'We verify every detail and keep support open if you need post-service help.',
  },
]

const testimonials = [
  {
    name: 'Areeba Khan',
    role: 'Apartment Owner',
    review:
      'Fixora team was on time and very professional. They fixed electrical and plumbing issues in one visit.',
  },
  {
    name: 'Hamza Tariq',
    role: 'Office Manager',
    review:
      'Great communication and clean work quality. The pricing was exactly what they quoted before starting.',
  },
  {
    name: 'Sana Iqbal',
    role: 'Home Renovation Client',
    review:
      'I booked painting and installation service together. Delivery was fast and the finishing looked premium.',
  },
]

const faqs = [
  {
    question: 'How fast can Fixora send a technician?',
    answer:
      'For standard requests, we schedule same-day or next-day visits depending on your location and service type.',
  },
  {
    question: 'Do you provide emergency support?',
    answer:
      'Yes. Emergency repair support is available for major electrical, plumbing, and urgent maintenance issues.',
  },
  {
    question: 'Are tools and materials included?',
    answer:
      'Basic tools are always included. Material costs are shared in quotation so you have full transparency.',
  },
  {
    question: 'Is there any service warranty?',
    answer:
      'Yes, warranty duration depends on service category and is clearly written in your final invoice.',
  },
]

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

      <header className="topbar reveal">
        <div className="brand">
          <span className="brand-mark">H</span>
          <span className="brand-name">Fixora</span>
        </div>
        <nav className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
          <a href="#home" onClick={(event) => handleNavClick(event, 'home')}>
            Home
          </a>
          <a href="#about" onClick={(event) => handleNavClick(event, 'about')}>
            Pages
          </a>
          <a href="#services" onClick={(event) => handleNavClick(event, 'services')}>
            Services
          </a>
          <a href="#projects" onClick={(event) => handleNavClick(event, 'projects')}>
            Projects
          </a>
          <a href="#contact" onClick={(event) => handleNavClick(event, 'contact')}>
            Contact
          </a>
        </nav>
        <button
          className="menu-pill"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="menu-dot" />
          <span className="menu-dot" />
          <span className="menu-dot" />
          <span className="menu-dot" />
        </button>
      </header>

      <section className="hero section-block reveal" id="projects">
        <aside className="hero-side-info reveal reveal-left">
          <div className="side-card">
            <p>End-to-end home services</p>
            <small>Plumbing, electrical, carpentry, painting, and urgent maintenance in one place.</small>
          </div>
          <div className="side-card">
            <p>Verified skilled team</p>
            <small>Trained professionals delivering clean execution with safety-first standards.</small>
          </div>
        </aside>

        <div className="hero-main reveal">
          <p className="section-label">Working with excellent</p>
          <div className="hero-badges">
            <span>24/7 Booking</span>
            <span>Same-Day Visit</span>
            <span>Verified Experts</span>
          </div>
          <h1>
            Fixora keeps your home <span className="hero-highlight">safe, smooth, and stress-free</span>
          </h1>
          <p>
            From quick repairs to full maintenance, our experts deliver reliable service with
            transparent pricing, fast response, and clean finishing.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              Book a Service
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection('about')}>
              Explore Fixora
            </button>
          </div>
          <div className="hero-metrics">
            <p>
              <strong>4.9/5</strong>
              <span>Customer Rating</span>
            </p>
            <p>
              <strong>10k+</strong>
              <span>Jobs Completed</span>
            </p>
            <p>
              <strong>35 min</strong>
              <span>Avg. Response</span>
            </p>
          </div>
        </div>

        <aside className="hero-contact reveal reveal-right" id="contact">
          <p>25 Riverview St. New York, NY 45870</p>
          <p>
            <a className="contact-link" href="tel:+923433154839">
              +923433154839
            </a>
          </p>
          <p>
            <a className="contact-link" href="mailto:info@fixora.com">
              info@fixora.com
            </a>
          </p>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              f
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              tw
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              in
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              ig
            </a>
          </div>
        </aside>
      </section>

      <section className="about section-block reveal" id="about">
        <div className="about-image-wrap reveal reveal-left">
          <img
            src="/images/about-handyman.jpg"
            alt="Professional handyman"
          />
        </div>

        <div className="about-content reveal reveal-right">
          <p className="section-label">Working with excellent</p>
          <h2>We are a team of professional skilled experts</h2>
          <p className="muted">
            We work to ensure comfort at your home and provide the best and fastest help at
            fair service prices.
          </p>
          <ul className="checklist">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button
            className="round-arrow"
            aria-label="Explore more"
            onClick={() => scrollToSection('process')}
          >
            ↗
          </button>
        </div>
      </section>

      <section className="services section-block reveal" id="services">
        <div className="services-intro reveal reveal-left">
          <p className="section-label">Our Services</p>
          <h2>What you will get from check.</h2>
          <button className="btn btn-primary" onClick={() => scrollToSection('services')}>
            View All Service
          </button>
        </div>

        <div className="services-grid">
          {serviceCards.map((service, index) => (
            <article
              className="service-card reveal reveal-up"
              key={service.title}
              style={{ '--delay': `${index * 90}ms` }}
            >
              <img src={service.image} alt={service.title} />
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ticker reveal" aria-label="Brand slogan">
        <div className="ticker-track">
          <span>Fixora</span>
          <span>Handyman</span>
          <span>Service</span>
          <span>Fixora</span>
          <span>Handyman</span>
          <span>Service</span>
        </div>
      </section>

      <section className="stats section-block reveal">
        <div className="stats-left reveal reveal-left">
          <p className="section-label">For all home services</p>
          <h2>Don't know what to start with? get a solution</h2>
          <ul>
            {quickFacts.map((fact) => (
              <li key={fact}>
                <span>{fact}</span>
                <span>›</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="stats-right reveal reveal-right">
          <img
            src="/images/stats-tech.jpg"
            alt="Technician with tools"
          />
          <div className="metrics">
            <p>
              <strong>10k</strong>
              <span>Projects Completed</span>
            </p>
            <p>
              <strong>120</strong>
              <span>Worked Employee</span>
            </p>
            <p>
              <strong>15+</strong>
              <span>Years Of Experience</span>
            </p>
          </div>
        </div>
      </section>

      <section className="process section-block reveal" id="process">
        <div className="process-intro reveal reveal-left">
          <p className="section-label">How it works</p>
          <h2>Simple process. Professional results.</h2>
          <p>
            From first call to final check, Fixora keeps each step clear so you always know what
            is happening at your place.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article
              className="process-card reveal reveal-up"
              key={step.title}
              style={{ '--delay': `${index * 90}ms` }}
            >
              <span className="step-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials section-block reveal" id="testimonials">
        <div className="section-heading reveal">
          <p className="section-label">Client reviews</p>
          <h2>People trust Fixora for quality service</h2>
        </div>
        <div className="review-grid">
          {testimonials.map((item, index) => (
            <article
              className="review-card reveal reveal-up"
              key={item.name}
              style={{ '--delay': `${index * 110}ms` }}
            >
              <p className="review-text">“{item.review}”</p>
              <div className="review-meta">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="faq section-block reveal" id="faq">
        <div className="section-heading reveal">
          <p className="section-label">Need help?</p>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details
              className="reveal reveal-up"
              key={item.question}
              style={{ '--delay': `${index * 90}ms` }}
            >
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="footer section-block reveal">
        <div className="footer-top reveal">
          <div className="footer-brand reveal reveal-left">
            <p className="section-label">Need handyman support?</p>
            <h2>Let's build your better home service experience.</h2>
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              Book Appointment
            </button>
          </div>

          <div className="footer-links reveal reveal-up" style={{ '--delay': '80ms' }}>
            <h3>Quick Links</h3>
            <a href="#about" onClick={(event) => handleNavClick(event, 'about')}>
              About Company
            </a>
            <a href="#services" onClick={(event) => handleNavClick(event, 'services')}>
              All Services
            </a>
            <a href="#projects" onClick={(event) => handleNavClick(event, 'projects')}>
              Our Projects
            </a>
            <a href="#faq" onClick={(event) => handleNavClick(event, 'faq')}>
              Support Center
            </a>
          </div>

          <div className="footer-links reveal reveal-up" style={{ '--delay': '140ms' }}>
            <h3>Contact</h3>
            <p>25 Riverview St, New York, NY 45870</p>
            <p>+923433154839</p>
            <p>info@fixora.com</p>
          </div>

          <div className="footer-links reveal reveal-up" style={{ '--delay': '200ms' }}>
            <h3>Newsletter</h3>
            <p>Get offers and maintenance tips in your inbox every week.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit">Send</button>
            </form>
            {newsletterStatus ? <p className="newsletter-status">{newsletterStatus}</p> : null}
          </div>
        </div>

        <div className="footer-bottom reveal">
          <p>&copy; 2026 Fixora. Designed and developed by Zuraiz. All rights reserved.</p>
          <div>
            <a href="#faq" onClick={(event) => handleNavClick(event, 'faq')}>
              Privacy Policy
            </a>
            <a href="#faq" onClick={(event) => handleNavClick(event, 'faq')}>
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>

      <button
        className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`}
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        ↑
      </button>

      <div className="cursor-glow" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <div className="cursor-line" aria-hidden="true" />
    </div>
  )
}

export default App
