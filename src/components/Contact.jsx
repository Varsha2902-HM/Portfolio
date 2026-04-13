import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact({ data }) {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div className="contact-grid">
          <div className="card contact-card">
            <h3>Get in Touch</h3>
            <p>
              <FaPhoneAlt /> {data.phone}
            </p>
            <p>
              <FaEnvelope /> {data.email}
            </p>
            <p>
              <FaMapMarkerAlt /> {data.location}
            </p>
          </div>

          <div className="card contact-card">
            <h3>Professional Links</h3>
            <p>
              <a href={data.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin /> LinkedIn Profile
              </a>
            </p>
            <p>
              <a href={data.github} target="_blank" rel="noreferrer">
                <FaGithub /> GitHub Profile
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;