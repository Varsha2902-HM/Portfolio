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

import heroImg from "./assets/my photo.jpg";
import projectEvent from "./assets/project-event.jpg";
import projectNetwork from "./assets/project-network.jpg";
import cert1 from "./assets/certificate1.png";
import cert2 from "./assets/certificate2.png";
import cert3 from "./assets/certificate3.png";

function App() {
  const portfolioData = {
    name: "VARSHA H M",
    role: "Computer Science and Engineering Student",
    phone: "8660032086",
    email: "varshanayakahm2004@gmail.com",
    location: "Tiptur, Karnataka",
    linkedin: "https://www.linkedin.com/in/varsha-nayaka-472b83267",
    github: "https://github.com/Varsha2902-HM",
    heroImage: heroImg,

    objective:
      "Dedicated and motivated Computer Science student with strong interest in software development, AI, and problem solving. Passionate about building real-world applications and continuously learning new technologies.",

    achievements: [
      "Represented Karnataka state at National Level Softball",
      "Participated in National Service Scheme (NSS)",
    ],

    personalProfile: {
      languages: "Kannada, English, Hindi",
      hobbies: "Photography, Editing, Travelling",
    },

    counters: [
      { number: "3+", label: "Certifications" },
      { number: "2+", label: "Projects" },
      { number: "8.10", label: "CGPA" },
      { number: "100%", label: "Dedication" },
    ],

    skills: [
      "Python",
      "C",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "DBMS",
      "DSA",
      "Machine Learning",
      "AI Basics",
    ],

    education: [
      {
        institution: "Malnad College of Engineering",
        year: "2022 - Present",
        degree: "B.E in CSE",
        score: "CGPA: 8.10",
        place: "Hassan",
      },
      {
        institution: "PU College",
        year: "2020 - 2022",
        degree: "PCMB",
        score: "84.5%",
        place: "K B Cross",
      },
      {
        institution: "High School",
        year: "2019 - 2020",
        degree: "SSLC",
        score: "90%",
        place: "K B Cross",
      },
    ],

    projects: [
      {
        title: "Event Planning Website",
        year: "2022",
        image: projectEvent,
        tech: "Google Sites",
        description:
          "Developed an event planning platform for customization of decoration, catering, and event services.",
        github: "https://github.com/Varsha2902-HM",
        demo: "#",
      },
      {
        title: "Network Attack Detection using AI",
        year: "2025",
        image: projectNetwork,
        tech: "Python, ML",
        description:
          "AI-based intrusion detection system to identify suspicious network activities.",
        github: "https://github.com/Varsha2902-HM",
        demo: "#",
      },
    ],

    certifications: [
      {
        title: "Soft Skill Development",
        provider: "NPTEL",
        image: cert1,
      },
      {
        title: "Machine Learning",
        provider: "NPTEL",
        image: cert2,
      },
      {
        title: "Artificial Intelligence",
        provider: "NPTEL",
        image: cert3,
      },
    ],
  };

  return (
    <div className="app">
      <Header name={portfolioData.name} />
      <Hero data={portfolioData} />
      <About
        objective={portfolioData.objective}
        achievements={portfolioData.achievements}
        personalProfile={portfolioData.personalProfile}
        counters={portfolioData.counters}
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