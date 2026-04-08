function About({ objective, achievements, personalProfile }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="card">
          <p className="about-text">{objective}</p>
        </div>

        <div className="two-column">
          <div className="card">
            <h3>Achievements</h3>
            <ul>
              {achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card">
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