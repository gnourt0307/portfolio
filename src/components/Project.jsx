import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import "./Project.css";
import Traddi from "../assets/projectImages/highschool-ai-chatbot/traddi.png";
import adminDashboard from "../assets/projectImages/highschool-ai-chatbot/admin_app.png";
import settings from "../assets/projectImages/highschool-ai-chatbot/settings.png";
import employeeManagement from "../assets/projectImages/employee-management/employeeManagement.png";
import checkinApp from "../assets/projectImages/employee-management/checkin-app.png";
import report from "../assets/projectImages/employee-management/report.png";
import home from "../assets/projectImages/portfolio/home.png";
import about from "../assets/projectImages/portfolio/about.png";

const projects = [
  {
    title: "Highschool AI Chatbot",
    description:
      "An AI chatbot that helps students access high school information and request music to be played through the school loudspeaker.",
    images: [Traddi, adminDashboard, settings],
    demo: "https://highschool-ai-chatbot.vercel.app/",
    code: "https://github.com/gnourt0307/highschool-ai-chatbot",
    tags: ["ReactJS", "Electron", "NodeJS", "Socket.IO", "Gemini API"],
  },
  {
    title: "Employee Management App",
    description:
      "A comprehensive employee management system with features for tracking attendance, managing leave requests, and generating reports.",
    images: [employeeManagement, report, checkinApp],
    demo: "",
    code: "https://github.com/gnourt0307/employee-management",
    tags: ["ReactJS", "Electron", "NodeJS", "Supabase"],
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website showcasing my projects and skills.",
    images: [home, about],
    demo: "https://gnourt0307.netlify.app/",
    code: "https://github.com/gnourt0307/portfolio",
    tags: ["ReactJS", "CSS", "JavaScript", "ThreeJS"],
  },
];

function Project() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeProject =
    activeProjectIndex === null ? null : projects[activeProjectIndex];
  const activeImages = activeProject?.images ?? [];
  const hasMultipleImages = activeImages.length > 1;

  const openGallery = (projectIndex, imageIndex = 0) => {
    setActiveProjectIndex(projectIndex);
    setActiveImageIndex(imageIndex);
  };

  const closeGallery = () => {
    setActiveProjectIndex(null);
    setActiveImageIndex(0);
  };

  const showPreviousImage = useCallback(() => {
    setActiveImageIndex((current) =>
      current === 0 ? activeImages.length - 1 : current - 1,
    );
  }, [activeImages.length]);

  const showNextImage = useCallback(() => {
    setActiveImageIndex((current) => (current + 1) % activeImages.length);
  }, [activeImages.length]);

  useEffect(() => {
    if (!activeProject) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft" && hasMultipleImages) {
        showPreviousImage();
      }

      if (event.key === "ArrowRight" && hasMultipleImages) {
        showNextImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, hasMultipleImages, showNextImage, showPreviousImage]);

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
              <button
                className="project-image-button"
                type="button"
                aria-label={`Open ${project.title} screenshots`}
                onClick={() => openGallery(index)}
              >
                <img
                  className="project-card-image"
                  src={project.images[0]}
                  alt={`${project.title} screenshot`}
                />
              </button>

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

      {activeProject && (
        <div
          className="project-gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} image gallery`}
          onClick={closeGallery}
        >
          <div
            className="project-gallery-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="gallery-image-frame">
              <img
                src={activeImages[activeImageIndex]}
                alt={`${activeProject.title} screenshot ${activeImageIndex + 1}`}
              />
            </div>

            {hasMultipleImages && (
              <div className="gallery-controls">
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={showPreviousImage}
                >
                  <ChevronLeft aria-hidden="true" />
                </button>

                <span>
                  {activeImageIndex + 1} / {activeImages.length}
                </span>

                <button
                  type="button"
                  aria-label="Next image"
                  onClick={showNextImage}
                >
                  <ChevronRight aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
