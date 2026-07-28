import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Dashboard from "../components/Dashboard";
import About from "../components/About";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import AIChat from "../components/AIChat";
import Contact from "../components/Contact";

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-up");
    fadeElements.forEach((el) => el.classList.add("show"));
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div className="app">
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <Hero />
      <Dashboard />
      <About />
      <Features />
      <Testimonials />
      <Pricing />
      <AIChat />
      <Contact />
    </div>
  );
}

export default HomePage;
