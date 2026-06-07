import "./Project.css";

const projects = [
  {
    title: "Highschool AI Chatbot",
    description:
      "An AI Chatbot providing information about the high school and allow students to request music to be played in the Loudspeaker.",
    tags: ["ReactJS", "Electron", "NodeJS"],
  },
  {
    title: "Highschool AI Chatbot",
    description:
      "An AI Chatbot providing information about the high school and allow students to request music to be played in the Loudspeaker.",
    tags: ["ReactJS", "Electron", "NodeJS"],
  },
  {
    title: "Highschool AI Chatbot",
    description:
      "An AI Chatbot providing information about the high school and allow students to request music to be played in the Loudspeaker.",
    tags: ["ReactJS", "Electron", "NodeJS"],
  },
];

function ProjectPreview() {
  return (
    <div className="project-preview" aria-hidden="true">
      <div className="chat-window">
        <div className="chat-title">Chào mừng đến với TCloud</div>
        <div className="chat-line short" />
        <div className="chat-line" />
        <div className="chat-line medium" />
        <div className="chat-line" />
        <div className="chat-line short" />
        <div className="chat-choice" />
        <div className="chat-input">
          <span />
          <i />
        </div>
      </div>
    </div>
  );
}

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
              <ProjectPreview />

              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="project-tags" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  <a href="#projects">DEMO</a>
                  <a href="#projects">CODE</a>
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
