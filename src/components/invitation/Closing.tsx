import { motion } from "motion/react";
import { Copy, Check, MessageCircle, ArrowUp } from "lucide-react";
import { useState } from "react";
import { invitation } from "@/lib/invitation";
import { Ornament } from "./Reveal";

export function Closing() {
  const [copied, setCopied] = useState(false);

  const shareText = encodeURIComponent(
    `You're invited! Housewarming of ${invitation.hosts.join(" & ")} — ${invitation.event.weekday}, ${invitation.event.dateLong}, ${invitation.event.startTime}. ${invitation.addressLine}, ${invitation.city}.`,
  );

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // clipboard blocked — nothing to show
    }
  }

  return (
    <footer className="relative overflow-hidden bg-deeper py-24 text-primary-foreground sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgb(255_255_255/0.05),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Ornament />
          <p className="font-display mt-10 text-3xl leading-snug font-light text-primary-foreground/90 sm:text-4xl">
            May every corner of this home echo with laughter,
            <br className="hidden sm:block" /> may its kitchen always smell of something
            delicious,
            <br className="hidden sm:block" /> and may everyone who enters leave happier.
          </p>
          <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
            With love & gratitude
          </p>
          <p className="font-display mt-3 text-2xl text-gold-shimmer">{invitation.family}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`https://wa.me/?text=${shareText}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-gold/50 px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-deeper"
          >
            <MessageCircle className="h-4 w-4" />
            Share on WhatsApp
          </a>
          <button
            onClick={copyLink}
            className="inline-flex items-center gap-2.5 rounded-full border border-gold/50 px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-gold transition-all hover:bg-gold hover:text-deeper"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Link copied!" : "Copy invitation link"}
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 text-[11px] font-light tracking-[0.2em] text-primary-foreground/40 uppercase"
        >
          {invitation.event.dateLong} · {invitation.addressLine} · {invitation.city}
        </motion.p>

        <a
          href="#welcome"
          className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold/70 transition-colors hover:text-gold"
        >
          <ArrowUp className="h-4 w-4" />
          Back to the top
        </a>
      </div>
    </footer>
  );
}
