function ProcessSection({ processSteps }) {
  return (
    <section className="process section-block reveal" id="process">
      <div className="process-intro reveal reveal-left">
        <p className="section-label">How it works</p>
        <h2>Simple process. Professional results.</h2>
        <p>
          From first call to final check, Fixora keeps each step clear so you always know what is
          happening at your place.
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
  )
}

export default ProcessSection
