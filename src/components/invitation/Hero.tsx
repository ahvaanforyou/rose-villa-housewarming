import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroHome from "@/assets/hero-home.jpg";
import { invitation } from "@/lib/invitation";

/** Deterministic pseudo-random so SSR and client agree. */
const embers = Array.from({ length: 14 }, (_, i) => ({
  left: 4 + ((i * 73) % 92),
  size: 6 + ((i * 37) % 10),
  duration: 11 + ((i * 29) % 9),
  delay: -((i * 53) % 18),
  driftX: ((i * 17) % 48) - 24,
}));

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const veil = useTransform(scrollYProgress, [0, 1], [0.35, 0.75]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const contentFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const rise = {
    hidden: { opacity: 0, y: 44, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-deeper"
    >
      {/* Cinematic house reveal: slow ken-burns zoom + parallax on scroll */}
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <motion.img
          src={heroHome}
          alt="Our new home glowing at dusk"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          initial={{ scale: 1.18, opacity: 0 }}
          animate={{ scale: 1.04, opacity: 1 }}
          transition={{ duration: 3.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      <motion.div
        style={{ opacity: veil }}
        className="absolute inset-0 bg-deeper"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,var(--deeper)_95%)]"
        aria-hidden
      />

      {/* Drifting golden embers */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {embers.map((e, i) => (
          <span
            key={i}
            className="ember"
            style={
              {
                left: `${e.left}%`,
                width: e.size,
                height: e.size,
                animationDuration: `${e.duration}s`,
                animationDelay: `${e.delay}s`,
                "--drift-x": `${e.driftX}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentFade }}
        className="relative z-10 px-6 text-center"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.35, delayChildren: 0.7 } } }}
        >
          <motion.p
            variants={rise}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] font-medium uppercase tracking-[0.45em] text-gold sm:text-xs"
          >
            {invitation.hosts.join(" & ")} · {invitation.family}
          </motion.p>

          <motion.h1
            variants={rise}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-6 text-[17vw] leading-[0.95] font-medium tracking-tight text-primary-foreground sm:text-8xl md:text-9xl"
          >
            <span className="text-gold-shimmer">Housewarming</span>
          </motion.h1>

          <motion.p
            variants={rise}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mx-auto mt-6 max-w-xl text-xl font-light text-primary-foreground/85 italic sm:text-2xl"
          >
            “{invitation.tagline}”
          </motion.p>

          <motion.div
            variants={rise}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 inline-flex flex-col items-center gap-1 rounded-full border border-gold/40 bg-deeper/40 px-8 py-4 backdrop-blur-sm sm:flex-row sm:gap-4"
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              {invitation.event.weekday}
            </span>
            <span className="hidden h-1 w-1 rotate-45 bg-gold sm:block" aria-hidden />
            <span className="font-display text-lg text-primary-foreground sm:text-xl">
              {invitation.event.dateLong} · {invitation.event.startTime}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#welcome"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold/80 transition-colors hover:text-gold"
        aria-label="Scroll to the invitation"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
