import "./Project.css";
import Traddi from "../assets/projectImages/traddi.png";
import employeeManagement from "../assets/projectImages/employeeManagement.png";
import portfolio from "../assets/projectImages/portfolio.png";

const projects = [
  {
    title: "Highschool AI Chatbot",
    description:
      "An AI chatbot that helps students access high school information and request music to be played through the school loudspeaker.",
    src: Traddi,
    demo: "https://highschool-ai-chatbot.vercel.app/",
    code: "https://github.com/gnourt0307/highschool-ai-chatbot",
    tags: ["ReactJS", "Electron", "NodeJS"],
  },
  {
    title: "Employee Management App",
    description:
      "A comprehensive employee management system with features for tracking attendance, managing leave requests, and generating reports.",
    src: employeeManagement,
    demo: "",
    code: "https://github.com/gnourt0307/employee-management",
    tags: ["ReactJS", "Electron", "NodeJS"],
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website showcasing my projects and skills.",
    src: portfolio,
    demo: "https://gnourt0307.github.io/portfolio",
    code: "https://github.com/gnourt0307/portfolio",
    tags: ["ReactJS", "CSS", "JavaScript", "ThreeJS"],
  },
];

function Project() {
  return (
    <section className="project-section" id="projects">
      <div className="project-inner">
        <header className="project-heading">
          <h2>Recent builds</h2>
          <p>A few things I built recently...</p>
        </header>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={`${project.title}-${index}`}>
              <img src={project.src} alt={project.title} />

              <div className="project-card-body">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div>
                  <ul className="project-tags" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <div className="project-actions">
                    <a
                      {...(project.demo ? { href: project.demo } : {})}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DEMO
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CODE
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
