import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 2.5 seconds duration
    const duration = 2500; 
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      // Exponential ease-out feel for progress
      const rawProgress = (currentStep / steps);
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
      const newProgress = Math.min(easedProgress * 100, 100);
      
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setProgress(100);
        // Short pause at 100% to read "System Initialized", then gently fade out
        setTimeout(onComplete, 600); 
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // A very gentle, smooth fade out for the entire screen
  const containerVariants = {
    exit: { 
      opacity: 0, 
      y: -20, // Gentle slide up instead of a massive zoom
      transition: { duration: 0.8, ease: "easeInOut" } 
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#03070e] pointer-events-none"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* The Custom <NM /> Logo SVG Tracing Animation */}
        <div className="relative w-64 h-32 sm:w-80 sm:h-40">
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full drop-shadow-[0_0_10px_rgba(52,211,153,0.15)]"
          >
            {/* Subtle Outer Frame */}
            <motion.rect
              x="2" y="20" width="96" height="60" rx="4"
              fill="none"
              stroke="#064e3b"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ duration: 0.1 }}
            />

            {/* < Bracket */}
            <motion.polyline 
              points="15,35 5,50 15,65"
              fill="none"
              stroke="#34d399"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
            />

            {/* N */}
            <motion.polyline 
              points="25,65 25,35 40,65 40,35"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
            />

            {/* M */}
            <motion.polyline 
              points="50,65 50,35 57.5,50 65,35 65,65"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
            />

            {/* / Bracket */}
            <motion.line 
              x1="72" y1="65" x2="77" y2="35"
              stroke="#34d399"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
            />

            {/* > Bracket */}
            <motion.polyline 
              points="85,35 95,50 85,65"
              fill="none"
              stroke="#34d399"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
            />
          </svg>
        </div>

        {/* Dynamic Text and Percentage */}
        <div className="flex flex-col items-center">
          <motion.div 
            className="text-emerald-400 font-mono text-xl sm:text-2xl font-semibold"
            animate={{ opacity: progress === 100 ? [0.5, 1, 0.5, 1] : 1 }}
            transition={{ duration: 0.5 }}
          >
            {Math.floor(progress)}%
          </motion.div>
          <div className="text-slate-500 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase mt-2">
            {progress < 100 ? "Loading workspace" : "System Ready"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
