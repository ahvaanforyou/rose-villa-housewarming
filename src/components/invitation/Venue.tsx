import { useState } from "react";
import { invitation } from "@/lib/invitation";
import { useLanguage } from "@/lib/LanguageContext";
import { Ornament } from "./Reveal";
import { MapPin, Navigation, Copy, Check, Compass, Car } from "lucide-react";

export function Venue() {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const fullAddress = `${t(invitation.addressLine)}, ${t(invitation.city)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const mapsUrl = "https://maps.google.com/?q=17.3984,78.3752";

  return (
    <section id="venue" className="relative overflow-hidden py-20 sm:py-28 bg-[#FAF6EE]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/40 bg-amber-50 px-5 py-1 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#7A121D]">
              {language === "te" ? "వేదిక & మార్గదర్శనం" : "Venue Location & Directions"}
            </span>
          </div>

          <h2 className="font-serif mt-4 text-3xl sm:text-5xl font-bold text-[#4A0E15] tracking-tight">
            {language === "te"
              ? "నూతన గృహ ప్రదేశం వివరాలు"
              : "How to Reach Sri Ananda Nilayam"}
          </h2>

          <Ornament className="mt-4" />
        </div>

        {/* Heavy Ornate Venue Card */}
        <div className="traditional-card p-6 sm:p-10 border-2 border-amber-500/50 bg-[#FFFDF9] shadow-[0_20px_50px_rgba(90,14,23,0.12)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Address Details */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-red-700" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#7A121D]">
                  {language === "te" ? "నూతన నివాసం" : "Residence Address"}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A0E15]">
                {t(invitation.houseName)}
              </h3>

              <p className="font-serif text-base sm:text-lg font-medium text-[#7A121D] mt-1">
                {t(invitation.family)}
              </p>

              <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50/70 p-4 text-sm leading-relaxed text-[#3D2C24]">
                <p className="font-semibold text-[#4A0E15]">
                  {t(invitation.addressLine)}
                </p>
                <p className="mt-1 text-xs text-[#5C4538]">
                  {t(invitation.city)}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-amber-400 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-950 shadow-md transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  <Navigation className="h-4 w-4" />
                  <span>{language === "te" ? "గూగుల్ మ్యాప్స్‌లో తెరవండి" : "Open in Google Maps"}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-400/80 bg-white px-5 py-2.5 text-xs font-semibold text-amber-900 shadow-sm transition-colors hover:bg-amber-50"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-green-700">
                        {language === "te" ? "చిరునామా కాపీ చేయబడింది!" : "Address Copied!"}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-amber-700" />
                      <span>{language === "te" ? "చిరునామా కాపీ చేయండి" : "Copy Address"}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Travel Assistance Box */}
            <div className="rounded-2xl border-2 border-dashed border-amber-400/80 bg-gradient-to-br from-amber-50 to-[#FFF9EE] p-6 shadow-inner">
              <div className="flex items-center gap-2 text-[#7A121D] font-bold text-sm uppercase tracking-wider mb-4">
                <Compass className="h-4 w-4" />
                <span>{language === "te" ? "ప్రయాణ సూచనలు & పార్కింగ్" : "Travel & Parking Guide"}</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#4E3D34]">
                <div className="flex items-start gap-2.5">
                  <Car className="h-4 w-4 text-amber-700 mt-0.5 shrink-0" />
                  <p>
                    {language === "te"
                      ? "విశాలమైన వాలెట్ మరియు సొంత కార్ పార్కింగ్ సదుపాయం కలదు."
                      : "Valet and dedicated parking is available at the residence entrance."}
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Navigation className="h-4 w-4 text-amber-700 mt-0.5 shrink-0" />
                  <p>
                    {language === "te"
                      ? "మణికొండ మెయిన్ రోడ్ నుండి లక్ష్మీ నరసింహ స్వామి దేవాలయం వైపు వెళ్ళే మార్గంలో ప్లాట్ 108 ను సులభంగా గుర్తించవచ్చు."
                      : "Easily accessible from Manikonda Main Road heading towards Sri Lakshmi Narasimha Temple."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
