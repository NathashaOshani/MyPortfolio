import React, { useState } from 'react';
import { Scan, ShieldCheck } from 'lucide-react';

type ProfilePortraitProps = {
  priority?: boolean;
};

export default function ProfilePortrait({ priority = false }: ProfilePortraitProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <figure
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative isolate mx-auto w-full max-w-[280px] sm:max-w-[340px] cursor-pointer group select-none"
    >
      {/* Ambient Backlight Glow */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-8 bottom-12 top-16 -z-10 bg-emerald-400/15 blur-3xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100 scale-110' : 'opacity-60'
        }`}
      />

      {/* The Portrait Image */}
      <div className="relative overflow-hidden">
        <img
          src="/profile.png"
          alt="Portrait of Nathasha Manage"
          width={1106}
          height={1422}
          loading={priority ? 'eager' : 'lazy'}
          className={`portrait-feather aspect-[1106/1422] w-full object-cover object-top transition-transform duration-500 ${
            isHovered ? 'scale-[1.02]' : 'scale-100'
          }`}
        />

        {/* 🩻 Biometric Holographic Scan Overlay (Activates on Hover) */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none z-20">
            {/* Moving Laser Beam Line */}
            <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-transparent shadow-[0_0_16px_#34d399] biometric-scan-line">
              {/* Trailing laser aura */}
              <div className="absolute top-0 inset-x-0 h-10 -translate-y-full bg-gradient-to-t from-emerald-400/15 to-transparent" />
            </div>

            {/* Futuristic Corner Framing Brackets */}
            <div className="absolute top-4 left-4 h-4 w-4 border-t-2 border-l-2 border-emerald-400" />
            <div className="absolute top-4 right-4 h-4 w-4 border-t-2 border-r-2 border-emerald-400" />
            <div className="absolute bottom-16 left-4 h-4 w-4 border-b-2 border-l-2 border-emerald-400" />
            <div className="absolute bottom-16 right-4 h-4 w-4 border-b-2 border-r-2 border-emerald-400" />

            {/* HUD Status Header */}
            <div className="absolute top-5 inset-x-0 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-0.5 font-mono text-[9px] text-emerald-300 border border-emerald-400/40 backdrop-blur-md shadow-lg animate-pulse">
                <Scan size={10} />
                <span>BIOMETRIC SCAN // VERIFIED</span>
              </span>
            </div>

            {/* Target Reticle Crosshair in Center */}
            <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-70">
              <span className="h-4 w-4 border border-emerald-400/40 rounded-full flex items-center justify-center animate-ping" />
              <span className="absolute text-emerald-300 font-mono text-xs">+</span>
            </div>
          </div>
        )}
      </div>
    </figure>
  );
}
