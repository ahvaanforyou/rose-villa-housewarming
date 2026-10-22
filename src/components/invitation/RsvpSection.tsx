import { AnimatePresence, motion } from "motion/react";
import { Check, PartyPopper, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SectionHeading } from "./Reveal";

type Rsvp = {
  name: string;
  contact: string;
  attending: "yes" | "no";
  guests: string;
  note: string;
};

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30";

export function RsvpSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<Rsvp>({
    name: "",
    contact: "",
    attending: "yes",
    guests: "2",
    note: "",
  });

  function update<K extends keyof Rsvp>(key: K, value: Rsvp[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) return;
    setSubmitted(true);
  }

  return (
    <section id="rsvp" className="bg-secondary/60 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <SectionHeading
          eyebrow="Will you join us?"
          title="RSVP & guest confirmation"
          intro="Kindly respond by 28 November 2026, so the biryani pot is the right size."
        />

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[0_30px_60px_-35px_rgb(0_0_0/0.45)] sm:p-10"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center py-8 text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.15 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground"
                >
                  <Check className="h-7 w-7" />
                </motion.span>
                <h3 className="font-display mt-6 text-3xl font-medium">
                  {form.attending === "yes" ? "We can't wait to see you!" : "We'll miss you!"}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed font-light text-muted-foreground">
                  {form.attending === "yes"
                    ? `${form.name}, your seat${form.guests === "1" ? "" : `s (${form.guests})`} are saved. See you on 6 December at 11:00 AM.`
                    : `Thank you for letting us know, ${form.name}. We'll raise a cup of sheer khurma to you anyway.`}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ ...form, name: "", note: "" });
                  }}
                  className="mt-8 text-xs font-medium uppercase tracking-[0.25em] text-gold-deep underline-offset-4 hover:underline"
                >
                  Submit another response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -16 }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                      Your name(s)
                    </span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Farhan Mohammed"
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                      Phone or email
                    </span>
                    <input
                      value={form.contact}
                      onChange={(e) => update("contact", e.target.value)}
                      placeholder="So we can send the reminder"
                      className={inputClass}
                    />
                  </label>
                </div>

                <fieldset>
                  <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    Will you attend?
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {(
                      [
                        ["yes", "Joyfully accepts"],
                        ["no", "Regretfully declines"],
                      ] as const
                    ).map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => update("attending", value)}
                        className={`rounded-xl border px-4 py-3 text-sm transition-all ${
                          form.attending === value
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-input bg-background font-light text-muted-foreground hover:border-gold/60"
                        }`}
                      >
                        {value === "yes" && <PartyPopper className="mr-2 inline h-4 w-4" />}
                        {label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    Total guests (including you)
                  </span>
                  <select
                    value={form.guests}
                    onChange={(e) => update("guests", e.target.value)}
                    className={inputClass}
                  >
                    {["1", "2", "3", "4", "5", "6+"].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === "1" ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    Anything we should know? (dietary needs, arrivals, greetings)
                  </span>
                  <textarea
                    rows={3}
                    value={form.note}
                    onChange={(e) => update("note", e.target.value)}
                    placeholder="Ayesha is vegetarian, we'll bring the petunias…"
                    className={`${inputClass} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-4 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                  Send our response
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
