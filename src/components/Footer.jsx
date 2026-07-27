import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* Logo / Brand */}
        <div className="footer-brand">
          <h2 className="gradient-text">DreamCraft AI</h2>
          <p>
            Transform your dreams into reality with the power of AI.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 DreamCraft AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;