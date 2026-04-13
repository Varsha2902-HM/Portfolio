import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaBrain,
  FaCode,
} from "react-icons/fa";

const icons = [
  <FaPython />,
  <FaCode />,
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaJs />,
  <FaReact />,
  <FaDatabase />,
  <FaCode />,
  <FaBrain />,
  <FaBrain />,
];

function Skills({ skills = [] }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{icons[index] || <FaCode />}</div>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;