import profilePhoto from "../assets/my photo.jpg";

function Hero({ data }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="tag">Portfolio</p>
          <h1>{data.name}</h1>
          <h3>{data.role}</h3>

          <p className="hero-description">
            Passionate about learning, problem solving, and building meaningful
            solutions with technology and creativity.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Contact Me
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              GitHub
            </a>
          </div>

          <div className="hero-contact">
            <span>{data.phone}</span>
            <span>{data.email}</span>
            <span>{data.location}</span>
          </div>
        </div>

        <div className="hero-card">
          <img src={profilePhoto} alt={data.name} className="profile-photo" />
          <h3>{data.name}</h3>
          <p>{data.role}</p>

          <div className="social-links">
            <a href={data.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={data.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;