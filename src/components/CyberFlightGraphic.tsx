import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function CyberFlightGraphic() {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      rotateX: -yPct * 16,
      rotateY: xPct * 20,
      x: xPct * 15,
      y: yPct * 12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-56 sm:h-64 rounded-2xl border border-slate-800/90 bg-gradient-to-b from-[#0e1724]/90 to-[#070e17] overflow-hidden shadow-2xl flex items-center justify-center select-none"
    >
      {/* Background Cyber Grid Floor */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(52, 211, 153, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(52, 211, 153, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse at 50% 60%, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 60%, black 30%, transparent 80%)',
          }}
        />
      </div>

      {/* Radial Emerald Glow behind the plane */}
      <div className="absolute h-40 w-40 rounded-full bg-emerald-500/15 blur-2xl pointer-events-none" />

      {/* SVG Flight Trail Lines & Data Packets */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="trailGradient1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
            <stop offset="70%" stopColor="#34d399" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="trailGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a7f3d0" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Trail Path 1 */}
        <path
          d="M 30,190 Q 140,170 240,110 T 380,85"
          fill="none"
          stroke="url(#trailGradient1)"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="cyber-trail-anim"
        />

        {/* Trail Path 2 */}
        <path
          d="M 60,210 Q 170,185 245,115 T 410,75"
          fill="none"
          stroke="url(#trailGradient2)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          className="cyber-trail-anim-fast"
        />

        {/* Animated Flying Data Packets */}
        <circle cx="210" cy="125" r="2.5" fill="#6ee7b7" className="animate-ping" />
        <circle cx="320" cy="95" r="2" fill="#38bdf8" className="animate-pulse" />
        <circle cx="120" cy="175" r="2" fill="#34d399" />
      </svg>

      {/* Floating 3D Geometric Paper Airplane */}
      <motion.div
        animate={
          reduceMotion
            ? false
            : {
                y: [-6, 6, -6],
                rotateZ: [-2, 2, -2],
                rotateX: [6, 12, 6],
              }
        }
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translate3d(${tilt.x}px, ${tilt.y}px, 0)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative z-10 cursor-pointer"
      >
        <svg
          width="130"
          height="110"
          viewBox="0 0 160 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_22px_rgba(52,211,153,0.45)]"
        >
          <defs>
            <linearGradient id="wingLeft" x1="160" y1="20" x2="30" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6ee7b7" />
              <stop offset="0.6" stopColor="#10b981" />
              <stop offset="1" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="wingRight" x1="160" y1="20" x2="90" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34d399" />
              <stop offset="0.7" stopColor="#065f46" />
              <stop offset="1" stopColor="#022c22" />
            </linearGradient>
            <linearGradient id="bodyUnder" x1="160" y1="20" x2="40" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a7f3d0" />
              <stop offset="1" stopColor="#064e3b" />
            </linearGradient>
          </defs>

          {/* Underfold Shadow / Keel */}
          <polygon points="150,22 80,78 68,110" fill="#042f2e" opacity="0.9" />
          <polygon points="150,22 80,78 18,90" fill="url(#bodyUnder)" opacity="0.8" />

          {/* Left Wing Facet */}
          <polygon
            points="150,22 18,90 80,78"
            fill="url(#wingLeft)"
            stroke="#6ee7b7"
            strokeWidth="1.2"
          />

          {/* Right Wing Facet */}
          <polygon
            points="150,22 80,78 95,120"
            fill="url(#wingRight)"
            stroke="#34d399"
            strokeWidth="1.2"
          />

          {/* Core Spine Light Highlight */}
          <line
            x1="150"
            y1="22"
            x2="80"
            y2="78"
            stroke="#ecfdf5"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Nose Tip Glow Beacon */}
          <circle cx="150" cy="22" r="3.5" fill="#a7f3d0" className="animate-pulse" />
        </svg>

        {/* Jet Thruster Particle Stream behind the plane */}
        <div className="absolute top-[68px] left-[15px] -translate-x-full flex items-center gap-1 pointer-events-none">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-ping opacity-75" />
          <span className="h-2 w-6 rounded-full bg-gradient-to-l from-emerald-400 to-transparent opacity-80 blur-[1px]" />
        </div>
      </motion.div>

      {/* Floating Status Label Overlay */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-400 pointer-events-none">
        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          OUTGOING TRANSMISSION CHANNEL
        </span>
        <span className="text-slate-500 hidden sm:inline">PACKET FLIGHT // DIRECT DISPATCH</span>
      </div>
    </div>
  );
}
