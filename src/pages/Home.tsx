import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const location = useLocation();
  const projectsRef = useRef<HTMLDivElement | null>(null);

  // Scroll to Latest Projects if coming from a project page
  useEffect(() => {
    if (location.state?.scrollToLatest) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 50); // ensures Skills & Services are rendered first
      });
      // Optional: clear state so it doesn't repeat on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="bg-gray-900">
      <Hero />
      <About />
      <Skills preventAutoOpen={location.state?.scrollToLatest} />
      <Services />
      <Projects scrollRef={projectsRef} />
      <Contact />
    </div>
  );
}
