import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">🚀 DreamCraft AI</h2>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/#dashboard" onClick={() => setMenuOpen(false)}>
          Dashboard
        </Link>
        <Link to="/#about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/#features" onClick={() => setMenuOpen(false)}>
          Features
        </Link>
        <Link to="/#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>
          Login
        </Link>
        <Link to="/signup" onClick={() => setMenuOpen(false)}>
          Signup
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
