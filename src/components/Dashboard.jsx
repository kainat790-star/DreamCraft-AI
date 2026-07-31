import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const cards = [
    {
      title: "Active Plans",
      text: "5 active goal paths currently monitored.",
      action: "/checkout",
      button: "Upgrade Plan",
    },
    {
      title: "Progress",
      text: "68% completion rate across your current milestones.",
      action: "/login",
      button: "View Progress",
    },
    {
      title: "AI Recommendations",
      text: "3 new roadmap suggestions based on your recent activity.",
      action: "/login",
      button: "See Suggestions",
    },
    {
      title: "Success Score",
      text: "92/100 AI confidence rating for your current plan.",
      action: "/login",
      button: "Check Score",
    },
  ];

  return (
    <section id="dashboard" className="dashboard-section fade-up">
      <div className="container dashboard-container">
        <div className="dashboard-header">
          <h2>
            Complete <span className="gradient-text">Dashboard</span>
          </h2>
          <p>Track your AI roadmap progress, active goals, and smart insights all in one place.</p>
        </div>

        <div className="dashboard-grid">
          {cards.map((card, idx) => (
            <div className="glass-card dashboard-card" key={idx}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button className="btn-primary" onClick={() => navigate(card.action)}>
                {card.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
