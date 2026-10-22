import { motion } from "motion/react";
import { invitation } from "@/lib/invitation";
import { SectionHeading } from "./Reveal";

export function Schedule() {
  return (
    <section id="schedule" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Order of the day"
          title="The ceremony schedule"
          intro="One unhurried day. Arrive when you can — the door stays open."
        />

        <div className="relative mt-16">
          {/* Gold rail */}
          <div
            className="absolute top-2 bottom-2 left-[15px] w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent sm:left-[19px]"
            aria-hidden
          />

          <ol className="space-y-10">
            {invitation.schedule.map((item, i) => (
              <li key={item.title}>
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex gap-6 sm:gap-8"
                >
                  <span className="relative z-10 mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-card sm:h-10 sm:w-10">
                    <span className="h-2 w-2 rotate-45 bg-gold" />
                  </span>
                  <div className="flex-1 rounded-2xl border border-border bg-card p-6 shadow-[0_18px_40px_-30px_rgb(0_0_0/0.4)] transition-shadow hover:shadow-[0_24px_50px_-28px_rgb(0_0_0/0.45)] sm:p-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-2xl font-medium sm:text-3xl">
                        {item.title}
                      </h3>
                      <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold-deep">
                        {item.time}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                      {item.note}
                    </p>
                  </div>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
