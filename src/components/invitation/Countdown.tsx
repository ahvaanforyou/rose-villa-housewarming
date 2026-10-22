import { AnimatePresence, motion } from "motion/react";
import { CalendarPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { eventDate, invitation } from "@/lib/invitation";
import { Ornament, SectionHeading } from "./Reveal";

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
      <div className="relative flex h-24 w-20 items-center justify-center overflow-hidden rounded-xl border border-gold/25 bg-deeper/60 backdrop-blur-sm sm:h-28 sm:w-24">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={shown}
            initial={{ y: 26, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -26, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-medium text-primary-foreground tabular-nums sm:text-5xl"
          >
            {shown}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-3 text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  // Render placeholders on the server, then start the live clock after mount.
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(diff());
    const id = setInterval(() => setParts(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-deep py-24 text-primary-foreground sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(255_255_255/0.05),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeading
          dark
          eyebrow="Save the auspicious day"
          title="Sunday, the 6th of December"
          intro="The muhurat is set, the lamps are bought. We begin at 11:00 in the morning and won't let you leave before sunset."
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-wrap items-stretch justify-center gap-3 sm:gap-5"
        >
          <Tile label="Days" value={parts?.days ?? null} />
          <Tile label="Hours" value={parts?.hours ?? null} />
          <Tile label="Minutes" value={parts?.minutes ?? null} />
          <Tile label="Seconds" value={parts?.seconds ?? null} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <Ornament />
          <a
            href={invitation.event.calendar}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-gold/50 px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-deeper"
          >
            <CalendarPlus className="h-4 w-4 transition-transform group-hover:-rotate-12" />
            Add to calendar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
