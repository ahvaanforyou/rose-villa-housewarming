import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  type: "marigold-orange" | "marigold-gold" | "jasmine-white";
  driftX: number;
  rotate: number;
}

export function FlowerPetalsShower() {
  const [enabled, setEnabled] = useState(true);
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate deterministic petal particles
    const items: Petal[] = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: 2 + ((i * 47) % 94),
      size: 10 + ((i * 23) % 12),
      duration: 8 + ((i * 19) % 8),
      delay: -((i * 31) % 15),
      type:
        i % 3 === 0
          ? "marigold-orange"
          : i % 3 === 1
          ? "marigold-gold"
          : "jasmine-white",
      driftX: ((i * 13) % 60) - 30,
      rotate: (i * 45) % 360,
    }));
    setPetals(items);
  }, []);

  return (
    <>
      {/* Floating Toggle Pill */}
      <button
        type="button"
        onClick={() => setEnabled((prev) => !prev)}
        className={`fixed bottom-20 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/60 bg-amber-950/85 text-amber-200 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 ${
          enabled ? "ring-2 ring-amber-400/50" : "opacity-60"
        }`}
        title={enabled ? "పుష్ప వృష్టి ఆపండి (Disable Flower Petals)" : "పుష్ప వృష్టి ప్రారంభించండి (Enable Flower Petals)"}
        aria-label="Toggle Flower Petals Shower"
      >
        <span className="text-base select-none">🌸</span>
      </button>

      {/* Drifting Flower Petals Viewport */}
      {enabled && (
        <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden select-none" aria-hidden="true">
          {petals.map((p) => {
            const isJasmine = p.type === "jasmine-white";
            const isGold = p.type === "marigold-gold";

            return (
              <span
                key={p.id}
                className="absolute -top-10 animate-falling-petal block rounded-full opacity-80"
                style={
                  {
                    left: `${p.left}%`,
                    width: isJasmine ? p.size * 0.7 : p.size,
                    height: p.size * 1.3,
                    animationDuration: `${p.duration}s`,
                    animationDelay: `${p.delay}s`,
                    "--drift-x": `${p.driftX}px`,
                    "--rotate-deg": `${p.rotate}deg`,
                    background: isJasmine
                      ? "radial-gradient(circle at 30% 30%, #FFFFFF, #FFF9E6 70%, #E8DFBF 100%)"
                      : isGold
                      ? "radial-gradient(circle at 35% 35%, #FFD700, #FFA500 75%, #CC7A00 100%)"
                      : "radial-gradient(circle at 35% 35%, #FF8C00, #FF4500 75%, #B32D00 100%)",
                    boxShadow: isJasmine
                      ? "0 2px 4px rgba(255, 255, 255, 0.4)"
                      : "0 2px 5px rgba(255, 140, 0, 0.35)",
                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                  } as React.CSSProperties
                }
              />
            );
          })}
        </div>
      )}
    </>
  );
}
