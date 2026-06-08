import "./Contact.css";
import emailjs from "@emailjs/browser";
import { Mail } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const initialFormValues = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setStatusMessage("Email service is not configured yet.");
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
          time: new Date().toLocaleString(),
          reply_to: formValues.email,
        },
        {
          publicKey,
        },
      );

      setFormValues(initialFormValues);
      setStatus("success");
      setStatusMessage("Message sent. I will get back to you soon.");
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
      setStatusMessage("Message could not be sent. Please try again.");
    }
  };

  const isSending = status === "sending";

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

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>NAME</span>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                required
                disabled={isSending}
              />
            </label>

            <label>
              <span>EMAIL</span>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                required
                disabled={isSending}
              />
            </label>

            <label>
              <span>MESSAGE</span>
              <textarea
                name="message"
                value={formValues.message}
                onChange={handleInputChange}
                required
                disabled={isSending}
              />
            </label>

            {statusMessage && (
              <p className={`contact-form-status ${status}`} role="status">
                {statusMessage}
              </p>
            )}

            <button type="submit" disabled={isSending}>
              {isSending ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
