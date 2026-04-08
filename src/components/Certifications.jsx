function Certifications({ certifications }) {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certificates</h2>

        <div className="card">
          <ul>
            {certifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Certifications;