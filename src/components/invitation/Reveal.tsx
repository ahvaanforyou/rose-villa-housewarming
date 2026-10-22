import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

/** Scroll-triggered reveal wrapper used by every section. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Small gold diamond ornament + hairlines. */
export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <span className="gold-hairline h-px w-16" aria-hidden />
      <span className="relative flex h-2.5 w-2.5 rotate-45 items-center justify-center border border-gold">
        <span className="h-1 w-1 bg-gold" />
      </span>
      <span className="gold-hairline h-px w-16" aria-hidden />
    </div>
  );
}

/** Eyebrow + display heading + ornament, revealed on scroll. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p
        className={cn(
          "text-[11px] font-medium uppercase tracking-[0.35em]",
          dark ? "text-gold" : "text-gold-deep",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display mt-4 text-4xl leading-[1.08] font-medium text-balance sm:text-5xl",
          dark ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <Ornament className="mt-6" />
      {intro ? (
        <p
          className={cn(
            "mt-6 text-[15px] leading-relaxed font-light",
            dark ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
