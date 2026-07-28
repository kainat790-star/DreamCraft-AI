import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending message...");

    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setStatus("Thanks! Your message has been sent.");
    }, 500);
  };

  return (
    <section id="contact">
      <div className="container contact-container">
        <div className="contact-text">
          <h2>
            Get in <span className="gradient-text">Touch</span>
          </h2>

          <p>
            Have questions or want to start your journey? Fill out the form and
            we’ll get back to you as soon as possible.
          </p>

          <p>Email: support@dreamcraft.ai</p>
          <p>Phone: +1 234 567 890</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button className="btn-primary" type="submit">
            Send Message
          </button>
          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;