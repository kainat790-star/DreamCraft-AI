import "./Features.css";

function Features() {
  const features = [
    {
      title: "AI-Powered Roadmaps",
      desc: "Get personalized step-by-step plans to achieve your goals faster with smart AI guidance.",
      icon: "🚀",
    },
    {
      title: "Progress Tracking",
      desc: "Track your daily progress and stay consistent with real-time updates and insights.",
      icon: "📊",
    },
    {
      title: "Smart Reminders",
      desc: "Never miss a task with intelligent reminders designed to keep you on track.",
      icon: "⏰",
    },
    {
      title: "Goal Optimization",
      desc: "Our AI continuously improves your roadmap based on your performance.",
      icon: "🎯",
    },
    {
      title: "Community Support",
      desc: "Join like-minded people and grow together with shared motivation.",
      icon: "🤝",
    },
    {
      title: "Secure & Private",
      desc: "Your data is protected with top-level security and privacy standards.",
      icon: "🔒",
    },
  ];

  return (
    <section id="features">
      <div className="container">
        <h2 className="features-title">
          Powerful <span className="gradient-text">Features</span>
        </h2>

        <p className="features-subtitle">
          Everything you need to turn your dreams into reality with AI
        </p>

        <div className="features-grid">
          {features.map((item, index) => (
            <div className="glass-card feature-card fade-up" key={index}>
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;