function TestimonialsSection({ testimonials }) {
  return (
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
  )
}

export default TestimonialsSection
