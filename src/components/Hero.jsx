import "./Hero.css";

function Hero() {
  const scrollToAI = () => {
    const section = document.getElementById("ai-chat");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
        <button className="hero-btn primary" onClick={scrollToAI}>
          🚀 Generate My Roadmap
        </button>

        <button
          className="hero-btn secondary"
          onClick={() =>
            document
              .getElementById("features")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore Features
        </button>
      </div>
    </section>
  );
}

export default Hero;