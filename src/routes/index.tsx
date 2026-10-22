import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/invitation/Hero";
import { Welcome } from "@/components/invitation/Welcome";
import { Countdown } from "@/components/invitation/Countdown";
import { Schedule } from "@/components/invitation/Schedule";
import { HomeTour } from "@/components/invitation/HomeTour";
import { Venue } from "@/components/invitation/Venue";
import { RsvpSection } from "@/components/invitation/RsvpSection";
import { Wishes } from "@/components/invitation/Wishes";
import { Closing } from "@/components/invitation/Closing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Housewarming · The Ahmed Family · 6 December 2026" },
      {
        name: "description",
        content:
          "You're invited! The Ahmed Family is moving into Rose Villa. Join us on Sunday, 6 December 2026 for the house blessing, lunch and a full home tour.",
      },
      { property: "og:title", content: "Housewarming · The Ahmed Family" },
      {
        property: "og:description",
        content:
          "A new door opens. Join us on Sunday, 6 December 2026 at Rose Villa, Indiranagar, Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InvitationPage,
});

function InvitationPage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Welcome />
      <Countdown />
      <Schedule />
      <HomeTour />
      <Venue />
      <RsvpSection />
      <Wishes />
      <Closing />
    </main>
  );
}
