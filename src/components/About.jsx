import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="container about-container">
        
        {/* Left Side */}
        <div className="about-text">
          <h2>
            About <span className="gradient-text">DreamCraft AI</span>
          </h2>

          <p>
            DreamCraft AI is designed to help you turn your dreams into reality
            with the power of artificial intelligence. We provide personalized
            roadmaps, smart tracking, and continuous optimization so you can
            achieve your goals faster and smarter.
          </p>

          <p>
            Whether you're building a career, learning new skills, or chasing
            big dreams — our platform adapts to your journey and keeps you on
            the right path.
          </p>

          <button className="btn-primary">
            Learn More
          </button>
        </div>

        {/* Right Side */}
        <div className="about-cards">
          <div className="glass-card">
            <h3>🎯 Our Mission</h3>
            <p>
              Empower individuals with AI tools to achieve their full potential.
            </p>
          </div>

          <div className="glass-card">
            <h3>🚀 Our Vision</h3>
            <p>
              Become the world's leading platform for goal achievement.
            </p>
          </div>

          <div className="glass-card">
            <h3>🔒 Our Values</h3>
            <p>
              Innovation, privacy, and user success are at our core.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;