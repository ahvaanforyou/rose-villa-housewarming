import React, { useState } from "react";
import { SacredDiya } from "./SacredDiya";
import { sacredAudio } from "@/lib/audioService";
import { Sparkles, DoorOpen, Volume2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface SimhadwaramDoorProps {
  onDoorOpened?: () => void;
  className?: string;
}

export function SimhadwaramDoor({ onDoorOpened, className = "" }: SimhadwaramDoorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const handleToggleDoor = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    if (nextState) {
      sacredAudio.playTempleBell();
      if (onDoorOpened) {
        onDoorOpened();
      }
    }
  };

  return (
    <div className={`relative flex flex-col items-center justify-center py-6 select-none ${className}`}>
      {/* Sacred Top Arch / Thoranam Canopy */}
      <div className="relative z-20 flex w-full max-w-[340px] flex-col items-center sm:max-w-[420px]">
        {/* Carved Wood Header Architrave */}
        <div className="relative flex w-full items-center justify-between rounded-t-lg border-2 border-amber-600 bg-gradient-to-r from-[#4A1F12] via-[#6A321A] to-[#4A1F12] px-4 py-2 shadow-xl">
          {/* Left Floral Brass Corner */}
          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-amber-200 to-amber-700 shadow border border-amber-300" />

          {/* Center Sacred Ganesha / Shubh Labh Medallion */}
          <div className="flex items-center gap-2 rounded-full border border-amber-400/80 bg-amber-950/80 px-3 py-1 shadow-inner">
            <span className="text-xs font-bold text-amber-300 tracking-widest">
              {language === "te" ? "|| శ్రీ ||" : "|| SRI ||"}
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
            <span className="text-xs font-bold text-amber-300 tracking-widest">
              {language === "te" ? "|| శుభం ||" : "|| SHUBH ||"}
            </span>
          </div>

          {/* Right Floral Brass Corner */}
          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-amber-200 to-amber-700 shadow border border-amber-300" />
        </div>

        {/* Hanging Fresh Mango Leaf & Marigold Toranam Layer */}
        <div className="relative -mt-1 flex w-full items-center justify-around px-2 z-30">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                className="h-3 w-3 rounded-full shadow"
                style={{
                  background:
                    i % 2 === 0
                      ? "radial-gradient(circle, #FFA500, #E65100)"
                      : "radial-gradient(circle, #FFD700, #FF8F00)",
                }}
              />
              <span
                className="h-6 w-3 rounded-b-full bg-gradient-to-b from-green-600 to-emerald-900 shadow-sm -mt-0.5"
                style={{
                  transform: i % 2 === 0 ? "rotate(3deg)" : "rotate(-3deg)",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Door Stage Container with 3D Perspective */}
      <div className="relative flex items-center justify-center perspective-[1200px]">
        {/* Left Guard Diya Lamp */}
        <div className="hidden sm:block absolute -left-16 bottom-2 z-20">
          <SacredDiya size="md" />
        </div>

        {/* Main Double Door Frame */}
        <div className="relative flex h-[360px] w-[280px] sm:h-[420px] sm:w-[340px] overflow-hidden rounded-t-sm border-4 border-[#3D1A0D] bg-gradient-to-b from-[#2B1107] to-[#1A0A04] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          {/* Inner Interior Glow (Revealed when doors open) */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-1000 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "radial-gradient(circle at center, #FFF4D0 0%, #F5D77F 40%, #B8860B 85%, #593D06 100%)",
            }}
          >
            {/* Glowing Sacred Kalasham / Light Motif */}
            <div className="relative flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-amber-100/90 shadow-[0_0_40px_rgba(255,215,0,0.9)] flex items-center justify-center mb-3">
                <Sparkles className="h-8 w-8 text-amber-700 animate-spin" style={{ animationDuration: "12s" }} />
              </div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-amber-950 tracking-wide">
                {language === "te" ? "శ్రీ ఆనంద నిలయం" : "Sri Ananda Nilayam"}
              </p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-amber-900/90 max-w-[220px]">
                {language === "te"
                  ? "గృహప్రవేశ శుభోదయం · సకుటుంబ సపరివార సమేతంగా స్వాగతం!"
                  : "Auspicious Gruhapravesam · Welcome to our sacred sanctuary!"}
              </p>
            </div>
          </div>

          {/* Left Door Panel */}
          <div
            onClick={handleToggleDoor}
            className="relative flex h-full w-1/2 cursor-pointer flex-col justify-between border-r-2 border-amber-900/60 bg-gradient-to-r from-[#44180A] via-[#5C2310] to-[#3A1408] p-3 shadow-2xl transition-transform duration-1000 origin-left"
            style={{
              transform: isOpen ? "rotateY(-78deg)" : "rotateY(0deg)",
              boxShadow: "inset 0 0 15px rgba(0,0,0,0.8)",
            }}
          >
            {/* Ornate Inset Carved Panels */}
            <div className="flex h-full flex-col justify-between gap-3">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="flex flex-1 items-center justify-center rounded border border-amber-700/60 bg-gradient-to-br from-[#381408] to-[#240C04] shadow-inner"
                >
                  {/* Brass Stud / Medallion */}
                  <div className="h-4 w-4 rounded-full bg-gradient-to-br from-amber-300 to-amber-700 shadow-md border border-amber-200" />
                </div>
              ))}
            </div>

            {/* Brass Lion Door Knocker */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-800 shadow-lg border border-amber-300 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-amber-900" />
              </div>
              <div className="h-6 w-5 rounded-b-full border-2 border-amber-400 -mt-2 shadow-sm" />
            </div>
          </div>

          {/* Right Door Panel */}
          <div
            onClick={handleToggleDoor}
            className="relative flex h-full w-1/2 cursor-pointer flex-col justify-between border-l-2 border-amber-900/60 bg-gradient-to-l from-[#44180A] via-[#5C2310] to-[#3A1408] p-3 shadow-2xl transition-transform duration-1000 origin-right"
            style={{
              transform: isOpen ? "rotateY(78deg)" : "rotateY(0deg)",
              boxShadow: "inset 0 0 15px rgba(0,0,0,0.8)",
            }}
          >
            {/* Ornate Inset Carved Panels */}
            <div className="flex h-full flex-col justify-between gap-3">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="flex flex-1 items-center justify-center rounded border border-amber-700/60 bg-gradient-to-br from-[#381408] to-[#240C04] shadow-inner"
                >
                  {/* Brass Stud / Medallion */}
                  <div className="h-4 w-4 rounded-full bg-gradient-to-br from-amber-300 to-amber-700 shadow-md border border-amber-200" />
                </div>
              ))}
            </div>

            {/* Brass Lion Door Knocker */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-800 shadow-lg border border-amber-300 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-amber-900" />
              </div>
              <div className="h-6 w-5 rounded-b-full border-2 border-amber-400 -mt-2 shadow-sm" />
            </div>
          </div>
        </div>

        {/* Right Guard Diya Lamp */}
        <div className="hidden sm:block absolute -right-16 bottom-2 z-20">
          <SacredDiya size="md" />
        </div>
      </div>

      {/* Golden Brass Threshold (గడప / సింహద్వార గడప) */}
      <div className="relative z-20 -mt-1 flex w-full max-w-[320px] sm:max-w-[390px] flex-col items-center">
        {/* Brass Plated Threshold Beam */}
        <div className="h-4 w-full rounded-b-md bg-gradient-to-r from-amber-800 via-amber-400 to-amber-800 shadow-lg border-t border-amber-200 flex items-center justify-around px-4">
          <div className="h-1.5 w-1.5 rounded-full bg-red-700" title="Kumkum Tilak" />
          <div className="h-1.5 w-1.5 rounded-full bg-amber-200" title="Turmeric Pasupu" />
          <div className="h-1.5 w-1.5 rounded-full bg-red-700" title="Kumkum Tilak" />
          <div className="h-1.5 w-1.5 rounded-full bg-amber-200" title="Turmeric Pasupu" />
          <div className="h-1.5 w-1.5 rounded-full bg-red-700" title="Kumkum Tilak" />
        </div>

        {/* Sacred Kolam / Muggu Rangoli on the Floor */}
        <div className="mt-2 flex flex-col items-center">
          <svg width="180" height="24" viewBox="0 0 180 24" fill="none" className="opacity-80">
            <path
              d="M10 12C30 4 60 20 90 12C120 4 150 20 170 12"
              stroke="#D4AF37"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="50" cy="12" r="3" fill="#D4AF37" />
            <circle cx="90" cy="12" r="4" fill="#C83228" />
            <circle cx="130" cy="12" r="3" fill="#D4AF37" />
          </svg>
        </div>
      </div>

      {/* Interactive Trigger Button */}
      <button
        type="button"
        onClick={handleToggleDoor}
        className="group relative z-30 mt-4 inline-flex items-center gap-2.5 rounded-full border-2 border-amber-400 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-950 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200 shadow-xl transition-all duration-300 hover:scale-105 hover:border-amber-300 hover:from-amber-800 hover:to-amber-900 active:scale-95"
      >
        <DoorOpen className="h-4 w-4 text-amber-300 transition-transform group-hover:rotate-12" />
        <span>
          {isOpen
            ? language === "te"
              ? "ద్వారం మూయండి · Close Door"
              : "Close Doorway"
            : language === "te"
            ? "ద్వారం తెరవండి · Tap to Open"
            : "Tap to Open Simhadwaram"}
        </span>
      </button>
    </div>
  );
}
