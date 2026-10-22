import { motion } from "motion/react";
import roomLiving from "@/assets/room-living.jpg";
import { invitation } from "@/lib/invitation";
import { useLanguage } from "@/lib/LanguageContext";
import { Reveal, Ornament } from "./Reveal";
import { SacredDiya } from "../traditional/SacredDiya";
import { Sparkles, Heart } from "lucide-react";

export function Welcome() {
  const { t, language } = useLanguage();

  return (
    <section id="welcome" className="relative overflow-hidden py-20 sm:py-28 bg-[#FAF6EE]">
      {/* Decorative Traditional Toranam / Golden Ambient Accents */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-red-100/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Top Header Pill */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/40 bg-amber-50 px-5 py-1 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#7A121D]">
              {language === "te" ? "హృదయపూర్వక ఆహ్వానం" : "Sacred Welcome Message"}
            </span>
          </div>

          <h2 className="font-serif mt-4 text-3xl sm:text-5xl font-bold text-[#4A0E15] tracking-tight">
            {language === "te"
              ? "మా నూతన గృహప్రవేశ ఆహ్వానం"
              : "Welcome to Our New Residence"}
          </h2>

          <Ornament className="mt-4" />
        </div>

        {/* Heavy Ornate Card Container */}
        <div className="traditional-card p-6 sm:p-12 border-2 border-amber-500/50 bg-[#FFFDF9] shadow-[0_20px_60px_-15px_rgba(90,14,23,0.18)]">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Content Column */}
            <div>
              <Reveal>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-700 shadow-sm" />
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#7A121D]">
                    {language === "te" ? "సర్వే జనాః సుఖినో భవంతు" : "With Divine Blessings"}
                  </p>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-snug text-[#4A0E15]">
                  {t(invitation.houseName)} · {t(invitation.family)}
                </h3>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mt-6 font-serif text-base sm:text-lg font-medium leading-relaxed text-[#5A0E17] italic border-l-4 border-amber-500 pl-4 py-1 bg-amber-50/60 rounded-r-lg">
                  “{t(invitation.welcomeIntro)}”
                </p>

                <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-[#4A3B32]">
                  {invitation.welcomeParas[language].map((para, i) => (
                    <p key={i} className="font-normal">
                      {para}
                    </p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t-2 border-dashed border-amber-300 pt-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#7A121D] font-bold">
                      {language === "te" ? "ఆహ్వానించువారు (Hosts)" : "Graciously Invited By"}
                    </p>
                    <p className="font-serif text-lg sm:text-xl font-bold text-[#4A0E15] mt-1">
                      {invitation.hosts[language].join(" & ")}
                    </p>
                    <p className="text-xs text-amber-900/80 tracking-wide mt-0.5">
                      {language === "te"
                        ? `పిల్లలు: ${invitation.kids.te.join(" & ")}`
                        : `Children: ${invitation.kids.en.join(" & ")}`}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto rounded-full bg-amber-100/80 px-4 py-2 border border-amber-300 text-xs font-semibold text-amber-900">
                    <Heart className="h-4 w-4 text-red-600 fill-red-600" />
                    <span>{language === "te" ? "సకుటుంబ సపరివార సమేతంగా" : "With Family"}</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Photo Column with Ornate Filigree Frame */}
            <Reveal delay={0.2} y={30}>
              <motion.div
                className="relative mx-auto max-w-md lg:max-w-none"
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
              >
                {/* Layered Antique Gold Frame */}
                <div
                  className="absolute -inset-3 rotate-1 rounded-2xl border-2 border-amber-500/60 bg-amber-50/50 shadow-md"
                  aria-hidden="true"
                />

                <div className="relative -rotate-1 overflow-hidden rounded-2xl border-2 border-amber-600 bg-neutral-900 shadow-[0_25px_50px_-20px_rgba(90,14,23,0.35)]">
                  <motion.img
                    src={roomLiving}
                    alt="Interior of Sri Ananda Nilayam glowing with lamps"
                    width={1200}
                    height={1200}
                    loading="lazy"
                    className="h-full w-full object-cover filter brightness-[0.95]"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Gradient Bottom Shadow */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#240509]/90 via-transparent to-transparent"
                    aria-hidden="true"
                  />

                  {/* Sacred Quote at Bottom of Photo */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <p className="font-serif text-base sm:text-lg text-amber-100 font-semibold italic">
                        {language === "te"
                          ? "“మంగళప్రదమైన నవ గృహ ప్రవేశం”"
                          : "“A Home Consecrated in Peace and Grace”"}
                      </p>
                      <p className="text-[11px] text-amber-300 tracking-wider">
                        {language === "te" ? "శ్రీ ఆనంద నిలయం · 2026" : "Sri Ananda Nilayam · Hyderabad"}
                      </p>
                    </div>

                    <SacredDiya size="sm" showStand={false} />
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
