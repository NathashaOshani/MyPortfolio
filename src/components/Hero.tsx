import { useEffect, useState } from 'react';
import ProfilePortrait from './ProfilePortrait';
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, GitBranch, Terminal, Code2, CheckCircle2, RefreshCw, Pause, Play, Sparkles } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const availableRoles = ['Software Engineering', 'Quality Assurance', 'Full Stack Developer'];

const workflow = [
  { title: 'Build', description: 'Full-stack web applications', icon: Code2 },
  { title: 'Test', description: 'Functionality and user experience', icon: CheckCircle2 },
  { title: 'Improve', description: 'Code quality and reliability', icon: RefreshCw },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'tests'>('profile');
  const [testState, setTestState] = useState<'idle' | 'running' | 'passed'>('idle');

  const runHeroTests = () => {
    setTestState('running');
    setTimeout(() => {
      setTestState('passed');
    }, 750);
  };

  useEffect(() => {
    if (reduceMotion || paused) return;
    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % availableRoles.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [reduceMotion, paused]);

  return (
    <section id="home" className="tech-hero relative flex items-center overflow-hidden px-6 pb-16 pt-36 lg:px-10">
      {/* Moving Cyber Grid Horizon */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(rgba(52, 211, 153, 0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(52, 211, 153, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 35%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 35%, black 20%, transparent 80%)',
        }}
      />
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">

        <motion.div
          className="min-w-0 space-y-8"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
        >
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <p className="font-mono text-sm text-slate-400">Hello, world. I'm</p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                UoM IT Undergraduate
              </span>
            </div>
            <h1 className="hero-name">
              Nathasha<br /><span className="hero-gradient pr-2">Manage</span>
            </h1>
            <p className="max-w-xl text-xl font-medium leading-snug tracking-tight text-slate-200 sm:text-2xl">
              Software Engineering & QA Aspirant
            </p>
            <div className="hero-availability">
              <span className="status-dot" aria-hidden="true" />
              <div className="hero-availability-copy">
                <span className="hero-availability-label">Available for internships</span>
                <span className="sr-only">Software Engineering, Quality Assurance, and Full Stack Developer</span>
                <div className="hero-role-slot" aria-hidden="true">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span key={reduceMotion ? 'all' : roleIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: reduceMotion ? 0 : 0.2 }}>
                      {reduceMotion ? 'Software Engineering, QA & Full Stack Developer' : availableRoles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
              {!reduceMotion && <button type="button" className="hero-role-toggle" onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Resume role animation' : 'Pause role animation'}>{paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}</button>}
            </div>
            <p className="max-w-lg text-sm leading-7 text-slate-400 sm:text-base sm:leading-7">
              I study IT at the University of Moratuwa and build reliable, user-friendly web applications. I&rsquo;m seeking an SE or QA internship to put my development and testing skills into practice.
            </p>
            <ul aria-label="My development approach" className="grid gap-3 pt-2 sm:grid-cols-3">
              {workflow.map(({ title, description, icon: Icon }) => (
                <li key={title} className="flex items-start gap-3 rounded-xl border border-slate-700/60 bg-slate-900/40 p-3 sm:block sm:p-4 hover:border-emerald-500/40 transition-colors">
                  <Icon aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-emerald-400 sm:mb-3 sm:mt-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-100">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4">
            <a aria-label="LinkedIn profile" href="https://www.linkedin.com/in/nathasha-manage-9012a7290" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-400 text-emerald-400 transition-all hover:bg-emerald-400 hover:text-gray-900 shadow-md hover:shadow-emerald-500/25"><Linkedin size={20} /></a>
            <a aria-label="GitHub profile" href="https://github.com/NathashaOshani" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-400 text-emerald-400 transition-all hover:bg-emerald-400 hover:text-gray-900 shadow-md hover:shadow-emerald-500/25"><Github size={20} /></a>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#latest-projects" className="inline-flex items-center gap-3 rounded-xl bg-emerald-400 px-7 py-3.5 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-300">
              Explore my work <ArrowUpRight size={18} />
            </a>
            <a href="/Nathasha-Manage-CV.pdf" download="Nathasha-Manage-CV.pdf" className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-300">
              Download CV <Download size={16} />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="min-w-0 px-3 py-4 sm:px-4"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.12 }}
        >
          <div className="workspace-label">
            <Terminal size={14} />
            <span>THE DEVELOPER WORKSPACE</span>
            <span className="ml-auto text-emerald-400">01 / LIVE IDE</span>
          </div>
          <div className="developer-window">
            <div className="window-toolbar">
              <span aria-hidden="true" className="window-dots"><i /><i /><i /></span>
              <span>nathasha / {activeTab === 'profile' ? 'profile.tsx' : 'candidate_spec.test.ts'}</span>
              <span className="text-emerald-400 font-bold">{activeTab === 'profile' ? 'TSX' : 'TEST'}</span>
            </div>

            {/* Interactive Editor Tabs */}
            <div className="editor-tabs flex items-center justify-between">
              <div className="flex">
                <button
                  type="button"
                  onClick={() => setActiveTab('profile')}
                  aria-selected={activeTab === 'profile'}
                  className={`border-r border-t-2 px-4 py-2.5 font-mono text-[11px] transition-colors ${
                    activeTab === 'profile'
                      ? 'border-r-[#263246] border-t-emerald-400 bg-[#152030] text-emerald-200 font-semibold'
                      : 'border-r-[#263246] border-t-transparent bg-[#0b121d] text-slate-400 hover:text-slate-200'
                  }`}
                >
                  profile.tsx
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('tests')}
                  aria-selected={activeTab === 'tests'}
                  className={`border-r border-t-2 px-4 py-2.5 font-mono text-[11px] flex items-center gap-1.5 transition-colors ${
                    activeTab === 'tests'
                      ? 'border-r-[#263246] border-t-emerald-400 bg-[#152030] text-emerald-200 font-semibold'
                      : 'border-r-[#263246] border-t-transparent bg-[#0b121d] text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  candidate_spec.test.ts
                </button>
              </div>

              {activeTab === 'tests' && (
                <button
                  type="button"
                  onClick={runHeroTests}
                  disabled={testState === 'running'}
                  className="mr-3 flex items-center gap-1.5 rounded bg-emerald-500/20 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition disabled:opacity-50"
                >
                  <Play size={10} className={testState === 'running' ? 'animate-spin' : ''} />
                  {testState === 'running' ? 'Running...' : 'Run Tests'}
                </button>
              )}
            </div>

            {/* Tab 1: Profile */}
            {activeTab === 'profile' && (
              <>
                <div className="workspace-content">
                  <div className="relative portrait-stage">
                    <ProfilePortrait priority />
                  </div>
                </div>
                <div className="profile-code font-mono text-xs">
                  <p><span className="text-violet-300">const</span> candidate = {'{'}</p>
                  <p className="pl-4">major: <span className="text-emerald-300">'Information Technology'</span>,</p>
                  <p className="pl-4">focus: <span className="text-emerald-300">['Software Engineering', 'QA']</span>,</p>
                  <p className="pl-4">status: <span className="text-emerald-300">'Ready for Internship'</span></p>
                  <p>{'};'}</p>
                </div>
              </>
            )}

            {/* Tab 2: Interactive QA Test Suite */}
            {activeTab === 'tests' && (
              <div className="p-4 font-mono text-xs space-y-3 bg-[#0d1624] min-h-[380px] flex flex-col justify-between">
                <div className="space-y-1.5 text-slate-300 leading-relaxed overflow-x-auto">
                  <p className="text-slate-500">// Jest / QA Automated Verification Suite</p>
                  <p><span className="text-violet-400">describe</span>(<span className="text-emerald-300">"Candidate: Nathasha Manage"</span>, () =&gt; {'{'}</p>
                  <div className="pl-4 space-y-1">
                    <p><span className="text-cyan-400">test</span>(<span className="text-amber-200">"demonstrates full-stack web engineering"</span>, () =&gt; {'{'}</p>
                    <p className="pl-4 text-slate-400">expect(stack).toContain([<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'ASP.NET'</span>, <span className="text-emerald-300">'Node'</span>]);</p>
                    <p>{'});'}</p>
                    <p><span className="text-cyan-400">test</span>(<span className="text-amber-200">"maintains clean QA testing mindset"</span>, () =&gt; {'{'}</p>
                    <p className="pl-4 text-slate-400">expect(testCoverage).toBeGreaterThan(<span className="text-violet-300">90</span>);</p>
                    <p>{'});'}</p>
                    <p><span className="text-cyan-400">test</span>(<span className="text-amber-200">"ready for internship contribution"</span>, () =&gt; {'{'}</p>
                    <p className="pl-4 text-slate-400">expect(internshipPrepared).toBe(<span className="text-violet-300">true</span>);</p>
                    <p>{'});'}</p>
                  </div>
                  <p>{'});'}</p>
                </div>

                {/* Test Results Output */}
                <div className="rounded border border-slate-800 bg-[#070d17] p-3">
                  {testState === 'idle' && (
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Click [Run Tests] above to execute verification spec.</span>
                      <button
                        type="button"
                        onClick={runHeroTests}
                        className="text-emerald-400 underline font-semibold cursor-pointer"
                      >
                        Run Now
                      </button>
                    </div>
                  )}

                  {testState === 'running' && (
                    <div className="flex items-center gap-2 text-xs text-amber-300">
                      <RefreshCw size={12} className="animate-spin text-amber-400" />
                      <span>Executing candidate_spec.test.ts (3 assertions)...</span>
                    </div>
                  )}

                  {testState === 'passed' && (
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                          <CheckCircle2 size={14} /> 3 TESTS PASSED (124ms)
                        </span>
                        <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                          100% SUCCESS
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Status: <span className="text-emerald-300 font-semibold">Ready for Software Engineering & QA roles</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="workspace-status">
              <span><GitBranch size={12} /> main</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Tests passing &#10022; Ready to intern
              </span>
            </div>
          </div>
          <a className="hero-scroll" href="#about">
            <ArrowDownRight size={16} /> Scroll to explore <span>01 &mdash; 06</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
