import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Hero({ data }) {
  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="tag">Welcome to My Portfolio</p>
          <h1>{data.name}</h1>
          <h3 className="animated-gradient-text">{data.role}</h3>

          <p className="hero-description">
            Passionate about learning, building meaningful solutions, and growing
            through technology, creativity, and real-world problem solving.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Contact Me
            </a>
            <a href="#projects" className="btn secondary">
              View Projects
            </a>
          </div>

          <div className="hero-contact">
            <span>
              <FaPhoneAlt /> {data.phone}
            </span>
            <span>
              <FaEnvelope /> {data.email}
            </span>
            <span>
              <FaMapMarkerAlt /> {data.location}
            </span>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-image-wrap">
            <img
              src={data.heroImage}
              alt={data.name}
              className="profile-photo premium-photo"
            />
          </div>

          <h3>{data.name}</h3>
          <p>{data.role}</p>

          <div className="social-links">
            <a href={data.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={data.github} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;