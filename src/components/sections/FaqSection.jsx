function FaqSection({ faqs }) {
  return (
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
  )
}

export default FaqSection
