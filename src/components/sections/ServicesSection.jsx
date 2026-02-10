function ServicesSection({ serviceCards, onScrollToSection }) {
  return (
    <section className="services section-block reveal" id="services">
      <div className="services-intro reveal reveal-left">
        <p className="section-label">Our Services</p>
        <h2>What you will get from check.</h2>
        <button className="btn btn-primary" onClick={() => onScrollToSection('services')}>
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
  )
}

export default ServicesSection
