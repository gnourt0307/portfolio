import aboutImage from "../assets/personalImage/image2.JPG";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about-me">
      <div className="about-intro">
        <div className="about-image-frame">
          <img src={aboutImage} alt="Truong Nguyen" />
        </div>

        <div className="about-copy">
          <p>
            I’m passionate about solving real-world problems through technology
            and aim to write code that is simple, maintainable, and efficient.
          </p>
          <p>
            I enjoy learning new tools, improving my skills, and turning ideas
            into functional products that provide a smooth user experience.
          </p>
        </div>
      </div>

      <div className="skills-block">
        <h2>Skills & toolkit</h2>
        <p>Technologies I work with to bring ideas to life.</p>

        <div className="skill-grid">
          <article className="skill-card">
            <h3>FRONTEND</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>ReactJS</li>
              <li>Tailwind</li>
            </ul>
          </article>

          <article className="skill-card">
            <h3>BACKEND</h3>
            <ul>
              <li>NodeJS</li>
              <li>Javascript</li>
              <li>ExpressJS</li>
              <li>Java</li>
            </ul>
          </article>

          <article className="skill-card">
            <h3>TOOLS</h3>
            <ul>
              <li>VITE</li>
              <li>GIT</li>
              <li>SUPABASE</li>
              <li>POSTMAN</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
