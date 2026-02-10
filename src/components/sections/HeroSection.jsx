function HeroSection({ onScrollToSection }) {
  return (
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
          <button className="btn btn-primary" onClick={() => onScrollToSection('contact')}>
            Book a Service
          </button>
          <button className="btn btn-outline" onClick={() => onScrollToSection('about')}>
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
  )
}

export default HeroSection
