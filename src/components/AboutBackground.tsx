import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/* ─── Constellation Canvas ─────────────────────────────────────── */
function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const PARTICLE_COUNT = 55;
    const MAX_DIST = 160;

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; alpha: number; };

    let W = 0, H = 0;
    const particles: Particle[] = [];

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      W = canvas.width  = rect.width;
      H = canvas.height = rect.height;
    };

    const spawn = (): Particle => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.5 + 0.3,
    });

    resize();
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(spawn());

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        if (!reduceMotion) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
          if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        }
      }

      // Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.28;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(52,211,153,${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of particles) {
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grd.addColorStop(0, `rgba(52,211,153,${p.alpha * 0.5})`);
        grd.addColorStop(1, 'rgba(52,211,153,0)');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(110,231,183,${p.alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full" style={{ opacity: 0.8 }} />;
}

/* ─── Floating Tech Glyphs ─────────────────────────────────────── */
const GLYPHS = [
  {
    id: 'g1',
    cls: 'about-glyph-float',
    style: { top: '8%', left: '3%', animationDelay: '0s', animationDuration: '14s' },
    svg: (
      <svg viewBox="0 0 90 44" fill="none" className="w-20 h-10">
        <text x="2" y="36" fontFamily="monospace" fontSize="34" fill="rgba(52,211,153,0.22)" fontWeight="bold">&lt;/&gt;</text>
      </svg>
    ),
  },
  {
    id: 'g2',
    cls: 'about-glyph-float',
    style: { top: '70%', left: '2%', animationDelay: '2s', animationDuration: '18s' },
    svg: (
      <svg viewBox="0 0 100 44" fill="none" className="w-24 h-10">
        <text x="2" y="36" fontFamily="monospace" fontSize="34" fill="rgba(103,232,249,0.18)" fontWeight="bold">{'{ }'}</text>
      </svg>
    ),
  },
  {
    id: 'g3',
    cls: 'about-glyph-float',
    style: { top: '16%', right: '3%', animationDelay: '1s', animationDuration: '16s' },
    svg: (
      <svg viewBox="0 0 80 44" fill="none" className="w-16 h-10">
        <text x="2" y="36" fontFamily="monospace" fontSize="32" fill="rgba(167,243,208,0.18)" fontWeight="bold">( )</text>
      </svg>
    ),
  },
  {
    id: 'g4',
    cls: 'about-glyph-float',
    style: { top: '58%', right: '3%', animationDelay: '3s', animationDuration: '20s' },
    svg: (
      <svg viewBox="0 0 90 40" fill="none" className="w-20 h-9">
        <text x="2" y="32" fontFamily="monospace" fontSize="28" fill="rgba(52,211,153,0.18)" fontWeight="bold">=&gt;</text>
      </svg>
    ),
  },
  {
    id: 'g5',
    cls: 'about-glyph-float',
    style: { top: '42%', left: '1%', animationDelay: '4s', animationDuration: '22s' },
    svg: (
      <svg viewBox="0 0 70 34" fill="none" className="w-16 h-8">
        <text x="2" y="26" fontFamily="monospace" fontSize="22" fill="rgba(148,163,184,0.16)" fontWeight="bold">//</text>
      </svg>
    ),
  },
  {
    id: 'g6',
    cls: 'about-glyph-float',
    style: { top: '83%', left: '38%', animationDelay: '2.5s', animationDuration: '17s' },
    svg: (
      <svg viewBox="0 0 70 36" fill="none" className="w-16 h-8">
        <text x="2" y="28" fontFamily="monospace" fontSize="26" fill="rgba(52,211,153,0.14)" fontWeight="bold">[ ]</text>
      </svg>
    ),
  },
  /* Large hex node top-right */
  {
    id: 'g7',
    cls: 'about-glyph-float',
    style: { top: '-20px', right: '8%', animationDelay: '0.5s', animationDuration: '26s' },
    svg: (
      <svg viewBox="0 0 130 130" fill="none" className="w-32 h-32">
        <polygon points="65,8 112,34 112,86 65,112 18,86 18,34"
          stroke="rgba(52,211,153,0.2)" strokeWidth="1.5" fill="rgba(52,211,153,0.04)" />
        <polygon points="65,24 100,44 100,84 65,104 30,84 30,44"
          stroke="rgba(103,232,249,0.12)" strokeWidth="1" fill="none" />
        <circle cx="65" cy="65" r="7" fill="rgba(52,211,153,0.3)" />
        <circle cx="65" cy="65" r="3.5" fill="rgba(110,231,183,0.7)" />
      </svg>
    ),
  },
  /* Large hex node bottom-left */
  {
    id: 'g8',
    cls: 'about-glyph-float',
    style: { bottom: '-15px', left: '6%', animationDelay: '1.5s', animationDuration: '30s' },
    svg: (
      <svg viewBox="0 0 110 110" fill="none" className="w-28 h-28">
        <polygon points="55,6 96,28 96,75 55,97 14,75 14,28"
          stroke="rgba(99,102,241,0.22)" strokeWidth="1.5" fill="rgba(99,102,241,0.04)" />
        <circle cx="55" cy="55" r="6" fill="rgba(99,102,241,0.35)" />
        <circle cx="55" cy="55" r="3" fill="rgba(167,139,250,0.7)" />
      </svg>
    ),
  },
  /* Spinning dashed ring mid-right */
  {
    id: 'g9',
    cls: 'about-glyph-spin',
    style: { top: '36%', right: '1%' },
    svg: (
      <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24">
        <circle cx="50" cy="50" r="42" stroke="rgba(52,211,153,0.16)" strokeWidth="1.2" strokeDasharray="7 5" />
        <circle cx="50" cy="8" r="4.5" fill="rgba(52,211,153,0.5)" />
        <circle cx="92" cy="50" r="3.5" fill="rgba(103,232,249,0.45)" />
        <circle cx="50" cy="92" r="3" fill="rgba(52,211,153,0.35)" />
      </svg>
    ),
  },
  /* Counter-spinning ring top-left */
  {
    id: 'g10',
    cls: 'about-glyph-spin-rev',
    style: { top: '12%', left: '30%' },
    svg: (
      <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
        <circle cx="40" cy="40" r="34" stroke="rgba(103,232,249,0.13)" strokeWidth="1" strokeDasharray="5 4" />
        <circle cx="40" cy="6" r="3.5" fill="rgba(103,232,249,0.5)" />
        <circle cx="74" cy="40" r="2.5" fill="rgba(52,211,153,0.4)" />
      </svg>
    ),
  },
];

/* ─── Main Export ─────────────────────────────────────────────── */
export default function AboutBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <ConstellationCanvas />

      {/* Dim grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(rgba(52,211,153,1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(52,211,153,1) 1px, transparent 1px)`,
        backgroundSize: '56px 56px',
      }} />

      {/* Glowing orbs */}
      <div className="about-bg-orb about-bg-orb--teal" />
      <div className="about-bg-orb about-bg-orb--indigo" />
      <div className="about-bg-orb about-bg-orb--cyan" />

      {/* Scan line */}
      <div className="about-scan-line" />

      {/* Floating tech glyphs */}
      {GLYPHS.map(({ id, cls, style, svg }) => (
        <div key={id} className={`absolute select-none ${cls}`} style={style as React.CSSProperties}>
          {svg}
        </div>
      ))}

      {/* Corner brackets */}
      <div className="about-corner about-corner--tl" />
      <div className="about-corner about-corner--tr" />
      <div className="about-corner about-corner--bl" />
      <div className="about-corner about-corner--br" />
    </div>
  );
}
