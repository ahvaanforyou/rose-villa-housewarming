import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { invitation } from "@/lib/invitation";
import { useLanguage } from "@/lib/LanguageContext";
import { Ornament } from "./Reveal";
import { Maximize2, X, Sparkles } from "lucide-react";

export function HomeTour() {
  const { t, language } = useLanguage();
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");

  return (
    <section id="tour" className="relative overflow-hidden py-20 sm:py-28 bg-[#FAF6EE]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/40 bg-amber-50 px-5 py-1 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#7A121D]">
              {language === "te" ? "నవ గృహ దర్శనం" : "Explore Our New Abode"}
            </span>
          </div>

          <h2 className="font-serif mt-4 text-3xl sm:text-5xl font-bold text-[#4A0E15] tracking-tight">
            {language === "te"
              ? "శ్రీ ఆనంద నిలయం అందాలు"
              : "A Glimpse into Sri Ananda Nilayam"}
          </h2>

          <p className="mt-3 max-w-xl text-sm sm:text-base text-[#6B5B52] font-serif">
            {language === "te"
              ? "మా కలల సౌధం · ప్రశాంతత, సంప్రదాయం, మరియు ప్రేమానురాగాల సమ్మేళనం"
              : "Handcrafted spaces consecrated for peace, sacred poojas, and joyous gatherings"}
          </p>

          <Ornament className="mt-4" />
        </div>

        {/* 4 Heavy Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {invitation.rooms.map((room, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="traditional-card overflow-hidden border-2 border-amber-500/50 bg-[#FFFDF9] shadow-[0_15px_35px_rgba(90,14,23,0.1)] group flex flex-col"
            >
              {/* Photo Frame Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
                <img
                  src={room.image}
                  alt={t(room.name)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.95]"
                />

                {/* Subtle Inner Gold Border */}
                <div className="absolute inset-2 border border-amber-400/40 rounded-lg pointer-events-none" />

                {/* Zoom Trigger Overlay Button */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveImage(room.image);
                    setActiveTitle(t(room.name));
                  }}
                  className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-amber-950/80 text-amber-200 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-110 border border-amber-400/60"
                  aria-label="Enlarge photo"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>

              {/* Room Content Card */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#7A121D]">
                      {language === "te" ? `గృహ దర్శనం 0${idx + 1}` : `Room Highlight 0${idx + 1}`}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A0E15]">
                    {t(room.name)}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#594B42]">
                    {t(room.caption)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border-2 border-amber-400/80 bg-neutral-900 shadow-2xl"
            >
              <img
                src={activeImage}
                alt={activeTitle}
                className="max-h-[80vh] w-full object-contain"
              />

              <div className="flex items-center justify-between border-t border-amber-500/40 bg-neutral-950 px-6 py-4 text-amber-100">
                <p className="font-serif text-lg font-bold">{activeTitle}</p>
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="rounded-full bg-amber-900/80 p-2 text-amber-200 hover:bg-amber-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
