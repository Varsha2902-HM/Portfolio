function Header({ name }) {
  return (
    <header className="header">
      <div className="container nav">
        <h2 className="logo">{name}</h2>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;