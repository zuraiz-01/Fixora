function FooterSection({
  onScrollToSection,
  onNavClick,
  email,
  onEmailChange,
  onNewsletterSubmit,
  newsletterStatus,
}) {
  return (
    <footer className="footer section-block reveal">
      <div className="footer-top reveal">
        <div className="footer-brand reveal reveal-left">
          <p className="section-label">Need handyman support?</p>
          <h2>Let's build your better home service experience.</h2>
          <button className="btn btn-primary" onClick={() => onScrollToSection('contact')}>
            Book Appointment
          </button>
        </div>

        <div className="footer-links reveal reveal-up" style={{ '--delay': '80ms' }}>
          <h3>Quick Links</h3>
          <a href="#about" onClick={(event) => onNavClick(event, 'about')}>
            About Company
          </a>
          <a href="#services" onClick={(event) => onNavClick(event, 'services')}>
            All Services
          </a>
          <a href="#projects" onClick={(event) => onNavClick(event, 'projects')}>
            Our Projects
          </a>
          <a href="#faq" onClick={(event) => onNavClick(event, 'faq')}>
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
          <form className="newsletter-form" onSubmit={onNewsletterSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => onEmailChange(event.target.value)}
            />
            <button type="submit">Send</button>
          </form>
          {newsletterStatus ? <p className="newsletter-status">{newsletterStatus}</p> : null}
        </div>
      </div>

      <div className="footer-bottom reveal">
        <p>&copy; 2026 Fixora. Designed and developed by Zuraiz. All rights reserved.</p>
        <div>
          <a href="#faq" onClick={(event) => onNavClick(event, 'faq')}>
            Privacy Policy
          </a>
          <a href="#faq" onClick={(event) => onNavClick(event, 'faq')}>
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
