import "./App.css";
import { useEffect } from "react";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import AIChat from "./components/AIChat";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="app">
      {/* Glow Background */}
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <AIChat />
      <Footer />
    </div>
  );
}

export default App;