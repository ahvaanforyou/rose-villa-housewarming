import React from "react";

export function TraditionalToranam({ className = "" }: { className?: string }) {
  // Repeating mango leaves and marigold blossoms garland
  return (
    <div
      className={`pointer-events-none relative z-20 w-full overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <div className="relative flex w-full items-start justify-center">
        {/* Main rope cord line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 shadow-sm" />

        {/* Garland pattern repeat */}
        <div className="flex w-full items-start justify-around px-2 sm:px-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="relative flex flex-col items-center">
              {/* Marigold Blossom Top Bead */}
              <div
                className="h-3.5 w-3.5 rounded-full shadow-sm transition-transform duration-300 hover:scale-110 sm:h-4 sm:w-4"
                style={{
                  background:
                    i % 2 === 0
                      ? "radial-gradient(circle at 35% 35%, #FFA500, #FF6F00, #E65100)"
                      : "radial-gradient(circle at 35% 35%, #FFD700, #FFB300, #FF8F00)",
                  boxShadow: "0 2px 4px rgba(230, 81, 0, 0.4)",
                }}
              />

              {/* Mango Leaf hanging downwards */}
              <svg
                width="32"
                height="56"
                viewBox="0 0 32 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_4px_6px_rgba(40,65,45,0.35)] -mt-1 sm:w-9 sm:h-16"
                style={{
                  transform: i % 2 === 0 ? "rotate(2deg)" : "rotate(-2deg)",
                }}
              >
                {/* Mango Leaf Body */}
                <path
                  d="M16 2C16 2 29 18 29 36C29 48 22 54 16 54C10 54 3 48 3 36C3 18 16 2 16 2Z"
                  fill="url(#mangoLeafGrad)"
                />
                {/* Central Leaf Vein */}
                <path
                  d="M16 2V54"
                  stroke="#1B4D2B"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                {/* Secondary Veins */}
                <path
                  d="M16 14L23 20M16 22L25 30M16 32L24 40M16 14L9 20M16 22L7 30M16 32L8 40"
                  stroke="#1B4D2B"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  opacity="0.65"
                />
                {/* Golden Dipped Tip Accent */}
                <circle cx="16" cy="50" r="2.5" fill="#FFD700" opacity="0.8" />
                <defs>
                  <linearGradient
                    id="mangoLeafGrad"
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="54"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3E8E41" />
                    <stop offset="0.6" stopColor="#2E6B32" />
                    <stop offset="1" stopColor="#1B4D2B" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Fragrant White Jasmine Tassel */}
              <div className="flex -mt-1.5 flex-col items-center gap-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-100 shadow-[0_1px_2px_rgba(0,0,0,0.15)]" />
                <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
