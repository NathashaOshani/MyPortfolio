import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
}

export default function CyberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Dynamic particle count depending on screen size
    let particles: Particle[] = [];

    const initParticles = () => {
      const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 1.8 + 0.8;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius,
          baseRadius: radius,
          alpha: Math.random() * 0.4 + 0.2,
        });
      }
    };

    initParticles();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let currentAlpha = p.alpha;
        let currentRadius = p.baseRadius;

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
          currentAlpha = Math.min(p.alpha + force * 0.5, 0.9);
          currentRadius = p.baseRadius + force * 1.5;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 211, 153, ${currentAlpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (distNodes < 110) {
            const lineAlpha = (1 - distNodes / 110) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(110, 231, 183, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse if close
        if (dist < mouse.radius) {
          const mouseLineAlpha = (1 - dist / mouse.radius) * 0.28;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(167, 243, 208, ${mouseLineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60 transition-opacity duration-1000"
    />
  );
}
