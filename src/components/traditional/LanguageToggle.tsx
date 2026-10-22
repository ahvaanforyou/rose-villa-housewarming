import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 left-4 z-50 flex items-center">
      <div className="flex items-center rounded-full border-2 border-amber-400/80 bg-amber-950/90 p-1 text-xs font-semibold shadow-2xl backdrop-blur-md">
        <button
          type="button"
          onClick={() => setLanguage("te")}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1 transition-all ${
            language === "te"
              ? "bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 font-bold shadow-md"
              : "text-amber-200/80 hover:text-white"
          }`}
        >
          <span>తెలుగు</span>
        </button>
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1 transition-all ${
            language === "en"
              ? "bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 font-bold shadow-md"
              : "text-amber-200/80 hover:text-white"
          }`}
        >
          <span>English</span>
        </button>
      </div>
    </div>
  );
}
