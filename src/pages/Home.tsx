import { useEffect, useRef, useState } from "react";
import { Menu, X, Terminal, Radio } from "lucide-react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Certificates from "../components/Certificates";
import CyberCanvas from "../components/CyberCanvas";
import DevTerminal from "../components/DevTerminal";

export default function Home() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-15% 0px -65% 0px' });
    document.querySelectorAll('.tech-portfolio section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const projectsRef = useRef<HTMLDivElement | null>(null);

  // Scroll to Latest Projects if coming from a project page
  useEffect(() => {
    if (location.state?.scrollToLatest) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 50); // ensures Skills & Services are rendered first
      });
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="tech-portfolio relative min-h-screen bg-[#071311] text-white selection:bg-emerald-400 selection:text-slate-950 overflow-x-hidden">
      {/* Interactive Constellation / Data-Packet Background */}
      <CyberCanvas />

      {/* Floating Interactive Dev Terminal CLI */}
      <DevTerminal />

      <motion.div className="reading-progress" style={{ scaleX: reduceMotion ? scrollYProgress : smoothProgress }} />
      <a href="#about" className="skip-link">Skip to content</a>

      {/* Developer System Status HUD Top Bar */}
      <div className="hidden md:flex items-center justify-between border-b border-white/5 bg-[#050a10]/95 px-6 py-1.5 text-[11px] font-mono text-slate-400 backdrop-blur z-50 relative">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SYS: ALL SYSTEMS NORMAL
          </span>
          <span className="text-slate-700">|</span>
          <span>CAMPUS: MORATUWA IT</span>
          <span className="text-slate-700">|</span>
          <span className="text-emerald-300/90">INTERNSHIP STATUS: READY</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-400">
            <Radio size={12} className="text-emerald-400" /> LATENCY: ~18ms
          </span>
          <span className="text-slate-700">|</span>
          <span className="text-slate-300">SHORTCUT: <kbd className="rounded border border-slate-700 bg-slate-800 px-1 text-[10px] text-emerald-300 font-bold">Ctrl+K</kbd> TERMINAL</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav aria-label="Main navigation" onKeyDown={event => { if (event.key === 'Escape') { setMenuOpen(false); document.getElementById('mobile-menu-toggle')?.focus(); } }} className="fixed inset-x-0 top-0 md:top-[33px] z-40 border-b border-white/10 bg-[#071311]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" aria-label="Nathasha home" className="font-mono text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
            <span className="text-emerald-400">&lt;</span>NM<span className="text-emerald-400"> /&gt;</span>
          </a>
          <div className="hidden items-center gap-4 text-sm text-slate-300 md:flex lg:gap-8 font-medium">
            {['about', 'skills', 'services', 'latest-projects', 'certificates', 'contact'].map((section) => (
              <a key={section} href={`#${section}`} aria-current={activeSection === section ? 'location' : undefined} className="capitalize transition hover:text-emerald-300 font-mono text-xs tracking-wide">
                {section === 'services' ? 'Focus' : section.replace('-', ' ')}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button id="mobile-menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-toggle text-slate-300">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
            <a href="#contact" className="hidden md:inline-flex rounded-full border border-emerald-400/70 px-4 py-1.5 text-xs font-mono font-semibold text-emerald-300 transition hover:bg-emerald-400 hover:text-slate-950">Let's talk</a>
          </div>
        </div>
        {menuOpen && <div id="mobile-navigation" className="mobile-navigation">{['about', 'skills', 'services', 'latest-projects', 'certificates', 'contact'].map((section, index) => <a key={section} href={`#${section}`} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{section === 'services' ? 'Focus' : section.replace('-', ' ')}</a>)}</div>}
      </nav>

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects scrollRef={projectsRef} />
        <Certificates />
        <Contact />
      </div>

      <footer className="portfolio-footer relative z-10">
        <a href="#home" className="font-mono text-emerald-400 text-sm font-semibold">&lt;NM /&gt;</a>
        <p className="font-mono text-xs text-slate-400">Nathasha Manage · B.Sc. (Hons) IT Undergraduate · University of Moratuwa</p>
        <a href="#home" className="text-xs text-emerald-300 hover:underline font-mono">Back to top ↑</a>
      </footer>
    </div>
  );
}
