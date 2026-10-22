import { motion } from "motion/react";
import roomLiving from "@/assets/room-living.jpg";
import { invitation } from "@/lib/invitation";
import { Ornament, Reveal } from "./Reveal";

export function Welcome() {
  return (
    <section id="welcome" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold-deep">
              With heartfelt joy
            </p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] font-medium text-balance sm:text-5xl">
              Welcome to our <em className="text-primary not-italic">new home</em>
            </h2>
            <Ornament className="mt-6 justify-start" />
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 text-[15px] leading-relaxed font-light text-muted-foreground sm:text-base">
              After two years of drawings, delays, cement dust and endless site visits, the
              keys are finally in our hands. The walls are painted, the lamps are lit, and
              the kettle is already on.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed font-light text-muted-foreground sm:text-base">
              But a house only becomes a home when the people we love walk through its
              door. So we're opening every room, laying the table for twelve, and keeping
              the whole day free — just for you.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed font-light text-muted-foreground sm:text-base">
              Come bless our beginning. Bring your families, your appetites and your
              loudest laughter.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex items-end justify-between gap-6 border-t border-border pt-6">
              <div>
                <p className="font-display text-2xl text-primary">
                  {invitation.hosts.join(", ")} &
                  <span className="text-foreground/80"> the kids</span>
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {invitation.kids.join(" · ")} — chief home-tour guides
                </p>
              </div>
              <span className="font-display text-5xl text-gold/60 italic" aria-hidden>
                ”
              </span>
            </div>
          </Reveal>
        </div>

        {/* Framed portrait of the home */}
        <Reveal delay={0.2} y={48}>
          <motion.div
            className="relative mx-auto max-w-md lg:max-w-none"
            whileHover={{ rotate: 0, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
          >
            <div
              className="absolute -inset-3 rotate-2 rounded-2xl border border-gold/50 bg-card"
              aria-hidden
            />
            <div className="relative -rotate-1 overflow-hidden rounded-2xl border border-gold/30 shadow-[0_30px_60px_-25px_rgb(0_0_0/0.35)]">
              <motion.img
                src={roomLiving}
                alt="A warm living corner of the new home"
                width={1200}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.25),transparent_45%)]"
                aria-hidden
              />
              <p className="font-display absolute bottom-5 left-6 right-6 text-lg text-primary-foreground/90 italic">
                “The first lamp we lit — 6:04 PM, 14 October 2026.”
              </p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
