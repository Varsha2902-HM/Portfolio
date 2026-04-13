function Certifications({ certifications = [] }) {
  return (
    <section id="certifications" className="section section-soft">
      <div className="container">
        <h2 className="section-title">Certificates</h2>

        <div className="cert-grid">
          {certifications.map((item, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cert-image"
                />
              </div>
              <div className="cert-content">
                <h3>{item.title}</h3>
                <p>{item.provider}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;