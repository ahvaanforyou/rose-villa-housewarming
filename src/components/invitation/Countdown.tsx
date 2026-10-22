import { AnimatePresence, motion } from "motion/react";
import { CalendarPlus, Clock, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { eventDate, invitation } from "@/lib/invitation";
import { useLanguage } from "@/lib/LanguageContext";
import { Ornament } from "./Reveal";
import { SacredDiya } from "../traditional/SacredDiya";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diff(): Parts {
  const ms = Math.max(0, eventDate.getTime() - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor(ms / 3_600_000) % 24,
    minutes: Math.floor(ms / 60_000) % 60,
    seconds: Math.floor(ms / 1_000) % 60,
  };
}

function Tile({ label, value }: { label: string; value: number | null }) {
  const shown = value === null ? "—" : String(value).padStart(2, "0");
  return (
    <div className="relative flex flex-col items-center">
      {/* Heavy Ornate Brass Countdown Medallion */}
      <div className="relative flex h-24 w-20 sm:h-32 sm:w-28 items-center justify-center overflow-hidden rounded-2xl border-2 border-amber-400/80 bg-gradient-to-b from-[#4A0E15] via-[#38080E] to-[#240509] shadow-[0_10px_25px_rgba(0,0,0,0.6)] backdrop-blur-md">
        {/* Subtle Brass Corner Accents */}
        <div className="absolute top-1 left-1 h-2 w-2 rounded-full bg-amber-300 shadow" />
        <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-amber-300 shadow" />
        <div className="absolute bottom-1 left-1 h-2 w-2 rounded-full bg-amber-300 shadow" />
        <div className="absolute bottom-1 right-1 h-2 w-2 rounded-full bg-amber-300 shadow" />

        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={shown}
            initial={{ y: 22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -22, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-amber-100 tabular-nums drop-shadow-[0_2px_8px_rgba(255,215,0,0.4)]"
          >
            {shown}
          </motion.span>
        </AnimatePresence>

        {/* Center Golden Hairline divider */}
        <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-amber-400/20" />
      </div>

      <span className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-amber-300 font-serif">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const [parts, setParts] = useState<Parts | null>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    setParts(diff());
    const id = setInterval(() => setParts(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#240509] via-[#35080E] to-[#240509] py-20 sm:py-28 text-amber-100">
      {/* Golden Mandala Ambient Rings */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        {/* Sacred Section Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-[#400B12]/90 px-5 py-1.5 shadow-md">
          <Sparkles className="h-4 w-4 text-amber-300" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-200">
            {language === "te" ? "శుభ ముహూర్తం కౌంట్‌డౌన్" : "Sacred Muhurtham Countdown"}
          </span>
          <Sparkles className="h-4 w-4 text-amber-300" />
        </div>

        {/* Auspicious Muhurtham Heading */}
        <h2 className="font-serif mt-5 text-3xl sm:text-5xl font-bold text-amber-100 tracking-tight">
          {t(invitation.event.weekday)}, {t(invitation.event.dateLong)}
        </h2>

        {/* Vedic Astrological Muhurtham Details Box */}
        <div className="mx-auto mt-6 max-w-2xl rounded-2xl border-2 border-amber-400/60 bg-[#450C13]/80 p-5 shadow-2xl backdrop-blur-sm">
          <p className="font-serif text-lg sm:text-xl font-bold text-amber-200">
            {t(invitation.event.muhurthamTime)}
          </p>
          <p className="font-serif mt-1 text-xs sm:text-sm italic text-amber-300/90 tracking-wide">
            {t(invitation.event.muhurthamVedic)}
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-amber-200/80">
            <Clock className="h-3.5 w-3.5 text-amber-400" />
            <span>
              {language === "te"
                ? "సకుటుంబంగా విచ్చేసి నూతన గృహప్రవేశ క్రతువులను తిలకించండి"
                : "Please join us for the sacred threshold crossing & milk boiling ceremony"}
            </span>
          </div>
        </div>

        {/* 4 Heavy Countdown Medallions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-6"
        >
          <Tile label={language === "te" ? "రోజులు" : "Days"} value={parts?.days ?? null} />
          <Tile label={language === "te" ? "గంటలు" : "Hours"} value={parts?.hours ?? null} />
          <Tile label={language === "te" ? "నిమిషాలు" : "Minutes"} value={parts?.minutes ?? null} />
          <Tile label={language === "te" ? "సెకన్లు" : "Seconds"} value={parts?.seconds ?? null} />
        </motion.div>

        {/* Add to Calendar Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-12 flex flex-col items-center gap-5"
        >
          <Ornament />
          <a
            href={invitation.event.calendar}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border-2 border-amber-400 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-amber-950 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] active:scale-95"
          >
            <CalendarPlus className="h-4 w-4 text-amber-950 transition-transform group-hover:-rotate-12" />
            <span>{language === "te" ? "క్యాలెండర్‌కు జోడించండి" : "Add to Calendar"}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
