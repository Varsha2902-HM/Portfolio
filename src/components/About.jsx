function About({
  objective = "",
  achievements = [],
  personalProfile = {},
  counters = [],
}) {
  return (
    <section id="about" className="section section-soft">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="card about-main-card">
          <p className="about-text">{objective}</p>
        </div>

        <div className="counter-grid">
          {counters.map((item, index) => (
            <div className="counter-card" key={index}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        <div className="two-column">
          <div className="card info-card">
            <h3>Achievements</h3>
            <ul>
              {achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card info-card">
            <h3>Personal Profile</h3>
            <p>
              <strong>Languages Known:</strong> {personalProfile.languages}
            </p>
            <p>
              <strong>Hobbies:</strong> {personalProfile.hobbies}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;