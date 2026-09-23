import { useState } from 'react';
import { Code2, Database, ShieldCheck, Laptop, Monitor, Server, Sparkles, PenTool, ArrowUpRight, Terminal, GitBranch, Cpu, Layers } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const skillCategories = [
  { title: 'Languages', icon: Code2, description: 'The foundations behind application logic and problem solving.', skills: ['C', 'C#', 'Java', 'Python', 'JavaScript', 'TypeScript'] },
  { title: 'Frontend Development', icon: Monitor, description: 'Interfaces, components, and the details of the user experience.', skills: ['React', 'Vite', 'Material UI', 'HTML', 'CSS', 'Axios', 'Zod'] },
  { title: 'Backend & APIs', icon: Server, description: 'Application services, API communication, and real-time connections.', skills: ['ASP.NET Core Web API', 'Node.js', 'Express.js', 'RESTful APIs', 'SignalR'] },
  { title: 'Databases & ORM', icon: Database, description: 'Organizing application data and connecting it to code.', skills: ['Microsoft SQL Server', 'MongoDB', 'Entity Framework Core', 'Mongoose', 'Database Design'] },
  { title: 'Authentication & Security', icon: ShieldCheck, description: 'Identity, authentication, and access within applications.', skills: ['JWT', 'BCrypt', 'OAuth 2.0', 'Google Sign-In', 'Role-Based Access Control'] },
  { title: 'Embedded Systems & Tools', icon: Laptop, description: 'Hardware components and the tools that support my workflow.', skills: ['ESP32', 'ESP32-CAM', 'R503 Fingerprint Sensor', 'PIR Sensor', 'Git', 'GitHub', 'Postman', 'Swagger', 'Visual Studio', 'VS Code'] },
  { title: 'Design Tools', icon: PenTool, description: 'A space for exploring interfaces and visual ideas.', skills: ['Figma'] },
  { title: 'AI Tools', icon: Sparkles, description: 'AI assistants in my development toolkit.', skills: ['ChatGPT', 'Codex', 'Copilot', 'Claude'] },
];

const marqueeSkills = [
  'React 18', 'TypeScript', 'ASP.NET Core', 'Node.js', 'C#', 'Java', 'Python', 'MS SQL Server',
  'MongoDB', 'RESTful APIs', 'SignalR', 'JWT Auth', 'ESP32 IoT', 'Git & GitHub', 'Postman', 'Vite',
  'Tailwind CSS', 'Entity Framework', 'Swagger', 'Docker',
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeCategory = skillCategories[activeIndex];
  const ActiveIcon = activeCategory.icon;

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="skills-intro mb-8">
          <div>
            <span className="skills-eyebrow flex items-center gap-2">
              <Terminal size={15} aria-hidden="true" />
              <span>MY DEVELOPMENT ENVIRONMENT</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            </span>
            <h2 id="skills-heading" className="font-bold text-white">Technical <span className="text-emerald-400">Skills</span></h2>
            <p>From the interface to the API.<br className="hidden sm:block" /> The tools I use to bring ideas to life.</p>
          </div>
          <a href="#latest-projects" className="skills-project-link">See them in action <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>

        {/* 🚀 MOVING IT MOTION: Infinite Tech Stream Marquee */}
        <div className="relative w-full overflow-hidden rounded-xl border border-slate-800/80 bg-[#0a121d] py-3 mb-10 shadow-inner">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a121d] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a121d] to-transparent z-10" />
          
          <div className="animate-marquee flex items-center gap-3">
            {[...marqueeSkills, ...marqueeSkills].map((item, idx) => (
              <span
                key={`${item}-${idx}`}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/60 px-3.5 py-1.5 font-mono text-xs text-slate-300 hover:border-emerald-400/60 hover:text-emerald-300 transition-colors shrink-0 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-workspace">
          <div className="skills-categories" role="group" aria-label="Skill categories">
            {skillCategories.map(({ title, icon: Icon }, index) => (
              <button
                key={title}
                type="button"
                aria-pressed={activeIndex === index}
                aria-controls="skills-detail"
                onClick={() => setActiveIndex(index)}
                className={`skills-category transition-all duration-200 ${
                  activeIndex === index ? 'shadow-md shadow-emerald-500/10' : ''
                }`}
              >
                <Icon size={19} aria-hidden="true" />
                <span>{title}</span>
                <span className="skills-terminal-prompt" aria-hidden="true">&gt;_</span>
              </button>
            ))}
          </div>

          <div id="skills-detail" role="region" aria-labelledby="skill-category-heading" aria-live="polite" aria-atomic="true" className="skills-detail">
            <div className="skills-window-bar" aria-hidden="true">
              <span className="skills-window-dots"><i /><i /><i /></span>
              <span>toolkit / explorer</span>
              <Code2 size={16} />
            </div>
            <motion.div className="skills-content" key={activeCategory.title} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.25 }}>
              <div className="skills-command" aria-hidden="true"><span>~/skills $</span> explore --category {String(activeIndex + 1).padStart(2, '0')}<span className="skills-cursor" /></div>
              <div className="skills-detail-heading">
                <span className="skills-category-icon"><ActiveIcon size={27} strokeWidth={1.5} aria-hidden="true" /></span>
                <h3 id="skill-category-heading">{activeCategory.title}</h3>
              </div>
              <p className="skills-description">{activeCategory.description}</p>
              <ul className="skills-tool-list">
                {activeCategory.skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.22, delay: reduceMotion ? 0 : index * 0.045 }}
                    className="hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all"
                  >
                    <span aria-hidden="true" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <div className="skills-status-bar">
              <span><GitBranch size={14} aria-hidden="true" /> always-learning</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {activeCategory.skills.length} tools verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
