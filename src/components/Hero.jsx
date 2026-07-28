import "./Hero.css";

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="hero">
      <h1 className="hero-title">
        Transform Your Dreams Into{" "}
        <span className="gradient-text">Reality</span>
      </h1>

      <p className="hero-text">
        DreamCraft AI creates personalized roadmaps, tracks your progress,
        and helps you achieve your goals with the power of Artificial Intelligence.
      </p>

      <div className="hero-buttons">
        <button
          className="hero-btn primary"
          onClick={() => scrollToSection("dashboard")}
        >
          Start Your Journey
        </button>
        <button
          className="hero-btn secondary"
          onClick={() => scrollToSection("features")}
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;