import { FolderOpenDot, House, Info, Mail } from "lucide-react";
import avatar from "./assets/personalImage/image1.JPG";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Project from "./components/Project.jsx";
import "./App.css";

function App() {
  const handleNavClick = (event) => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => link.classList.remove("active"));
    event.currentTarget.classList.add("active");
  };

  return (
    <main className="portfolio-shell">
      <aside className="sidebar" aria-label="Portfolio navigation">
        <section className="profile">
          <div className="avatar-frame">
            <img src={avatar} alt="Nguyen Minh Truong" />
          </div>
          <h1>Nguyễn Minh Trường</h1>
          <p>Fullstack Developer</p>
        </section>

        <nav className="side-nav">
          <a className="nav-link active" href="#home" onClick={handleNavClick}>
            <House />
            <span>Home</span>
          </a>

          <a className="nav-link" href="#about-me" onClick={handleNavClick}>
            <Info />
            <span>About</span>
          </a>

          <a className="nav-link" href="#projects" onClick={handleNavClick}>
            <FolderOpenDot />
            <span>Projects</span>
          </a>

          <a className="nav-link" href="#contact" onClick={handleNavClick}>
            <Mail />
            <span>Contact</span>
          </a>
        </nav>
      </aside>

      <div className="page-content">
        <Home />
        <About />
        <Project />
        <Contact />
        <p className="contact-footer">
          // © 2026 Nguyễn Minh Trường — built block by block.
        </p>
      </div>
    </main>
  );
}

export default App;
