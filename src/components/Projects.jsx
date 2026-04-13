import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects({ projects = [] }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card premium-project-card" key={index}>
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-content">
                <div className="project-head">
                  <h3>{project.title}</h3>
                  <span>{project.year}</span>
                </div>

                <p className="project-tech">{project.tech}</p>
                <p className="project-desc">{project.description}</p>

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="small-btn"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="small-btn outline-btn"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;