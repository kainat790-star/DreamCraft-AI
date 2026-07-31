import "./Features.css";

function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Roadmap Generator",
      desc: "Generate a personalized learning roadmap based on your goals, experience level, and study schedule.",
    },
    {
      icon: "🎯",
      title: "Personalized Learning Plans",
      desc: "Receive a customized weekly learning plan designed specifically for your chosen career path.",
    },
    {
      icon: "📚",
      title: "Smart Resource Recommendations",
      desc: "Discover high-quality free courses, documentation, and tutorials recommended by AI.",
    },
    {
      icon: "💻",
      title: "Practice Projects",
      desc: "Build real-world projects at every stage to strengthen your portfolio and practical skills.",
    },
    {
      icon: "🚀",
      title: "Career Guidance",
      desc: "Get AI-powered career advice, interview preparation tips, and technology recommendations.",
    },
    {
      icon: "⚡",
      title: "Instant AI Responses",
      desc: "Generate structured learning roadmaps and guidance in just a few seconds.",
    },
  ];

  return (
    <section id="features">
      <div className="container">
        <h2 className="features-title">
          Why Choose <span className="gradient-text">DreamCraft AI?</span>
        </h2>

        <p className="features-subtitle">
          An AI-powered platform that helps you learn smarter with personalized
          roadmaps, practical projects, and career-focused guidance.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="glass-card feature-card fade-up" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;