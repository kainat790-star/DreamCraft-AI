import "./Testimonials.css";

function Testimonials() {
  const data = [
    {
      name: "Ali Khan",
      role: "Student",
      review:
        "DreamCraft AI completely changed how I plan my goals. The roadmap feature is amazing!",
    },
    {
      name: "Sara Ahmed",
      role: "Freelancer",
      review:
        "I love the progress tracking. It keeps me motivated every single day!",
    },
    {
      name: "Usman Tariq",
      role: "Entrepreneur",
      review:
        "This platform is a game changer. It feels like having a personal coach.",
    },
  ];

  return (
    <section id="testimonials">
      <div className="container">
        <h2 className="testimonials-title">
          What Our <span className="gradient-text">Users Say</span>
        </h2>

        <p className="testimonials-subtitle">
          Real experiences from people using DreamCraft AI
        </p>

        <div className="testimonials-grid">
          {data.map((item, index) => (
            <div className="glass-card testimonial-card" key={index}>
              <p className="review">“{item.review}”</p>

              <div className="user-info">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;