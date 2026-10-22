import { motion } from "motion/react";
import { invitation } from "@/lib/invitation";
import { SectionHeading } from "./Reveal";

export function HomeTour() {
  return (
    <section id="tour" className="bg-secondary/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="A peek inside"
          title="Explore our new home"
          intro="Three of our favourite corners. The rest you'll have to come and see."
        />

        <div className="mt-16 grid gap-6 sm:gap-8 md:grid-cols-3">
          {invitation.rooms.map((room, i) => (
            <motion.figure
              key={room.name}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group ${i === 1 ? "md:mt-12" : ""}`}
            >
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-[0_24px_50px_-30px_rgb(0_0_0/0.4)]">
                <motion.img
                  src={room.image}
                  alt={room.name}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.45),transparent_55%)] opacity-80 transition-opacity group-hover:opacity-60"
                  aria-hidden
                />
                <span className="absolute top-4 left-4 rounded-full border border-gold/40 bg-deeper/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-gold backdrop-blur-sm">
                  Room 0{i + 1}
                </span>
                <figcaption className="absolute right-5 bottom-5 left-5">
                  <h3 className="font-display text-2xl font-medium text-primary-foreground">
                    {room.name}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed font-light text-primary-foreground/80">
                    {room.caption}
                  </p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
