import { useState } from "react";
import { invitation } from "@/lib/invitation";
import { useLanguage } from "@/lib/LanguageContext";
import { Ornament } from "./Reveal";
import { Send, CheckCircle2, Users, Utensils, Phone, User } from "lucide-react";

export function RsvpSection() {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    attending: "yes",
    guestCount: "2",
    diet: "traditional-banana-leaf",
    blessing: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;

    // Build WhatsApp RSVP message
    const msg = `Namaskaram! Gruhapravesam RSVP for ${formData.name}: Attending: ${
      formData.attending === "yes" ? "Yes" : "No"
    }, Guests: ${formData.guestCount}, Feast: ${formData.diet}. Blessing: "${
      formData.blessing || "Congratulations!"
    }"`;

    const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");

    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="relative overflow-hidden py-20 sm:py-28 bg-[#FAF6EE]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/40 bg-amber-50 px-5 py-1 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#7A121D]">
              {language === "te" ? "హాజరు నిర్ధారణ" : "Attendance Confirmation"}
            </span>
          </div>

          <h2 className="font-serif mt-4 text-3xl sm:text-5xl font-bold text-[#4A0E15] tracking-tight">
            {language === "te" ? "మీ రాకను తెలపండి (RSVP)" : "Will You Grace Our Celebration?"}
          </h2>

          <p className="mt-3 max-w-xl text-sm sm:text-base text-[#6B5B52] font-serif">
            {language === "te"
              ? "భోజన మరియు పూజా ఏర్పాట్లకు సహకరించేందుకు మీ రాకను దయచేసి ముందుగా నిర్ధారించండి"
              : "Kindly confirm your presence by 10 November to help us arrange the festive feast"}
          </p>

          <Ornament className="mt-4" />
        </div>

        {/* Heavy Ornate RSVP Card */}
        <div className="traditional-card p-6 sm:p-12 border-2 border-amber-500/50 bg-[#FFFDF9] shadow-[0_20px_60px_-15px_rgba(90,14,23,0.15)]">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-700 shadow-md mb-4 border-2 border-green-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A0E15]">
                {language === "te" ? "ధన్యవాదాలు! మీ హాజరు నమోదైంది" : "Dhanyavaadalu! RSVP Received"}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-[#594B42] max-w-md">
                {language === "te"
                  ? "మీ రాక మాకు ఎంతో సంతోషాన్నిస్తుంది. నవంబర్ 15 న శ్రీ ఆనంద నిలయంలో కలుసుకుందాం!"
                  : "We look forward to welcoming you and your family on 15 November at Sri Ananda Nilayam!"}
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full border border-amber-500 px-6 py-2 text-xs font-semibold text-[#7A121D] hover:bg-amber-50"
              >
                {language === "te" ? "మరొకరి వివరాలు నమోదు చేయండి" : "Submit Another RSVP"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#7A121D] mb-1.5 flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    <span>{language === "te" ? "మీ పేరు (Full Name) *" : "Full Name *"}</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={language === "te" ? "ఉదాహరణ: కె. శ్రీనివాస రావు" : "e.g. K. Srinivasa Rao"}
                    className="w-full rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm text-[#3D2C24] shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#7A121D] mb-1.5 flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5" />
                    <span>{language === "te" ? "వాట్సాప్ / ఫోన్ నెం (Phone)" : "Phone / WhatsApp"}</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm text-[#3D2C24] shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  />
                </div>
              </div>

              {/* Attending & Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#7A121D] mb-1.5 flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    <span>{language === "te" ? "మీరు హాజరవుతున్నారా? (Attending)" : "Will you attend?"}</span>
                  </label>
                  <select
                    value={formData.attending}
                    onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                    className="w-full rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm text-[#3D2C24] shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  >
                    <option value="yes">
                      {language === "te" ? "ఖచ్చితంగా వస్తున్నాము (Yes, with joy)" : "Yes, with family"}
                    </option>
                    <option value="maybe">
                      {language === "te" ? "రావడానికి ప్రయత్నిస్తాము (Tentative)" : "Tentative"}
                    </option>
                    <option value="no">
                      {language === "te" ? "రాలేకపోతున్నాము (Regretfully cannot attend)" : "Regretfully cannot attend"}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#7A121D] mb-1.5 flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    <span>{language === "te" ? "హాజరయ్యే వ్యక్తుల సంఖ్య (Guests)" : "Number of Guests"}</span>
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm text-[#3D2C24] shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5+">5+ (Full Family)</option>
                  </select>
                </div>
              </div>

              {/* Festive Meal Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A121D] mb-1.5 flex items-center gap-1.5">
                  <Utensils className="h-3.5 w-3.5" />
                  <span>
                    {language === "te"
                      ? "భోజన ఆహార ప్రాధాన్యత (Festive Feast Preference)"
                      : "Festive Banana-Leaf Meal Preference"}
                  </span>
                </label>
                <select
                  value={formData.diet}
                  onChange={(e) => setFormData({ ...formData, diet: e.target.value })}
                  className="w-full rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm text-[#3D2C24] shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                >
                  <option value="traditional-banana-leaf">
                    {language === "te"
                      ? "సాంప్రదాయ అరిటాకు విందు (Traditional South Indian Festive Meal)"
                      : "Traditional South Indian Festive Feast (Banana Leaf)"}
                  </option>
                  <option value="jain-pure-veg">
                    {language === "te" ? "జైన శాకాహారం (Jain Pure Veg / No Onion Garlic)" : "Jain Pure Vegetarian"}
                  </option>
                </select>
              </div>

              {/* Blessing Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#7A121D] mb-1.5">
                  {language === "te" ? "మీ శుభాశీస్సులు / సందేశం (Blessings)" : "Your Warm Wishes & Blessings"}
                </label>
                <textarea
                  rows={3}
                  value={formData.blessing}
                  onChange={(e) => setFormData({ ...formData, blessing: e.target.value })}
                  placeholder={
                    language === "te"
                      ? "నూతన గృహ ప్రవేశ శుభ సందర్భంగా మీ హృదయపూర్వక ఆశీర్వాదాలను వ్రాయండి..."
                      : "Write your heartfelt blessings for Sri Ananda Nilayam..."
                  }
                  className="w-full rounded-xl border border-amber-300 bg-white px-4 py-2 text-sm text-[#3D2C24] shadow-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 rounded-full border-2 border-amber-400 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-amber-950 shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] active:scale-95"
              >
                <Send className="h-4 w-4" />
                <span>{language === "te" ? "హాజరు నిర్ధారించండి (Confirm RSVP)" : "Confirm Attendance via WhatsApp"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
