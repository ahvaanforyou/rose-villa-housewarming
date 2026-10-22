import React, { useState } from "react";
import { sacredAudio } from "@/lib/audioService";
import { Volume2, VolumeX, Bell } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function SacredAudioControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { language } = useLanguage();

  const handleToggle = () => {
    const active = sacredAudio.toggle();
    setIsPlaying(active);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <button
        type="button"
        onClick={handleToggle}
        className={`group relative flex items-center gap-2 rounded-full border-2 border-amber-400 bg-amber-950/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-200 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-amber-300 ${
          isPlaying ? "ring-2 ring-amber-400/60 shadow-[0_0_15px_rgba(255,191,0,0.6)]" : "opacity-85"
        }`}
        title={isPlaying ? "సంగీతం ఆపండి (Pause Sacred Drone)" : "మంగళ నాదం వినండి (Play Sacred Classical Audio)"}
        aria-label="Toggle Sacred Music"
      >
        <Bell className={`h-4 w-4 text-amber-300 transition-transform ${isPlaying ? "animate-bounce" : ""}`} />
        <span className="hidden sm:inline">
          {isPlaying
            ? language === "te"
              ? "మంగళ నాదం • ఆన్"
              : "Mangala Vadyam"
            : language === "te"
              ? "మంగళ నాదం"
              : "Sacred Chime"}
        </span>
        {isPlaying ? (
          <Volume2 className="h-3.5 w-3.5 text-amber-300 animate-pulse" />
        ) : (
          <VolumeX className="h-3.5 w-3.5 text-amber-400/60" />
        )}
      </button>
    </div>
  );
}
