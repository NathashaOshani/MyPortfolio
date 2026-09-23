import React from 'react';
import { Database, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

/* 1. Full-Stack Data-Flow Animation */
function FullStackAnimation() {
  return (
    <div className="relative w-full h-32 rounded-xl bg-[#0b131f] border border-slate-800/80 p-3 overflow-hidden flex items-center justify-between mb-6 shadow-inner">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#34d399 1px, transparent 1px), linear-gradient(90deg, #34d399 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Layer 1: Frontend */}
      <div className="relative z-10 flex flex-col items-center gap-1.5">
        <div className="h-10 w-12 rounded-lg bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-[10px] font-mono font-bold text-emerald-300 shadow-md shadow-emerald-500/10">
          UI
        </div>
        <span className="font-mono text-[9px] text-slate-400">React</span>
      </div>

      {/* Connecting Pipe 1 with moving pulses */}
      <div className="relative flex-1 h-1.5 bg-slate-800 mx-2 rounded-full overflow-hidden">
        <div className="absolute inset-y-0 w-6 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-[flowRight_1.8s_ease-in-out_infinite]" />
      </div>

      {/* Layer 2: API & Logic */}
      <div className="relative z-10 flex flex-col items-center gap-1.5">
        <div className="h-10 w-12 rounded-lg bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-[10px] font-mono font-bold text-cyan-300 shadow-md shadow-cyan-500/10">
          API
        </div>
        <span className="font-mono text-[9px] text-slate-400">Node/C#</span>
      </div>

      {/* Connecting Pipe 2 with moving pulses */}
      <div className="relative flex-1 h-1.5 bg-slate-800 mx-2 rounded-full overflow-hidden">
        <div className="absolute inset-y-0 w-6 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[flowRight_1.8s_ease-in-out_infinite_0.9s]" />
      </div>

      {/* Layer 3: Database */}
      <div className="relative z-10 flex flex-col items-center gap-1.5">
        <div className="h-10 w-12 rounded-lg bg-violet-500/20 border border-violet-400/50 flex items-center justify-center text-violet-300 shadow-md shadow-violet-500/10">
          <Database size={16} />
        </div>
        <span className="font-mono text-[9px] text-slate-400">SQL/Mongo</span>
      </div>

      {/* Telemetry pill */}
      <div className="absolute bottom-1.5 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-slate-500">
        <span>DATA PIPELINE // 2-WAY SYNC</span>
        <span className="text-emerald-400 animate-pulse">● 60 FPS</span>
      </div>
    </div>
  );
}

/* 2. Security & Token Verification Animation */
function SecurityAnimation() {
  return (
    <div className="relative w-full h-32 rounded-xl bg-[#0b131f] border border-slate-800/80 p-3 overflow-hidden flex items-center justify-center mb-6 shadow-inner">
      {/* Concentric Radar Rings */}
      <div className="absolute h-24 w-24 rounded-full border border-emerald-500/20 animate-ping opacity-30" />
      <div className="absolute h-18 w-18 rounded-full border border-cyan-500/30 animate-[spin_8s_linear_infinite]" />

      {/* Center Shield with Pulsing Lock */}
      <div className="relative z-10 flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-400/60 shadow-lg shadow-emerald-500/20">
        <ShieldCheck size={24} className="text-emerald-300 animate-pulse" />
      </div>

      {/* Orbiting Auth Token Chips */}
      <div className="absolute top-3 left-4 font-mono text-[9px] bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700 text-cyan-300 animate-bounce">
        JWT // VALID
      </div>
      <div className="absolute bottom-3 right-4 font-mono text-[9px] bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700 text-emerald-300 animate-pulse">
        OAuth 2.0 // SECURE
      </div>

      <div className="absolute bottom-1.5 left-3 text-[8px] font-mono text-slate-500">
        <span>ENCRYPTED HANDSHAKE // RBAC</span>
      </div>
    </div>
  );
}

/* 3. IoT Circuit & Biometric Scan Animation */
function IoTAnimation() {
  return (
    <div className="relative w-full h-32 rounded-xl bg-[#0b131f] border border-slate-800/80 p-3 overflow-hidden flex items-center justify-center mb-6 shadow-inner">
      {/* Animated Circuit Traces (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        <line x1="20" y1="20" x2="80" y2="20" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 4" className="cyber-trail-anim" />
        <line x1="80" y1="20" x2="80" y2="60" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 4" className="cyber-trail-anim" />
        <line x1="260" y1="100" x2="200" y2="100" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" className="cyber-trail-anim-fast" />
        <line x1="200" y1="100" x2="200" y2="65" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" className="cyber-trail-anim-fast" />
      </svg>

      {/* Central Microchip (ESP32) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-14 w-28 rounded-lg bg-slate-900 border border-amber-400/40 shadow-md shadow-amber-500/10">
        {/* Scanning Laser Line */}
        <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-[laserScan_2s_ease-in-out_infinite]" />
        <div className="flex items-center gap-1.5 text-amber-300 font-mono text-[10px] font-bold">
          <Cpu size={14} /> ESP32-CAM
        </div>
        <span className="font-mono text-[8px] text-slate-400">R503 Sensor // PIR</span>
      </div>

      <div className="absolute bottom-1.5 left-3 right-3 flex items-center justify-between text-[8px] font-mono text-slate-500">
        <span>BIOMETRIC TELEMETRY</span>
        <span className="text-amber-300 animate-pulse">● SENSORS ONLINE</span>
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      animation: <FullStackAnimation />,
      title: 'Full-Stack Development',
      description:
        'Building reliable web applications across frontend, backend, APIs, databases, and authentication.',
      more: 'I work with React, TypeScript, ASP.NET Core, Node.js, SQL Server, MongoDB, and RESTful APIs.',
    },
    {
      animation: <SecurityAnimation />,
      title: 'API Integration & Security',
      description:
        'Connecting user experiences to secure, maintainable services with clear data flows and validation.',
      more: 'My experience includes JWT, OAuth 2.0, role-based access control, SignalR, Entity Framework Core, and Mongoose.',
    },
    {
      animation: <IoTAnimation />,
      title: 'Embedded Systems & IoT',
      description:
        'Designing hardware-software solutions that make security systems more connected and useful.',
      more: 'Gate Sentinel combines ESP32, ESP32-CAM, fingerprint authentication, PIR sensing, and remote monitoring.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#090f19] relative px-6 lg:px-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto w-full">
        <div className="section-intro mb-14">
          <div>
            <p className="section-kicker">03 / AREAS OF FOCUS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What I <span className="text-emerald-400">Build</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-slate-400 max-w-md">
            Architecting scalable systems from database schema to user interfaces and hardware telemetry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900/60 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 flex flex-col justify-between"
            >
              <div>
                {/* Moving IT Graphic for this specific service */}
                {service.animation}

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <details className="service-details border-t border-slate-800 pt-4 mt-auto">
                <summary className="font-mono text-xs text-emerald-400 cursor-pointer hover:underline flex items-center gap-1">
                  <span>Explore stack details</span>
                  <ArrowRight size={12} />
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-slate-400 font-mono bg-[#070e17] p-3 rounded-lg border border-slate-800">
                  {service.more}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
