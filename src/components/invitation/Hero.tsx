import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { useRef } from "react";
import heroHome from "@/assets/hero-home.jpg";
import { invitation } from "@/lib/invitation";
import { useLanguage } from "@/lib/LanguageContext";
import { TraditionalToranam } from "../traditional/TraditionalToranam";
import { SimhadwaramDoor } from "../traditional/SimhadwaramDoor";
import { SacredDiya } from "../traditional/SacredDiya";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const veil = useTransform(scrollYProgress, [0, 1], [0.65, 0.88]);

  const rise = {
    hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-[#240509] text-amber-100 pt-16 pb-20"
    >
      {/* Sacred Fresh Mango Leaf & Marigold Toranam across Top */}
      <TraditionalToranam className="absolute top-0 left-0 right-0" />

      {/* Background Architectural House Glow with Parallax */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 z-0">
        <motion.img
          src={heroHome}
          alt="Sri Ananda Nilayam illuminated for Gruhapravesam"
          width={1920}
          height={1080}
          className="h-full w-full object-cover filter brightness-[0.6] contrast-[1.1]"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.03, opacity: 1 }}
          transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      {/* Royal Crimson & Deep Charcoal Vignette */}
      <motion.div
        style={{ opacity: veil }}
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#2B060B]/90 via-[#38090E]/80 to-[#1F0407]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      {/* Main Sacred Stage Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center mt-6">
        {/* Sacred Sanskrit / Vedic Invocations */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={rise}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Ornate Gold Invocation Banner */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-[#400B12]/80 px-4 py-1.5 shadow-lg backdrop-blur-sm sm:px-6">
            <span className="text-amber-300 font-serif text-xs sm:text-sm font-semibold tracking-wider">
              {t(invitation.sacredHeading)}
            </span>
          </div>

          <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.35em] text-amber-300/90 font-medium">
            {t(invitation.ceremonySubheading)}
          </p>
        </motion.div>

        {/* Traditional Simhadwaram Double Door Reveal with Sacred Diya Lamps */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-full my-2"
        >
          <SimhadwaramDoor />
        </motion.div>

        {/* House Name & Celebration Heading */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.25, delayChildren: 0.8 } } }}
          className="flex flex-col items-center mt-2"
        >
          {/* Golden Shimmer House Name */}
          <motion.div variants={rise} className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-400" />
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-gold-shimmer">
              {t(invitation.houseName)}
            </h2>
            <Sparkles className="h-5 w-5 text-amber-400" />
          </motion.div>

          {/* Ceremony Title */}
          <motion.h1
            variants={rise}
            className="font-serif mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-amber-100"
          >
            {t(invitation.event.title)}
          </motion.h1>

          {/* Host Names Card */}
          <motion.div
            variants={rise}
            className="mt-4 rounded-xl border border-amber-500/40 bg-[#4A0E15]/70 px-6 py-2.5 shadow-lg backdrop-blur-sm"
          >
            <p className="font-serif text-base sm:text-xl font-medium text-amber-200">
              {t(invitation.family)}
            </p>
            <p className="text-xs text-amber-300/80 tracking-wider mt-0.5">
              {language === "te"
                ? "సకుటుంబ సపరివార సమేతంగా మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నాము"
                : "Cordially invites you with family and friends"}
            </p>
          </motion.div>

          {/* Sacred Tagline */}
          <motion.p
            variants={rise}
            className="font-serif mx-auto mt-4 max-w-xl text-sm sm:text-base font-normal italic text-amber-100/90"
          >
            “{t(invitation.tagline)}”
          </motion.p>

          {/* Auspicious Muhurtham Pill Box */}
          <motion.div
            variants={rise}
            className="mt-6 flex flex-col items-center gap-2 rounded-2xl border-2 border-amber-400/60 bg-gradient-to-r from-[#4A0E15] via-[#5F121C] to-[#4A0E15] px-6 py-3.5 shadow-2xl"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-300">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-amber-400" />
                {t(invitation.event.weekday)}, {t(invitation.event.dateLong)}
              </span>
              <span className="hidden sm:inline text-amber-400/60">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-400" />
                {t(invitation.event.muhurthamTime)}
              </span>
            </div>

            <p className="text-[11px] sm:text-xs text-amber-200/90 font-serif italic tracking-wide">
              {t(invitation.event.muhurthamVedic)}
            </p>
          </motion.div>

          {/* Action Navigation Buttons */}
          <motion.div variants={rise} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#welcome"
              className="inline-flex items-center gap-2 rounded-full border-2 border-amber-400 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-950 shadow-xl transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <span>{language === "te" ? "ఆహ్వాన విశేషాలు వీక్షించండి" : "Read Sacred Invitation"}</span>
            </a>

            <a
              href="#schedule"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-[#38080E]/70 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-200 shadow-md backdrop-blur-sm transition-transform duration-300 hover:border-amber-300 hover:bg-[#4A0E15]"
            >
              <span>{language === "te" ? "పూజా ముహూర్తాల వివరాలు" : "Pooja Timings"}</span>
            </a>

            <a
              href="#rsvp"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-[#38080E]/70 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-200 shadow-md backdrop-blur-sm transition-transform duration-300 hover:border-amber-300 hover:bg-[#4A0E15]"
            >
              <span>{language === "te" ? "హాజరు నిర్ధారణ (RSVP)" : "RSVP & Blessings"}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Down Scroll Cue */}
      <motion.a
        href="#welcome"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-10 text-amber-400/80 transition-colors hover:text-amber-300"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-amber-300">
            {language === "te" ? "క్రిందికి స్క్రోల్ చేయండి" : "Scroll to Explore"}
          </span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
