import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, ChevronRight, CornerDownLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
}

const ASCII_LOGO = `
  _   _       _   _               _             __  __                                
 | \\ | | __ _| |_| |__   __ _ ___| |__   __ _  |  \\/  | __ _ _ __   __ _  __ _  ___   
 |  \\| |/ _\` | __| '_ \\ / _\` / __| '_ \\ / _\` | | |\\/| |/ _\` | '_ \\ / _\` |/ _\` |/ _ \\  
 | |\\  | (_| | |_| | | | (_| \\__ \\ | | | (_| | | |  | | (_| | | | | (_| | (_| |  __/  
 |_| \\_|\\__,_|\\__|_| |_|\\__,_|___/_| |_|\\__,_| |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|  
                                                                         |___/        
`;

export default function DevTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 'welcome',
      command: 'init',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="font-semibold text-emerald-400">Welcome to NathashaOS Terminal v2.4 (Moratuwa IT)</p>
          <p className="text-xs text-slate-400">Type <span className="font-mono text-emerald-300 font-bold">help</span> to view available commands or <span className="font-mono text-emerald-300 font-bold">neofetch</span> for system info.</p>
        </div>
      ),
    },
  ]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Keyboard shortcut Ctrl+K or ` to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [isOpen, history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    setCommandList((prev) => [...prev, cmdText]);
    setHistoryIdx(-1);

    let outputNode: React.ReactNode;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-emerald-400 font-semibold mb-2">Available System Commands:</p>
            <div className="grid grid-cols-[140px_1fr] gap-y-1 font-mono">
              <span className="text-emerald-300">neofetch / fetch</span>
              <span className="text-slate-400">Display IT undergraduate system specs & ASCII logo</span>
              <span className="text-emerald-300">skills</span>
              <span className="text-slate-400">List technical skills & developer stack</span>
              <span className="text-emerald-300">projects</span>
              <span className="text-slate-400">Browse highlighted engineering projects</span>
              <span className="text-emerald-300">about</span>
              <span className="text-slate-400">Display bio, university, and current pursuits</span>
              <span className="text-emerald-300">test</span>
              <span className="text-slate-400">Execute simulated automated test suite</span>
              <span className="text-emerald-300">contact</span>
              <span className="text-slate-400">Direct contact info and links</span>
              <span className="text-emerald-300">sudo hire-me</span>
              <span className="text-slate-400">Launch hiring clearance protocol</span>
              <span className="text-emerald-300">clear</span>
              <span className="text-slate-400">Clear terminal console</span>
              <span className="text-emerald-300">exit</span>
              <span className="text-slate-400">Close terminal window</span>
            </div>
          </div>
        );
        break;

      case 'neofetch':
      case 'fetch':
        outputNode = (
          <div className="space-y-2 text-xs">
            <pre className="text-[9px] sm:text-[10px] leading-tight text-emerald-400 font-mono hidden sm:block overflow-x-auto">
              {ASCII_LOGO}
            </pre>
            <div className="grid grid-cols-[110px_1fr] gap-x-2 gap-y-1 font-mono text-slate-300 pt-1">
              <span className="text-emerald-400 font-semibold">User:</span>
              <span>nathasha@uom-it</span>
              <span className="text-emerald-400 font-semibold">Host:</span>
              <span>University of Moratuwa (B.Sc. Hons in IT)</span>
              <span className="text-emerald-400 font-semibold">Current Level:</span>
              <span>3rd Year Undergraduate (Internship Seeking)</span>
              <span className="text-emerald-400 font-semibold">Focus Areas:</span>
              <span>Software Engineering, QA, Full-Stack Development</span>
              <span className="text-emerald-400 font-semibold">Core Stack:</span>
              <span>React, TypeScript, ASP.NET Core, Node.js, SQL, MongoDB</span>
              <span className="text-emerald-400 font-semibold">Status:</span>
              <span className="text-emerald-300">🟢 Available for Software Engineering / QA Internships</span>
              <span className="text-emerald-400 font-semibold">Uptime:</span>
              <span>3+ Years of Continuous Learning & Building</span>
            </div>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <div>
              <span className="text-emerald-400 font-bold">Languages: </span>
              <span className="text-slate-300">TypeScript, JavaScript, Java, C#, C, Python</span>
            </div>
            <div>
              <span className="text-emerald-400 font-bold">Frontend: </span>
              <span className="text-slate-300">React, Vite, HTML5, CSS3/Tailwind, Material UI, Axios, Zod</span>
            </div>
            <div>
              <span className="text-emerald-400 font-bold">Backend & APIs: </span>
              <span className="text-slate-300">ASP.NET Core Web API, Node.js, Express.js, REST APIs, SignalR</span>
            </div>
            <div>
              <span className="text-emerald-400 font-bold">Databases & Security: </span>
              <span className="text-slate-300">MS SQL Server, MongoDB, EF Core, JWT, BCrypt, OAuth 2.0</span>
            </div>
            <div>
              <span className="text-emerald-400 font-bold">IoT & Tools: </span>
              <span className="text-slate-300">ESP32, Sensors, Git/GitHub, Postman, Swagger, Visual Studio</span>
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            <p className="text-emerald-400 font-semibold">Highlighted Projects:</p>
            <div className="space-y-1.5 text-slate-300">
              <div>
                <span className="text-emerald-300 font-bold">1. Unified Booking Engine (UBE)</span> - Multi-vendor booking platform with portals & real-time updates.
              </div>
              <div>
                <span className="text-emerald-300 font-bold">2. DailyDish</span> - Full-stack MERN food delivery system with live order tracking.
              </div>
              <div>
                <span className="text-emerald-300 font-bold">3. TaskFlow</span> - AI-powered task planner with Gemini API & smart goal breakdown.
              </div>
              <div>
                <span className="text-emerald-300 font-bold">4. Gate Sentinel</span> - Hardware IoT access system with ESP32 & biometric fingerprinting.
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-2">👉 Tip: Click on "Explore my work" on the site to view interactive case studies.</p>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="text-xs leading-relaxed text-slate-300 space-y-2">
            <p>
              I am an enthusiastic <strong className="text-emerald-400">Information Technology undergraduate</strong> at the <strong className="text-slate-100">University of Moratuwa</strong>.
            </p>
            <p>
              My passion is building reliable web applications and ensuring their performance through methodical Quality Assurance. I value clean code, intuitive user experiences, and continuous technical growth.
            </p>
          </div>
        );
        break;

      case 'test':
        outputNode = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-slate-400">Running candidate verification test suite...</p>
            <p className="text-emerald-400">✔ PASS test/cs-fundamentals.test.ts (24ms)</p>
            <p className="text-emerald-400">✔ PASS test/fullstack-delivery.test.ts (41ms)</p>
            <p className="text-emerald-400">✔ PASS test/qa-testing-mindset.test.ts (19ms)</p>
            <p className="text-emerald-400">✔ PASS test/internship-readiness.test.ts (32ms)</p>
            <div className="pt-2 border-t border-slate-700/60 flex items-center gap-3">
              <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">Test Suites: 4 passed, 4 total</span>
              <span className="text-slate-400">Time: 116ms</span>
            </div>
          </div>
        );
        break;

      case 'sudo hire-me':
      case 'hire-me':
      case 'hire':
        outputNode = (
          <div className="space-y-2 text-xs font-mono bg-emerald-950/40 p-3 rounded-lg border border-emerald-500/40">
            <div className="flex items-center gap-2 text-emerald-300 font-bold">
              <Sparkles size={16} />
              <span>ACCESS GRANTED: Candidate Qualified for SE & QA Roles!</span>
            </div>
            <p className="text-slate-300">
              Ready to collaborate? Let's connect directly via email or LinkedIn:
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="mailto:nathashamanage2002@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-400 text-slate-950 rounded font-semibold hover:bg-emerald-300 transition"
              >
                Send Email ↗
              </a>
              <a
                href="https://www.linkedin.com/in/nathasha-manage-9012a7290"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 border border-emerald-400/50 text-emerald-300 rounded hover:bg-emerald-900/40 transition"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-emerald-400 font-semibold">Contact Channels:</p>
            <p>📧 Email: <a href="mailto:nathashamanage2002@gmail.com" className="text-emerald-300 hover:underline">nathashamanage2002@gmail.com</a></p>
            <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/nathasha-manage-9012a7290" target="_blank" rel="noreferrer" className="text-emerald-300 hover:underline">linkedin.com/in/nathasha-manage-9012a7290</a></p>
            <p>🐙 GitHub: <a href="https://github.com/NathashaOshani" target="_blank" rel="noreferrer" className="text-emerald-300 hover:underline">github.com/NathashaOshani</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        setIsOpen(false);
        setInputVal('');
        return;

      default:
        outputNode = (
          <p className="text-xs text-rose-400 font-mono">
            zsh: command not found: {cmdText}. Type <span className="text-emerald-300 underline font-bold">help</span> to view supported commands.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmdText,
        output: outputNode,
      },
    ]);
    setInputVal('');
  };

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length === 0) return;
      const nextIdx = historyIdx === -1 ? commandList.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInputVal(commandList[nextIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx === -1) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= commandList.length) {
        setHistoryIdx(-1);
        setInputVal('');
      } else {
        setHistoryIdx(nextIdx);
        setInputVal(commandList[nextIdx] || '');
      }
    }
  };

  return (
    <>
      {/* Floating launcher trigger button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-slate-900/90 px-4 py-2.5 text-xs font-mono font-medium text-emerald-300 shadow-2xl backdrop-blur-md transition-colors hover:border-emerald-400 hover:bg-slate-800 hover:text-white"
        aria-label="Open developer terminal"
        title="Press Ctrl+K or ` to toggle"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <TerminalIcon size={15} />
        <span className="font-semibold">Terminal</span>
        <kbd className="hidden sm:inline-block rounded border border-slate-700 bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-400">Ctrl+K</kbd>
      </motion.button>

      {/* Terminal Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-sm bg-black/60">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className={`flex flex-col rounded-xl border border-slate-700 bg-[#0c131f] text-slate-200 shadow-2xl overflow-hidden transition-all duration-200 ${
                isMaximized ? 'w-full h-full' : 'w-full max-w-2xl h-[520px]'
              }`}
            >
              {/* Header / Titlebar */}
              <div className="flex items-center justify-between border-b border-slate-800 bg-[#121c2d] px-4 py-3 select-none">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="h-3 w-3 rounded-full bg-rose-500/90 hover:opacity-80 transition"
                    aria-label="Close terminal"
                  />
                  <button
                    onClick={() => setIsMaximized(!isMaximized)}
                    className="h-3 w-3 rounded-full bg-amber-500/90 hover:opacity-80 transition"
                    aria-label="Toggle full screen"
                  />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/90" />
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    nathasha@uom-it:~ (zsh)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <button
                    onClick={() => setIsMaximized(!isMaximized)}
                    className="hover:text-white p-1 rounded transition"
                    aria-label={isMaximized ? 'Minimize' : 'Maximize'}
                  >
                    {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="hover:text-white p-1 rounded transition"
                    aria-label="Close"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div
                className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-sm leading-relaxed"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((item) => (
                  <div key={item.id} className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-emerald-400">nathasha@uom:~$</span>
                      <span className="text-slate-100 font-semibold">{item.command}</span>
                    </div>
                    <div className="pl-4">{item.output}</div>
                  </div>
                ))}

                {/* Active input line */}
                <div className="flex items-center gap-2 text-xs pt-1">
                  <span className="text-emerald-400 shrink-0">nathasha@uom:~$</span>
                  <div className="flex-1 relative flex items-center">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      onKeyDown={handleKeyDownInput}
                      className="w-full bg-transparent text-slate-100 outline-none font-mono text-xs"
                      autoFocus
                      spellCheck={false}
                      aria-label="Terminal input"
                      placeholder="Type a command (try 'help', 'neofetch', or 'sudo hire-me')..."
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCommand(inputVal)}
                    className="text-slate-400 hover:text-emerald-400 p-1"
                    title="Send"
                  >
                    <CornerDownLeft size={13} />
                  </button>
                </div>
                <div ref={terminalEndRef} />
              </div>

              {/* Footer status bar */}
              <div className="flex items-center justify-between border-t border-slate-800 bg-[#0f1725] px-4 py-2 font-mono text-[11px] text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <ChevronRight size={12} /> Ready
                  </span>
                  <span>UTF-8</span>
                  <span className="hidden sm:inline">zsh 5.9</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline">Try typing:</span>
                  <button
                    onClick={() => handleCommand('neofetch')}
                    className="text-emerald-300 hover:underline"
                  >
                    neofetch
                  </button>
                  <span>•</span>
                  <button
                    onClick={() => handleCommand('test')}
                    className="text-emerald-300 hover:underline"
                  >
                    test
                  </button>
                  <span>•</span>
                  <button
                    onClick={() => handleCommand('sudo hire-me')}
                    className="text-emerald-300 hover:underline"
                  >
                    sudo hire-me
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
