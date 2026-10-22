import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { invitation } from "@/lib/invitation";
import { useLanguage } from "@/lib/LanguageContext";
import { Ornament } from "./Reveal";
import { MessageSquarePlus, Heart, Sparkles, Send } from "lucide-react";

export function Wishes() {
  const { t, language } = useLanguage();
  const [wishes, setWishes] = useState(invitation.seedWishes);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setWishes([
      {
        name: name.trim(),
        message: message.trim(),
        date: language === "te" ? "ఇప్పుడే" : "Just now",
      },
      ...wishes,
    ]);

    setName("");
    setMessage("");
  };

  return (
    <section id="wishes" className="relative overflow-hidden py-20 sm:py-28 bg-[#FAF6EE]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/40 bg-amber-50 px-5 py-1 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#7A121D]">
              {language === "te" ? "శుభాశీస్సులు & సందేశాలు" : "Blessings & Guestbook"}
            </span>
          </div>

          <h2 className="font-serif mt-4 text-3xl sm:text-5xl font-bold text-[#4A0E15] tracking-tight">
            {language === "te"
              ? "బంధుమిత్రుల మంగళాశాసనాలు"
              : "Heartfelt Wishes for Sri Ananda Nilayam"}
          </h2>

          <p className="mt-3 max-w-xl text-sm sm:text-base text-[#6B5B52] font-serif">
            {language === "te"
              ? "నూతన గృహ ప్రవేశ శుభ సందర్భంగా మీ అమూల్యమైన శుభాకాంక్షలను తెలపండి"
              : "Leave your blessings and congratulations for the new beginning"}
          </p>

          <Ornament className="mt-4" />
        </div>

        {/* Post a Wish Form */}
        <div className="traditional-card p-6 sm:p-8 mb-12 border-2 border-amber-500/50 bg-[#FFFDF9] shadow-[0_15px_40px_rgba(90,14,23,0.1)]">
          <form onSubmit={handleAddWish} className="space-y-4">
            <div className="flex items-center gap-2 text-[#7A121D] font-bold text-sm uppercase tracking-wider mb-2">
              <MessageSquarePlus className="h-4 w-4" />
              <span>{language === "te" ? "మీ శుభాకాంక్షలను వ్రాయండి" : "Write Your Blessing"}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={language === "te" ? "మీ పేరు (Your Name)" : "Your Name"}
                className="w-full rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm text-[#3D2C24] shadow-sm focus:border-amber-500 focus:outline-none"
              />

              <input
                type="text"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  language === "te"
                    ? "మీ ఆశీర్వాదం / సందేశం (Your Blessing Message)"
                    : "Your warm wishes & blessings..."
                }
                className="sm:col-span-2 w-full rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm text-[#3D2C24] shadow-sm focus:border-amber-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400 bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-amber-950 shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <Send className="h-3.5 w-3.5" />
              <span>{language === "te" ? "సందేశం పంపండి" : "Post Blessing"}</span>
            </button>
          </form>
        </div>

        {/* Wishes Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence initial={false}>
            {wishes.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="traditional-card p-5 sm:p-6 border border-amber-400/60 bg-[#FFFDF9] shadow-[0_8px_20px_rgba(90,14,23,0.06)] hover:border-amber-500 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-amber-200/60 pb-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-red-600 fill-red-600" />
                    <span className="font-serif text-sm sm:text-base font-bold text-[#4A0E15]">
                      {w.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#7A121D] font-medium">
                    {w.date}
                  </span>
                </div>

                <p className="font-serif text-xs sm:text-sm leading-relaxed text-[#4A3B32] italic">
                  “{w.message}”
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
