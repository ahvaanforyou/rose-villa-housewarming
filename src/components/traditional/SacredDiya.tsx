import React from "react";

interface SacredDiyaProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showStand?: boolean;
}

export function SacredDiya({ size = "md", className = "", showStand = true }: SacredDiyaProps) {
  const scale = size === "sm" ? 0.75 : size === "lg" ? 1.3 : 1;

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${className}`}
      style={{ transform: `scale(${scale})` }}
      aria-label="Sacred Brass Diya"
      role="img"
    >
      {/* Outer Golden Ambient Halo / Glow */}
      <div className="absolute -top-12 h-24 w-24 rounded-full bg-amber-400/35 blur-xl animate-pulse pointer-events-none" />
      <div className="absolute -top-8 h-16 w-16 rounded-full bg-orange-500/30 blur-lg pointer-events-none" />

      {/* Flickering Flame Animation */}
      <div className="relative z-10 flex flex-col items-center mb-0.5">
        {/* Core Hot Blue/White Base */}
        <div className="relative flex items-center justify-center">
          {/* Main Flickering Teardrop Flame */}
          <div
            className="h-10 w-4 rounded-full animate-diya-flicker"
            style={{
              background:
                "radial-gradient(ellipse at 50% 80%, #FFFFFF 0%, #FFF3A8 25%, #FFA500 65%, #FF4500 100%)",
              filter: "drop-shadow(0 0 10px rgba(255, 165, 0, 0.95))",
              clipPath: "polygon(50% 0%, 90% 60%, 80% 90%, 50% 100%, 20% 90%, 10% 60%)",
            }}
          />

          {/* Inner Flame Glow */}
          <div className="absolute bottom-1 h-5 w-2 rounded-full bg-white/90 blur-[1px]" />
        </div>

        {/* Cotton Wick (వత్తి) */}
        <div className="h-2 w-1 -mt-0.5 rounded-t-sm bg-neutral-900 shadow-sm" />
      </div>

      {/* Brass Lamp Bowl (ప్రమిద / ప్రమిద గిన్నె) */}
      <div className="relative z-10">
        <svg
          width="74"
          height="32"
          viewBox="0 0 74 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_8px_16px_rgba(0,0,0,0.45)]"
        >
          {/* Golden Oil Pool */}
          <ellipse cx="37" cy="7" rx="31" ry="5.5" fill="url(#brassOilGrad)" />

          {/* Outer Brass Lip & Carved Petals */}
          <path
            d="M5 8C5 8 13 26 37 26C61 26 69 8 69 8C69 8 62 12 37 12C12 12 5 8 5 8Z"
            fill="url(#brassBodyGrad)"
            stroke="#9E7632"
            strokeWidth="1.2"
          />

          {/* Brass Lip Rim */}
          <path
            d="M5 8C12 12 62 12 69 8C62 4 12 4 5 8Z"
            fill="url(#brassRimGrad)"
            stroke="#C9A04B"
            strokeWidth="0.8"
          />

          {/* Sacred Engraving Highlights */}
          <path
            d="M22 17C26 21 48 21 52 17"
            stroke="#F7D788"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.8"
          />

          <defs>
            <linearGradient id="brassOilGrad" x1="6" y1="7" x2="68" y2="7">
              <stop stopColor="#9C6B14" />
              <stop offset="0.5" stopColor="#E2A938" />
              <stop offset="1" stopColor="#8C5C0C" />
            </linearGradient>
            <linearGradient id="brassBodyGrad" x1="37" y1="8" x2="37" y2="26">
              <stop stopColor="#D4AF37" />
              <stop offset="0.5" stopColor="#B38728" />
              <stop offset="1" stopColor="#5E4311" />
            </linearGradient>
            <linearGradient id="brassRimGrad" x1="5" y1="8" x2="69" y2="8">
              <stop stopColor="#BF953F" />
              <stop offset="0.3" stopColor="#FCF6BA" />
              <stop offset="0.5" stopColor="#B38728" />
              <stop offset="0.8" stopColor="#FBF5B7" />
              <stop offset="1" stopColor="#AA771C" />
            </linearGradient>
          </defs>
        </svg>

        {/* Optional Ornate Brass Pedestal Stand */}
        {showStand && (
          <div className="flex flex-col items-center -mt-1.5">
            {/* Stem */}
            <div className="h-3 w-4 bg-gradient-to-r from-amber-800 via-amber-400 to-amber-900 rounded-sm shadow-inner" />
            {/* Circular Tiered Base */}
            <div className="h-2 w-14 rounded-full bg-gradient-to-r from-amber-900 via-amber-400 to-amber-900 shadow-[0_4px_10px_rgba(0,0,0,0.5)] border-t border-amber-300" />
          </div>
        )}
      </div>
    </div>
  );
}
