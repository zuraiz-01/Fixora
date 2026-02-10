function AboutSection({ checklist, onScrollToSection }) {
  return (
    <section className="about section-block reveal" id="about">
      <div className="about-image-wrap reveal reveal-left">
        <img src="/images/about-handyman.jpg" alt="Professional handyman" />
      </div>

      <div className="about-content reveal reveal-right">
        <p className="section-label">Working with excellent</p>
        <h2>We are a team of professional skilled experts</h2>
        <p className="muted">
          We work to ensure comfort at your home and provide the best and fastest help at fair
          service prices.
        </p>
        <ul className="checklist">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button
          className="round-arrow"
          aria-label="Explore more"
          onClick={() => onScrollToSection('process')}
        >
          ↗
        </button>
      </div>
    </section>
  )
}

export default AboutSection
