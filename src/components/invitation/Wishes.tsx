import { AnimatePresence, motion } from "motion/react";
import { HeartHandshake } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { invitation } from "@/lib/invitation";
import { SectionHeading } from "./Reveal";

type Wish = { name: string; message: string; date: string };

const STORAGE_KEY = "housewarming-wishes";

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30";

export function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([...invitation.seedWishes]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Merge visitor wishes saved in this browser with the seeded ones.
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as Wish[];
      if (Array.isArray(saved) && saved.length) setWishes([...saved, ...invitation.seedWishes]);
    } catch {
      // first visit — seeded wishes only
    }
  }, []);

  function addWish(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const wish: Wish = {
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
    };
    setWishes((w) => [wish, ...w]);
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as Wish[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([wish, ...existing]));
    } catch {
      // storage unavailable — wish still shows for this visit
    }
    setName("");
    setMessage("");
  }

  return (
    <section id="wishes" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="From your hearts to our walls"
          title="Wishes & blessings"
          intro="Leave a blessing for the new home — we're printing every one of these for the hallway wall."
        />

        <motion.form
          onSubmit={addWish}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 flex max-w-3xl flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-[0_20px_45px_-30px_rgb(0_0_0/0.4)] sm:flex-row"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={`${inputClass} sm:max-w-[180px]`}
            aria-label="Your name"
          />
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your blessing for the new home…"
            className={inputClass}
            aria-label="Your blessing"
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            <HeartHandshake className="h-4 w-4" />
            Bless
          </button>
        </motion.form>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          <AnimatePresence initial={false}>
            {wishes.map((wish, i) => (
              <motion.blockquote
                key={`${wish.name}-${wish.message.slice(0, 16)}-${i}`}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 block break-inside-avoid rounded-2xl border border-border bg-card p-6 shadow-[0_16px_36px_-28px_rgb(0_0_0/0.4)]"
              >
                <span className="font-display text-4xl leading-none text-gold/50" aria-hidden>
                  “
                </span>
                <p className="mt-2 text-[15px] leading-relaxed font-light text-foreground/90">
                  {wish.message}
                </p>
                <footer className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-medium tracking-wide text-foreground">
                    — {wish.name}
                  </span>
                  <span className="uppercase tracking-[0.2em] text-gold-deep">{wish.date}</span>
                </footer>
              </motion.blockquote>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
