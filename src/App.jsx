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

function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">H</span>
          <span className="brand-name">Fixora</span>
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#about">Pages</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="menu-pill" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </header>

      <section className="hero section-block" id="projects">
        <aside className="hero-side-info">
          <div className="side-card">
            <p>Large range of services provided</p>
            <small>Covering carpentry, wiring, plumbing, and premium finish work.</small>
          </div>
          <div className="side-card">
            <p>Professional experiences</p>
            <small>Trusted field team handling residential maintenance and upgrades.</small>
          </div>
        </aside>

        <div className="hero-main">
          <p className="section-label">Working with excellent</p>
          <h1>Increase your handyman service quality</h1>
          <p>
            We are a team of trained experts delivering fast home services with accurate work,
            clean execution, and complete safety standards.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Start Right Now</button>
            <button className="btn btn-outline">About Fixora</button>
          </div>
        </div>

        <aside className="hero-contact" id="contact">
          <p>25 Riverview St. New York, NY 45870</p>
          <p>+923433154839</p>
          <p>info@fixora.com</p>
          <div className="socials">
            <span>f</span>
            <span>tw</span>
            <span>in</span>
            <span>ig</span>
          </div>
        </aside>
      </section>

      <section className="about section-block" id="about">
        <div className="about-image-wrap">
          <img
            src="/images/about-handyman.jpg"
            alt="Professional handyman"
          />
        </div>

        <div className="about-content">
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
          <button className="round-arrow" aria-label="Explore more">
            ↗
          </button>
        </div>
      </section>

      <section className="services section-block" id="services">
        <div className="services-intro">
          <p className="section-label">Our Services</p>
          <h2>What you will get from check.</h2>
          <button className="btn btn-primary">View All Service</button>
        </div>

        <div className="services-grid">
          {serviceCards.map((service) => (
            <article className="service-card" key={service.title}>
              <img src={service.image} alt={service.title} />
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ticker" aria-label="Brand slogan">
        <div className="ticker-track">
          <span>Fixora</span>
          <span>Handyman</span>
          <span>Service</span>
          <span>Fixora</span>
          <span>Handyman</span>
          <span>Service</span>
        </div>
      </section>

      <section className="stats section-block">
        <div className="stats-left">
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

        <div className="stats-right">
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

      <footer className="footer section-block">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="section-label">Need handyman support?</p>
            <h2>Let's build your better home service experience.</h2>
            <button className="btn btn-primary">Book Appointment</button>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#">About Company</a>
            <a href="#">All Services</a>
            <a href="#">Our Projects</a>
            <a href="#">Support Center</a>
          </div>

          <div className="footer-links">
            <h3>Contact</h3>
            <p>25 Riverview St, New York, NY 45870</p>
            <p>+923433154839</p>
            <p>info@fixora.com</p>
          </div>

          <div className="footer-links">
            <h3>Newsletter</h3>
            <p>Get offers and maintenance tips in your inbox every week.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright by Zuraiz</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
