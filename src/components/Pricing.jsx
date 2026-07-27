import "./Pricing.css";

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      desc: "Perfect for beginners",
      features: [
        "Basic roadmap",
        "Limited tracking",
        "Community access",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$19/mo",
      desc: "Best for serious users",
      features: [
        "Advanced AI roadmap",
        "Full progress tracking",
        "Smart reminders",
        "Priority support",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "$49/mo",
      desc: "For high achievers",
      features: [
        "Everything in Pro",
        "1-on-1 AI coaching",
        "Advanced analytics",
        "Custom goal optimization",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing">
      <div className="container">
        <h2 className="pricing-title">
          Simple <span className="gradient-text">Pricing</span>
        </h2>

        <p className="pricing-subtitle">
          Choose the plan that fits your journey
        </p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              className={`glass-card pricing-card ${
                plan.highlight ? "highlight" : ""
              }`}
              key={index}
            >
              <h3>{plan.name}</h3>
              <h1 className="price">{plan.price}</h1>
              <p className="desc">{plan.desc}</p>

              <ul>
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <button className="btn-primary">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;