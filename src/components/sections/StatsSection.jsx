function StatsSection({ quickFacts }) {
  return (
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
        <img src="/images/stats-tech.jpg" alt="Technician with tools" />
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
  )
}

export default StatsSection
