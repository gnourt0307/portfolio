import "./Contact.css";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-content">
          <div className="contact-left">
            <header className="contact-heading">
              <h2>
                Let&apos;s build
                <br />
                something.
              </h2>
              <p>
                Got a project, a question, or want to say hi? Reach me directly
                or use the form.
              </p>
            </header>

            <div className="contact-list">
              <a className="contact-link-card">
                <Mail className="contact-square" />
                <span>
                  <strong>EMAIL</strong>
                  <em>truongtkls8@gmail.com</em>
                </span>
              </a>
              <a
                className="contact-link-card"
                href="https://github.com/gnourt0307"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="contact-square" />
                <span>
                  <strong>GITHUB</strong>
                  <em>github.com/gnourt0307</em>
                </span>
              </a>
              <a
                className="contact-link-card"
                href="https://linkedin.com/in/gnourt0307"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="contact-square" />
                <span>
                  <strong>LINKED IN</strong>
                  <em>linkedin.com/in/gnourt0307</em>
                </span>
              </a>
              <a
                className="contact-link-card"
                href="https://linkcv.com/gnourt0307"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFileAlt className="contact-square" />
                <span>
                  <strong>MY CV</strong>
                  <em>linkcv.com/gnourt0307</em>
                </span>
              </a>
            </div>
          </div>

          <form className="contact-form">
            <label>
              <span>NAME</span>
              <input type="text" name="name" />
            </label>

            <label>
              <span>EMAIL</span>
              <input type="email" name="email" />
            </label>

            <label>
              <span>MESSAGE</span>
              <textarea name="message" />
            </label>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
