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
        Build Your <span className="gradient-text">AI Learning Roadmap</span>
      </h1>

      <p className="hero-text">
        DreamCraft AI creates personalized learning roadmaps based on your goals,
        current skill level, study time, and preferred learning duration. Get a
        structured AI-powered plan in seconds.
      </p>

      <div className="hero-buttons">
        <button className="hero-btn primary" onClick={() => scrollToSection("ai-chat")}>
          🚀 Generate My Roadmap
        </button>

        <button className="hero-btn secondary" onClick={() => scrollToSection("features")}>
          Explore Features
        </button>
      </div>
    </section>
  );
}

export default Hero;