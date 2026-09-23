import React, { useState, useRef } from 'react';
import { Scan, GraduationCap, Code2, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

type ProfilePortraitProps = {
  priority?: boolean;
};

export default function ProfilePortrait({ priority = false }: ProfilePortraitProps) {
  const reduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current || reduceMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;
    
    setMousePos({ x: Math.round(xPct * 100), y: Math.round(yPct * 100) });
    setTilt({
      rotateX: -(yPct - 0.5) * 12,
      rotateY: (xPct - 0.5) * 12,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <figure
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}
      className="relative isolate mx-auto w-full max-w-[320px] sm:max-w-[360px] cursor-pointer group select-none py-2"
    >
      {/* 🪐 Outer Rotating Orbital Tech Ring with Satellites */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-full border border-emerald-400/20 animate-[spin_24s_linear_infinite] -z-10"
      >
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399] animate-pulse" />
        <span className="absolute -bottom-1.5 left-1/3 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8]" />
      </div>

      {/* 🪐 Inner Counter-Rotating Orbital Ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 rounded-full border border-cyan-400/25 border-dashed animate-[spin_18s_linear_infinite_reverse] -z-10"
      >
        <span className="absolute top-1/4 -right-1 h-2.5 w-2.5 rounded-full bg-teal-300 shadow-[0_0_10px_#2dd4bf]" />
      </div>

      {/* 🌌 Ambient Breathing Aurora Backlight Glow */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-2 bottom-6 top-8 -z-10 rounded-full bg-gradient-to-tr from-emerald-500/30 via-cyan-500/25 to-teal-500/30 blur-3xl transition-all duration-700 ${
          isHovered ? 'opacity-100 scale-110' : 'opacity-70 scale-100'
        }`}
      />

      {/* 🌟 Rotating Neon Gradient Border Wrapper */}
      <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-emerald-400 via-cyan-400 to-indigo-500 shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(52,211,153,0.2)]">
        
        {/* Core Portrait Card */}
        <div className="relative overflow-hidden rounded-[15px] bg-[#0c1421]">
          
          {/* Top HUD Telemetry Bar */}
          <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-3.5 py-2.5 bg-gradient-to-b from-[#0c1421]/90 via-[#0c1421]/60 to-transparent">
            <span className="inline-flex items-center gap-1.5 font-mono text-[9px] font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE // 2026</span>
            </span>

            {/* Micro Equalizer Frequency Bars */}
            <div className="flex items-end gap-[3px] h-3">
              <span className="w-[2px] bg-emerald-400/80 rounded-full animate-[soundwave_1.2s_ease-in-out_infinite]" />
              <span className="w-[2px] bg-cyan-300/80 rounded-full animate-[soundwave_0.8s_ease-in-out_infinite_0.2s]" />
              <span className="w-[2px] bg-teal-300/80 rounded-full animate-[soundwave_1.5s_ease-in-out_infinite_0.4s]" />
              <span className="w-[2px] bg-emerald-400/80 rounded-full animate-[soundwave_1.0s_ease-in-out_infinite_0.1s]" />
            </div>

            <span className="font-mono text-[9px] text-slate-400 font-medium">UoM · IT</span>
          </div>

          {/* High-Definition Portrait Photo */}
          <div className="relative overflow-hidden">
            <img
              src="/profile.png"
              alt="Portrait of Nathasha Manage"
              width={1106}
              height={1422}
              loading={priority ? 'eager' : 'lazy'}
              className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out filter contrast-[1.04] brightness-[1.02] saturate-[1.05] ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
              style={{ aspectRatio: '3/4', minHeight: '340px' }}
            />

            {/* Seamless Bottom Blazer Fade (Grounded to dark base) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0c1421] via-[#0c1421]/75 to-transparent z-10" />

            {/* Holographic Shimmer Light Sheen Sweep */}
            <div className="pointer-events-none absolute inset-0 z-15 overflow-hidden">
              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
            </div>

            {/* Dynamic Cursor Spotlight Following Pointer */}
            <div
              className="pointer-events-none absolute inset-0 z-15 transition-opacity duration-300"
              style={{
                background: isHovered
                  ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(52, 211, 153, 0.18), transparent 60%)`
                  : 'none',
              }}
            />

            {/* 4 Cybernetic Corner Reticles */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-3.5 w-3.5 border-t-2 border-l-2 border-emerald-400/70 shadow-[0_0_8px_#34d399] z-20" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-3.5 w-3.5 border-t-2 border-r-2 border-emerald-400/70 shadow-[0_0_8px_#34d399] z-20" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-3.5 w-3.5 border-b-2 border-l-2 border-emerald-400/70 shadow-[0_0_8px_#34d399] z-20" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-3.5 w-3.5 border-b-2 border-r-2 border-emerald-400/70 shadow-[0_0_8px_#34d399] z-20" />

            {/* 🩻 Biometric Holographic Scan Overlay (Interactive on Hover) */}
            {isHovered && (
              <div className="absolute inset-0 pointer-events-none z-25">
                {/* Sweeping Laser Beam Line */}
                <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-transparent shadow-[0_0_16px_#34d399] biometric-scan-line">
                  <div className="absolute top-0 inset-x-0 h-14 -translate-y-full bg-gradient-to-t from-emerald-400/20 to-transparent" />
                </div>

                {/* Top Biometric Status Badge */}
                <div className="absolute top-10 inset-x-0 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/85 px-2.5 py-0.5 font-mono text-[9px] text-emerald-300 border border-emerald-400/50 backdrop-blur-md shadow-lg animate-pulse">
                    <Scan size={10} />
                    <span>BIOMETRIC SCAN // RECOGNIZED</span>
                  </span>
                </div>

                {/* Target Reticle Crosshairs */}
                <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-85">
                  <span className="h-7 w-7 border border-emerald-400/60 rounded-full animate-ping" />
                  <span className="absolute text-emerald-300 font-mono text-xs font-bold">+</span>
                </div>

                <div className="absolute bottom-10 inset-x-0 flex justify-center">
                  <span className="rounded bg-slate-950/80 px-2 py-0.5 font-mono text-[8px] text-cyan-300 border border-cyan-400/40">
                    MATCH: 99.8% // READY TO INTERN
                  </span>
                </div>
              </div>
            )}

            {/* Bottom Card Identity Caption */}
            <div className="absolute bottom-2.5 inset-x-0 z-20 flex justify-center">
              <span className="inline-flex items-center gap-1 font-mono text-[10px] text-slate-300 tracking-wider">
                &lt;nathasha.manage /&gt;
                <span className="h-2.5 w-1 bg-emerald-400 animate-pulse" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 🏷️ Floating Satellite Badge 1 (Top-Right: Open to Internship) */}
      <motion.div
        animate={reduceMotion ? false : { y: [-4, 4, -4] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-3 -right-3 z-30 pointer-events-none"
      >
        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/50 bg-[#09111c]/95 px-3 py-1 font-mono text-[10px] text-emerald-300 shadow-[0_8px_20px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="font-semibold tracking-wide">Available for Internship</span>
        </div>
      </motion.div>

      {/* 🏷️ Floating Satellite Badge 2 (Bottom-Right: University of Moratuwa) */}
      <motion.div
        animate={reduceMotion ? false : { y: [4, -4, 4] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        className="absolute -bottom-4 -right-3 z-30 pointer-events-none"
      >
        <div className="flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-[#09111c]/95 px-3 py-1.5 shadow-[0_12px_24px_rgba(0,0,0,0.7)] backdrop-blur-md">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            <GraduationCap size={13} />
          </div>
          <div className="text-left font-mono">
            <p className="text-[10px] font-bold text-slate-100 leading-tight">UoM Undergraduate</p>
            <p className="text-[8.5px] text-cyan-300/90 leading-tight">B.Sc. (Hons) IT</p>
          </div>
        </div>
      </motion.div>

      {/* 🏷️ Floating Satellite Badge 3 (Bottom-Left: Full-Stack & QA Aspirant) */}
      <motion.div
        animate={reduceMotion ? false : { y: [-3, 3, -3] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="absolute -bottom-3 -left-3 z-30 pointer-events-none"
      >
        <div className="flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-[#09111c]/95 px-2.5 py-1.5 shadow-[0_12px_24px_rgba(0,0,0,0.7)] backdrop-blur-md">
          <Code2 size={12} className="text-emerald-400" />
          <span className="font-mono text-[9.5px] font-semibold text-emerald-200">
            Full-Stack &amp; QA
          </span>
        </div>
      </motion.div>
    </figure>
  );
}
