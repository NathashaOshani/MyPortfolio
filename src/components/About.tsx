import { ArrowUpRight, GraduationCap, Users, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: 'Year 01',
    phase: 'Core Foundations',
    status: 'COMPLETED',
    skills: 'C, Java, OOP, Data Structures, Algorithms & Web Basics',
  },
  {
    year: 'Year 02',
    phase: 'Full-Stack & Systems',
    status: 'COMPLETED',
    skills: 'React, Node.js, ASP.NET Core, SQL Server, MongoDB & IoT',
  },
  {
    year: 'Year 03',
    phase: 'Industry Experience & Career Growth',
    status: 'ACTIVE FOCUS',
    skills: 'Securing SE / QA internships, gaining real-world industry experience, and building future career skills',
    current: true,
  },
  {
    year: 'Year 04 & Beyond',
    phase: 'Professional Engineering',
    status: 'FUTURE VISION',
    skills: 'Graduation, full-time engineering contribution, and continuous technological innovation',
    target: true,
  },
];


export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="about-section py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="about-heading-row">
          <div>
            <p className="section-kicker">01 / THE PERSON BEHIND THE CODE</p>
            <h2 id="about-heading" className="font-bold text-white">
              About <span className="text-emerald-400">Me</span>
            </h2>
          </div>
          <span className="about-margin-note font-mono text-xs text-slate-400 flex items-center gap-2">
            <span className="status-dot animate-ping" /> Continuous Integration & Learning
          </span>
        </div>

        <div className="about-narrative space-y-12">
          <div className="about-story">
            <span className="about-small-label">Curiosity is my starting point.</span>
            <h3 className="about-statement">
              Understand it. Build it.<br />
              <span>Make it better.</span>
            </h3>
            <p className="about-description">
              I&rsquo;m a <strong>third-year IT undergraduate</strong> at the <strong>University of Moratuwa</strong>. I enjoy connecting what people see on screen with the ideas and logic that make it work.
            </p>
            <p className="about-description">
              My interests sit where <strong className="about-highlight">full-stack development</strong> meets <strong className="about-highlight">software quality assurance</strong>. I&rsquo;m learning to build with care, ask better questions, and turn complex problems into useful, reliable experiences.
            </p>
            <a href="#latest-projects" className="about-project-link">
              See what I&rsquo;m building <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>

          {/* 🚀 MOVING IT GRAPHICAL ANIMATION: Undergraduate Learning Pipeline */}
          <div className="rounded-2xl border border-slate-800 bg-[#0a121d] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-8 font-mono text-xs">
              <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Terminal size={14} /> ACADEMIC & TECHNICAL PROGRESSION PIPELINE
              </span>
              <span className="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                UoM B.Sc. IT
              </span>
            </div>

            {/* Glowing animated pipeline track */}
            <div className="relative">
              {/* Desktop Connecting Line */}
              <div className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-1 bg-slate-800 overflow-hidden z-0">
                <div className="h-full w-24 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-[flowRight_2.8s_ease-in-out_infinite]" />
              </div>

              {/* Grid of Milestone Nodes */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {milestones.map((m) => (
                  <div
                    key={m.year}
                    className={`rounded-xl p-4 border transition-all duration-300 ${
                      m.current
                        ? 'border-emerald-500/60 bg-emerald-950/20 shadow-lg shadow-emerald-500/10'
                        : m.target
                        ? 'border-cyan-500/40 bg-cyan-950/10 border-dashed'
                        : 'border-slate-800 bg-slate-900/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                        {m.current && <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />}
                        {m.year}
                      </span>
                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded font-semibold ${
                          m.current
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : m.target
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {m.status}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-100 mb-1">{m.phase}</h4>
                    <p className="text-[11px] font-mono text-slate-400 leading-relaxed">{m.skills}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pipeline footer note */}
            <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-slate-500 pt-3 border-t border-slate-800/60">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-emerald-400" /> Continuous learning rate: High
              </span>
              <span className="text-emerald-300/80">SE & QA Intern Seeking</span>
            </div>
          </div>

          <div className="about-education">
            <aside className="about-campus" aria-labelledby="about-profile-heading">
              <img className="about-campus-image" src="/moratuwa-campus.jpg" alt="" loading="lazy" decoding="async" />
              <div className="about-campus-copy">
                <span className="about-campus-label">
                  <GraduationCap size={18} aria-hidden="true" /> Currently learning at
                </span>
                <h3 id="about-profile-heading">
                  University of Moratuwa<span className="text-emerald-400">.</span>
                </h3>
                <p>B.Sc. (Hons) in Information Technology</p>
                <span className="about-study-year">Third-year undergraduate</span>
              </div>
            </aside>
          </div>

          <div className="about-community">
            <span className="about-community-icon">
              <Users size={23} aria-hidden="true" />
            </span>
            <div>
              <span className="about-small-label">Beyond the classroom</span>
              <h3>Good software starts with people.</h3>
              <p>
                Through the <strong>Leo Club of University of Moratuwa&rsquo;s Membership Growth Committee</strong>, I develop communication, teamwork, and organizational skills beyond the classroom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
