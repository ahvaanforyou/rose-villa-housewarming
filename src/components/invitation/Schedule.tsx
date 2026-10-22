import { motion } from "motion/react";
import { invitation } from "@/lib/invitation";
import { useLanguage } from "@/lib/LanguageContext";
import { Ornament } from "./Reveal";
import { Flame, Sun, Sparkles, DoorOpen, BookOpen, Utensils, Heart } from "lucide-react";

const getIcon = (type: string) => {
  switch (type) {
    case "flame":
      return <Flame className="h-5 w-5 text-amber-500" />;
    case "sun":
      return <Sun className="h-5 w-5 text-amber-500" />;
    case "sparkles":
      return <Sparkles className="h-5 w-5 text-amber-500" />;
    case "door":
      return <DoorOpen className="h-5 w-5 text-amber-500" />;
    case "book":
      return <BookOpen className="h-5 w-5 text-amber-500" />;
    case "utensils":
      return <Utensils className="h-5 w-5 text-amber-500" />;
    default:
      return <Heart className="h-5 w-5 text-amber-500" />;
  }
};

export function Schedule() {
  const { t, language } = useLanguage();

  return (
    <section id="schedule" className="relative overflow-hidden py-20 sm:py-28 bg-[#FAF6EE]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/40 bg-amber-50 px-5 py-1 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#7A121D]">
              {language === "te" ? "పూజా క్రతువుల వివరాలు" : "Chronological Ceremony Schedule"}
            </span>
          </div>

          <h2 className="font-serif mt-4 text-3xl sm:text-5xl font-bold text-[#4A0E15] tracking-tight">
            {language === "te"
              ? "మంగళప్రదమైన గృహప్రవేశ క్రతువులు"
              : "Sacred Rituals & Festive Sequence"}
          </h2>

          <p className="mt-3 max-w-xl text-sm sm:text-base text-[#6B5B52] font-serif">
            {language === "te"
              ? "వేద మంత్రోచ్ఛారణల నడుమ నిర్వహించబడు పవిత్ర పూజా కార్యక్రమాలు"
              : "Consecrated poojas and celebratory gatherings held on the auspicious day"}
          </p>

          <Ornament className="mt-4" />
        </div>

        {/* Heavy Ornate Timeline Container */}
        <div className="relative">
          {/* Vertical Golden Spine Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-amber-400 via-amber-600 to-amber-400 shadow-sm" />

          <div className="space-y-8 sm:space-y-12">
            {invitation.schedule.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Timeline Medallion Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-amber-400 bg-gradient-to-br from-[#4A0E15] to-[#2B060B] shadow-lg z-10">
                    {getIcon(item.icon)}
                  </div>

                  {/* Spacer for Desktop Layout */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Event Card Content */}
                  <div
                    className={`ml-12 sm:ml-0 w-[calc(100%-3rem)] sm:w-[calc(50%-2.5rem)] ${
                      isEven ? "sm:pr-6" : "sm:pl-6"
                    }`}
                  >
                    <div className="traditional-card p-5 sm:p-6 border-2 border-amber-500/40 bg-[#FFFDF9] shadow-[0_10px_30px_rgba(90,14,23,0.08)] hover:border-amber-500 transition-all duration-300">
                      {/* Top Time & Badge Pill */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/80 pb-3 mb-3">
                        <span className="font-serif text-sm sm:text-base font-bold text-[#7A121D] tracking-wide">
                          {item.time}
                        </span>

                        <span className="rounded-full bg-amber-100 px-3 py-0.5 text-[11px] font-bold text-[#5A0E17] border border-amber-300">
                          {t(item.badge)}
                        </span>
                      </div>

                      {/* Event Title */}
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#4A0E15]">
                        {t(item.title)}
                      </h3>

                      {/* Event Description Note */}
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#594B42]">
                        {t(item.note)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
