import avatar from "../assets/personalImage/image1.JPG";
import landblock from "../assets/landblock.png";
import { House, Info, FolderOpenDot, Mail } from "lucide-react";

function Home() {
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

      <section className="home-scene" id="home">
        <div className="hero-copy">
          <h2>Hi, I'm Truong Nguyen</h2>
          <p>
            I'm a full-stack developer who builds clean, responsive, and
            user-friendly web applications.
          </p>
        </div>

        <img className="landblock" src={landblock} alt="" aria-hidden="true" />
      </section>
    </main>
  );
}

export default Home;
