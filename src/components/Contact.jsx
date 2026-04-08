function Contact({ data }) {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>

        <div className="contact-grid">
          <div className="card">
            <h3>Get in Touch</h3>
            <p>
              <strong>Phone:</strong> {data.phone}
            </p>
            <p>
              <strong>Email:</strong> {data.email}
            </p>
            <p>
              <strong>Location:</strong> {data.location}
            </p>
          </div>

          <div className="card">
            <h3>Professional Links</h3>
            <p>
              <a href={data.linkedin} target="_blank" rel="noreferrer">
                LinkedIn Profile
              </a>
            </p>
            <p>
              <a href={data.github} target="_blank" rel="noreferrer">
                GitHub Profile
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;