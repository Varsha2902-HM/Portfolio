function Education({ education = [] }) {
  return (
    <section id="education" className="section section-soft">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="timeline">
          {education.map((item, index) => (
            <div className="timeline-item card" key={index}>
              <div className="timeline-dot"></div>
              <h3>{item.institution}</h3>
              <p className="year">{item.year}</p>
              <p>{item.degree}</p>
              <p>{item.score}</p>
              <p>{item.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;