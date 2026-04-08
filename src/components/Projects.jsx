function Projects({ projects }) {
  return (
    <section id="projects" className="section light-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card card" key={index}>
              <div className="project-head">
                <h3>{project.title}</h3>
                <span>{project.year}</span>
              </div>

              <ul>
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;