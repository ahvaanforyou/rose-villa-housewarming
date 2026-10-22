import { invitation } from "@/lib/invitation";
import { useLanguage } from "@/lib/LanguageContext";
import { Ornament } from "./Reveal";
import { SacredDiya } from "../traditional/SacredDiya";
import { Share2, Heart, Sparkles } from "lucide-react";

export function Closing() {
  const { t, language } = useLanguage();

  const handleShare = () => {
    const text =
      language === "te"
        ? `శ్రీ ఆనంద నిలయం · గృహప్రవేశ ఆహ్వాన పత్రిక. మా నూతన గృహ ప్రవేశ శుభ సందర్భంగా మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నాము: ${window.location.href}`
        : `Sri Ananda Nilayam · Traditional Gruhapravesam Invitation. You're cordially invited: ${window.location.href}`;

    if (navigator.share) {
      navigator.share({
        title: t(invitation.houseName),
        text,
        url: window.location.href,
      });
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#240509] via-[#35080E] to-[#1A0306] py-20 sm:py-28 text-amber-100 text-center">
      {/* Golden Ambient Rings */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 flex flex-col items-center">
        {/* Sacred Diya Lamp */}
        <SacredDiya size="lg" className="mb-6" />

        {/* Auspicious Shloka */}
        <p className="font-serif text-lg sm:text-2xl font-bold text-amber-300 tracking-wider">
          || సర్వే జనాః సుఖినో భవంతు ||
        </p>
        <p className="font-serif text-sm sm:text-base text-amber-200/80 mt-1">
          || లోకాః సమస్తాః సుఖినో భవంతు ||
        </p>

        <Ornament className="my-6" />

        {/* Closing Thank You Message */}
        <h3 className="font-serif text-2xl sm:text-4xl font-bold text-amber-100">
          {language === "te" ? "మీ రాకయే మాకు ఆనందం మరియు ఆశీర్వాదం" : "Your Gracious Presence is Our Greatest Blessing"}
        </h3>

        <p className="font-serif mt-4 text-base sm:text-lg text-amber-200/90 max-w-xl italic leading-relaxed">
          {language === "te"
            ? "మా నూతన గృహప్రవేశ వేడుకకు విచ్చేసి, మంగళప్రదమైన పూజా కార్యక్రమాలలో పాల్గొని, మమ్మల్ని ఆశీర్వదించండి."
            : "Please grace our new home, partake in the sacred rituals and celebratory lunch feast, and shower your blessings."}
        </p>

        {/* Host Names */}
        <div className="mt-8 rounded-2xl border-2 border-amber-400/60 bg-[#4A0E15]/80 px-8 py-4 shadow-2xl backdrop-blur-sm">
          <p className="font-serif text-xl sm:text-2xl font-bold text-amber-200">
            {t(invitation.family)}
          </p>
          <p className="text-xs text-amber-300/80 tracking-widest uppercase mt-1">
            {t(invitation.houseName)} · Hyderabad
          </p>
        </div>

        {/* Share Button */}
        <div className="mt-8">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-amber-400 bg-gradient-to-r from-amber-600 to-amber-700 px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-950 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Share2 className="h-4 w-4" />
            <span>{language === "te" ? "ఆహ్వాన పత్రికను షేర్ చేయండి" : "Share Invitation"}</span>
          </button>
        </div>

        {/* Ahvaan For You Branding */}
        <div className="mt-14 pt-8 border-t border-amber-400/20 w-full flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/60 font-semibold">
            Crafted with Devotion by
          </p>
          <a
            href="https://www.ahvaanforyou.com"
            target="_blank"
            rel="noreferrer"
            className="mt-1 text-sm font-serif font-bold text-amber-300 hover:text-amber-200 transition-colors"
          >
            Ahvaan for You • Luxury Digital Invitations
          </a>
        </div>
      </div>
    </footer>
  );
}
