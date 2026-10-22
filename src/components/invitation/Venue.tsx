import { motion } from "motion/react";
import { Car, MapPin, Navigation, TramFront } from "lucide-react";
import { invitation } from "@/lib/invitation";
import { SectionHeading } from "./Reveal";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Indiranagar%2C+Bengaluru%2C+Karnataka+560038";
const EMBED_URL =
  "https://www.google.com/maps?q=Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560038&output=embed";

export function Venue() {
  return (
    <section id="venue" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Finding us"
          title="Venue & directions"
          intro="Rose Villa is the one with marigolds on the gate — you can't miss it."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between gap-8 rounded-2xl border border-border bg-card p-8 shadow-[0_24px_50px_-32px_rgb(0_0_0/0.4)] lg:col-span-2"
          >
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold-deep">
                The address
              </p>
              <h3 className="font-display mt-3 text-3xl font-medium">Rose Villa</h3>
              <p className="mt-3 text-[15px] leading-relaxed font-light text-muted-foreground">
                {invitation.addressLine}
                <br />
                {invitation.city}
              </p>
            </div>

            <ul className="space-y-4 text-sm font-light text-muted-foreground">
              <li className="flex items-start gap-3">
                <TramFront className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                <span>
                  <strong className="font-medium text-foreground">By metro:</strong> Indiranagar
                  station, 8 minutes on foot.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Car className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                <span>
                  <strong className="font-medium text-foreground">By car:</strong> street parking
                  on Palm Grove Lane, plus the school lot next door.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                <span>
                  <strong className="font-medium text-foreground">Landmark:</strong> opposite the
                  old banyan tree, two doors from Corner House.
                </span>
              </li>
            </ul>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Navigation className="h-4 w-4" />
              Get directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-2xl border border-border shadow-[0_24px_50px_-32px_rgb(0_0_0/0.4)] lg:col-span-3"
          >
            <iframe
              title="Map showing the venue area"
              src={EMBED_URL}
              loading="lazy"
              className="h-full min-h-[360px] w-full grayscale-[35%] sepia-[12%]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
