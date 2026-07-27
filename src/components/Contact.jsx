import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="container contact-container">
        
        {/* Left Side */}
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

        {/* Right Side (Form) */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button className="btn-primary">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;