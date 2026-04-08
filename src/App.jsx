import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const portfolioData = {
    name: "VARSHA H M",
    role: "Computer Science and Engineering Student",
    phone: "8660032086",
    email: "varshanayakahm2004@gmail.com",
    location: "Tiptur, Karnataka, 572114",
    linkedin: "https://www.linkedin.com/in/varsha-nayaka-472b83267",
    github: "https://github.com/Varsha2902-HM",
    objective:
      "To continuously improve my skills and knowledge, and to contribute my fullest ability toward the organization’s goals. A dedicated and motivated Computer Science and Business System Engineering student with a strong foundation in core engineering principles and an eagerness to apply theoretical knowledge to practical scenarios. Equipped with a strong analytical mindset and problem-solving skills, and a keen interest in emerging technologies and innovations within the field. Adept at collaborating in team environments, with excellent communication abilities and a commitment to continuous learning and professional growth.",
    skills: [
      "Python",
      "C",
      "HTML/CSS",
      "Data Structures and Algorithms (Basic)",
      "DBMS (Basic)",
      "AIML (Basic)",
    ],
    education: [
      {
        institution: "Malnad College of Engineering",
        year: "2022 - Present",
        degree: "B.E in Computer Science and Engineering",
        score: "CGPA: 8.10/10.00",
        place: "Hassan, Karnataka",
      },
      {
        institution: "Sri Madh Rambhapuri PU College",
        year: "2020 - 2022",
        degree: "PCMB (Pre-University)",
        score: "Percentage: 84.5%",
        place: "K B Cross, Karnataka",
      },
      {
        institution: "Sri Madh Rambhapuri High School",
        year: "2019 - 2020",
        degree: "SSLC",
        score: "Percentage: 90%",
        place: "K B Cross, Karnataka",
      },
    ],
    projects: [
      {
        title: "Event Planning Website – eventplanner.com",
        year: "2022",
        description: [
          "Developed using Google Sites to provide an online event planning and customization platform.",
          "Enabled customers to explore event options, select decorative themes, catering menus, and entertainment choices tailored to their requirements.",
          "Focused on enhancing user experience through an intuitive interface for seamless event customization and booking.",
        ],
      },
      {
        title: "Detecting Network Attacks Using Artificial Intelligence (AI)",
        year: "2025",
        description: [
          "Developed an AI-based Intrusion Detection System (IDS) leveraging machine learning algorithms to identify and classify suspicious network activities in real time.",
          "Implemented traffic pattern analysis to detect anomalies and known attack signatures, enhancing cybersecurity and reducing false positives.",
          "Improved threat response time and overall network protection through intelligent, data-driven detection mechanisms.",
        ],
      },
    ],
    certifications: [
      "Completed NPTEL-certified course on Soft Skill Development, focusing on communication, teamwork, leadership, and workplace ethics.",
      "Completed NPTEL-certified course on Introduction to Machine Learning, gaining hands-on knowledge of ML algorithms and data-driven decision making.",
      "Completed NPTEL-certified course on Introduction to AI: Concepts and Techniques, gaining foundational knowledge of artificial intelligence and problem-solving techniques.",
    ],
    achievements: [
      "Represented Karnataka state at National Level Softball.",
      "Actively participated in the programs of National Service Scheme.",
    ],
    personalProfile: {
      languages: "Kannada, English, Hindi",
      hobbies: "Photography, Film Making, Video Editing, Travelling",
    },
  };

  return (
    <div className="app">
      <Header name={portfolioData.name} />
      <Hero data={portfolioData} />
      <About
        objective={portfolioData.objective}
        achievements={portfolioData.achievements}
        personalProfile={portfolioData.personalProfile}
      />
      <Skills skills={portfolioData.skills} />
      <Education education={portfolioData.education} />
      <Projects projects={portfolioData.projects} />
      <Certifications certifications={portfolioData.certifications} />
      <Contact data={portfolioData} />
      <Footer name={portfolioData.name} />
    </div>
  );
}

export default App;