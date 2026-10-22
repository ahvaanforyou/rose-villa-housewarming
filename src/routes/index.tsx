import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Hero } from "@/components/invitation/Hero";
import { Welcome } from "@/components/invitation/Welcome";
import { Countdown } from "@/components/invitation/Countdown";
import { Schedule } from "@/components/invitation/Schedule";
import { HomeTour } from "@/components/invitation/HomeTour";
import { Venue } from "@/components/invitation/Venue";
import { RsvpSection } from "@/components/invitation/RsvpSection";
import { Wishes } from "@/components/invitation/Wishes";
import { Closing } from "@/components/invitation/Closing";
import { LanguageToggle } from "@/components/traditional/LanguageToggle";
import { SacredAudioControl } from "@/components/traditional/SacredAudioControl";
import { FlowerPetalsShower } from "@/components/traditional/FlowerPetalsShower";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "శ్రీ ఇల్లు • గృహప్రవేశ ఆహ్వాన పత్రిక | Sri Illu Traditional Gruhapravesam Invitation",
      },
      {
        name: "description",
        content:
          "మా నూతన గృహప్రవేశ మహోత్సవ ఆహ్వానం. Sri Ananda Nilayam Gruhapravesam Ceremony & Auspicious Muhurtham by Smt. Lakshmi Vani & Sri Satyanarayana Sharma.",
      },
      {
        property: "og:title",
        content: "శ్రీ ఇల్లు • గృహప్రవేశ ఆహ్వానం | Sri Illu Gruhapravesam",
      },
      {
        property: "og:description",
        content:
          "సింహద్వార ప్రవేశం, పాలు పొంగించడం, సత్యనారాయణ వ్రతం మరియు సాంప్రదాయ విందు. Join our sacred Gruhapravesam celebration.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InvitationPage,
});

function InvitationPage() {
  return (
    <LanguageProvider>
      <main className="relative min-h-screen bg-background text-foreground selection:bg-amber-400 selection:text-amber-950">
        {/* Floating Controls: Language Switcher, Sacred Audio, and Flower Petals */}
        <LanguageToggle />
        <SacredAudioControl />
        <FlowerPetalsShower />

        {/* Invitation Sections */}
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
    </LanguageProvider>
  );
}
