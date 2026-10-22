import heroHome from "@/assets/hero-home.jpg";
import roomLiving from "@/assets/room-living.jpg";
import roomDining from "@/assets/room-dining.jpg";
import roomTerrace from "@/assets/room-terrace.jpg";

export type Language = "te" | "en";

export interface LocalizedString {
  te: string;
  en: string;
}

export const invitation = {
  sacredHeading: {
    te: "|| శ్రీ గణేశాయ నమః || శ్రీ లక్ష్మీ నరసింహ స్వామి అనుగ్రహం తో ||",
    en: "|| Om Sri Ganeshaya Namaha || With the Divine Blessings of Almighty ||",
  },
  ceremonySubheading: {
    te: "|| గృహప్రవేశ మహోత్సవ ఆహ్వాన పత్రిక ||",
    en: "|| Sacred Gruhapravesam Mahotsavam Invitation ||",
  },

  family: {
    te: "శ్రీ సత్యనారాయణ శర్మ & శ్రీమతి లక్ష్మీ వాణి కుటుంబం",
    en: "Smt. Lakshmi Vani & Sri Satyanarayana Sharma",
  },
  houseName: {
    te: "శ్రీ ఆనంద నిలయం",
    en: "Sri Ananda Nilayam",
  },
  hosts: {
    te: ["శ్రీ సత్యనారాయణ శర్మ", "శ్రీమతి లక్ష్మీ వాణి"],
    en: ["Satyanarayana Sharma", "Lakshmi Vani"],
  },
  kids: {
    te: ["చిరంజీవి ఆదిత్య", "చిరంజీవి వర్షిణి"],
    en: ["Aditya", "Varshini"],
  },

  tagline: {
    te: "శుభం భవతు · పాలు పొంగినట్లుగా మా నూతన గృహంలో ఆనందం, సిరిసంపదలు వెల్లివిరియాలని కోరుకుంటూ...",
    en: "A sacred threshold crossed. A lifetime of peace, prosperity, and divine blessings begins.",
  },

  welcomeIntro: {
    te: "మా నూతన గృహప్రవేశ మహోత్సవ శుభ సందర్భంలో, మీరు మరియు మీ కుటుంబ సభ్యులు సకుటుంబ సపరివార సమేతంగా విచ్చేసి, మంగళప్రదమైన పూజా కార్యక్రమాలలో పాల్గొని, మాకు మీ అమూల్యమైన శుభాశీస్సులు అందజేయవలసిందిగా సాదరంగా ఆహ్వానిస్తున్నాము.",
    en: "With heartfelt gratitude and joy, we cordially invite you and your family to grace the auspicious Gruhapravesam (Housewarming Ceremony) of our newly built residence. Please join us for the sacred rituals, milk boiling ceremony, and festive lunch feast.",
  },

  welcomeParas: {
    te: [
      "ఎన్నో రోజుల కలలు, భగవంతుని కృప, పెద్దల ఆశీస్సులతో మా స్వగృహ నిర్మాణం పరిపూర్ణమైనది. ద్వారాలకు మామిడి ఆకుల తోరణాలు, ప్రవేశ ద్వారాన దీప కాంతులు వెలిగాయి.",
      "గృహం అనేది ఇటుకలతో మాత్రమే కాదు, మన ఆత్మీయుల పాద ముద్రలతో, ప్రేమానురాగాలతో నిండినప్పుడే అది సార్థకమవుతుంది. అందుకే ఈ శుభదినాన మిమ్మల్ని మనసారా ఆహ్వానిస్తున్నాము.",
      "మీ రాకయే మాకు ఆనందం మరియు ఆశీర్వాదం. సకుటుంబ సమేతంగా విచ్చేసి మా నూతన గృహాన్ని ఆశీర్వదించండి.",
    ],
    en: [
      "With the grace of God and the loving blessings of our elders, our dream of creating a sanctuary of warmth and peace has come to life. The sacred mango-leaf toranam is tied, the brass lamps are glowing, and our doors are wide open.",
      "A house is built with bricks and mortar, but a home is consecrated by the footsteps, laughter, and blessings of the people we cherish most.",
      "Please come with your family to witness the sacred rituals, partake in the traditional feast, and shower your heartfelt blessings on this new beginning.",
    ],
  },

  addressLine: {
    te: "ప్లాట్ నెం. 108, శ్రీ ఆనంద నిలయం · వైకుంఠ హిల్స్",
    en: "Plot No. 108, Sri Ananda Nilayam · Vaikunta Hills",
  },
  city: {
    te: "మణికొండ, హైదరాబాద్ - 500089 (లక్ష్మీ నరసింహ దేవాలయం సమీపంలో)",
    en: "Manikonda, Hyderabad - 500089 (Near Sri Lakshmi Narasimha Temple)",
  },

  event: {
    title: {
      te: "గృహప్రవేశ శుభ ముహూర్తం",
      en: "Gruhapravesam Auspicious Muhurtham",
    },
    weekday: {
      te: "ఆదివారం",
      en: "Sunday",
    },
    dateLong: {
      te: "15 నవంబర్ 2026",
      en: "15 November 2026",
    },
    muhurthamTime: {
      te: "ఉదయం 08:45 నిమిషాలకు",
      en: "08:45 AM (Auspicious Muhurtham)",
    },
    muhurthamVedic: {
      te: "కార్తిక శుద్ధ పూర్ణిమ, కృత్తికా నక్షత్ర యుక్త వృశ్చిక లగ్న పుష్కరాంశమున",
      en: "Karthika Shuddha Pournami, Krittika Nakshatra Yukta Vrischika Lagna Pushkaramsa",
    },
    startsAt: "2026-11-15T08:45:00+05:30",
    calendar:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Gruhapravesam+%C2%B7+Sri+Ananda+Nilayam&dates=20261115T031500Z/20261115T093000Z&details=Auspicious+Gruhapravesam+Housewarming+Ceremony+and+Feast+at+Sri+Ananda+Nilayam&location=Plot+108,+Sri+Ananda+Nilayam,+Manikonda,+Hyderabad",
  },

  schedule: [
    {
      time: "06:30 AM",
      title: {
        te: "గో పూజ & శ్రీ గణపతి హోమం",
        en: "Go Pooja & Sri Ganapathi Homam",
      },
      note: {
        te: "గోమాత ప్రవేశం మరియు సకల విఘ్నాలు తొలగి సర్వ శుభాలు కలగడానికి ప్రథమ గణపతి ఆరాధన.",
        en: "Welcoming the sacred cow (Kamadhenu) followed by invocations to Lord Ganesha for auspicious beginnings and obstacle removal.",
      },
      icon: "flame",
      badge: {
        te: "ప్రాతఃకాల పూజ",
        en: "Dawn Ritual",
      },
    },
    {
      time: "07:45 AM",
      title: {
        te: "వాస్తు శాంతి & నవగ్రహ హోమం",
        en: "Vastu Shanthi & Navagraha Homam",
      },
      note: {
        te: "అష్టదిక్పాలకుల అనుగ్రహం మరియు నవగ్రహ శాంతి కోసం పవిత్ర హోమ కార్యక్రమాలు.",
        en: "Sacred fire oblations purifying the eight cardinal directions and seeking cosmic harmony for the new abode.",
      },
      icon: "sun",
      badge: {
        te: "వాస్తు పూజ",
        en: "Vastu Puja",
      },
    },
    {
      time: "08:15 AM",
      title: {
        te: "పాలు పొంగించడం (మంగళ శుభకార్యం)",
        en: "Paalu Ponginchadam (Milk Boiling Ceremony)",
      },
      note: {
        te: "నూతన ఇత్తడి పాత్రలో పాలు నలుదిక్కులా పొంగించి, ఇంట అష్టైశ్వర్యాలు వర్ధిల్లాలని కోరే సాంప్రదాయ వేడుక.",
        en: "Boiling fresh milk in a new brass pot until it overflows in all four directions, symbolizing everlasting abundance, prosperity, and joy.",
      },
      icon: "sparkles",
      badge: {
        te: "మంగళ శుభప్రదం",
        en: "Auspicious Rite",
      },
    },
    {
      time: "08:45 AM",
      title: {
        te: "గృహప్రవేశ మహా ముహూర్తం",
        en: "Gruhapravesam Maha Muhurtham",
      },
      note: {
        te: "మంగళ వాయిద్యాల నడుమ, కుడికాలు ముందుకు పెట్టి కలశం & దీపంతో గడప దాటే పవిత్ర ప్రవేశం.",
        en: "The sacred threshold crossing with right foot forward, carrying the sacred Kalasham and Mangala Deepam accompanied by Nadaswaram Mangala Vadyam.",
      },
      icon: "door",
      badge: {
        te: "ప్రధాన ముహూర్తం",
        en: "Main Muhurtham",
      },
    },
    {
      time: "10:00 AM",
      title: {
        te: "శ్రీ సత్యనారాయణ స్వామి వ్రతం",
        en: "Sri Satyanarayana Swamy Vratham",
      },
      note: {
        te: "సర్వ సంపదలు, కుటుంబ సౌభాగ్యం కోసం భక్తిశ్రద్ధలతో సత్యనారాయణ స్వామి పూజ మరియు కథా శ్రవణం.",
        en: "Devotional thanksgiving pooja and sacred katha recitation praying for perpetual family happiness, peace, and longevity.",
      },
      icon: "book",
      badge: {
        te: "మహా వ్రతం",
        en: "Grand Vratham",
      },
    },
    {
      time: "12:30 PM",
      title: {
        te: "మహా అన్నప్రసాదం / సాంప్రదాయ భోజనం",
        en: "Traditional Grand Feast & Annadanam",
      },
      note: {
        te: "అరిటాకుపై పాయసం, వడలు, పులిహోర మరియు సాంప్రదాయ రుచులతో కూడిన మంగళకర విందు భోజనం.",
        en: "Sumptuous multi-course celebratory meal served on fresh banana leaves featuring festive payasam, vadalu, and authentic South Indian delicacies.",
      },
      icon: "utensils",
      badge: {
        te: "మహా విందు",
        en: "Festive Feast",
      },
    },
    {
      time: "03:30 PM",
      title: {
        te: "నవ గృహ సందర్శనం & తాంబూలాలు",
        en: "Open House & Thamboolam",
      },
      note: {
        te: "మిత్రులు, బంధువులతో కలసి గృహాన్ని వీక్షించడం మరియు శుభ తాంబూలాల సమర్పణ.",
        en: "Guided home walkthrough, casual conversations over tea, and offering auspicious thamboolam and blessings to our guests.",
      },
      icon: "heart",
      badge: {
        te: "తాంబూలం",
        en: "Blessings & Tea",
      },
    },
  ],

  rooms: [
    {
      image: heroHome,
      name: {
        te: "సింహద్వారం & ముంగిలి",
        en: "Simhadwaram & Sacred Entrance",
      },
      caption: {
        te: "చేతితో చెక్కబడిన టేకు తలుపులు, ఇత్తడి గంటలు, మామిడి ఆకుల తోరణం మరియు పవిత్ర ముగ్గులతో స్వాగతం పలికే ప్రధాన ద్వారం.",
        en: "Hand-carved teak double doors adorned with auspicious mango-leaf toranam, brass bells, and turmeric-kumkum rangoli.",
      },
    },
    {
      image: roomLiving,
      name: {
        te: "విశాల గృహ మజ్జిగ & సమావేశ మందిరం",
        en: "The Grand Living Foyer",
      },
      caption: {
        te: "ఆత్మీయుల చిరునవ్వులు, పండుగ సంభాషణలు, మరియు తరగని జ్ఞాపకాలకు నెలవైన విశాల గది.",
        en: "Where evenings unfold over warm chai, festive family stories, and laughter that fills every corner.",
      },
    },
    {
      image: roomDining,
      name: {
        te: "శ్రీ పూజా మందిరం & సాంప్రదాయ భోజన శాల",
        en: "The Sacred Pooja Shrine & Dining Hall",
      },
      caption: {
        te: "అఖండ దీప కాంతులతో వెలిగే పూజా మందిరం మరియు సకుటుంబంగా కలసి భోజనం చేసే పవిత్ర స్థలం.",
        en: "Sanctuary of peace glowing with brass diya lamps, and a banquet table built for every festival and family celebration.",
      },
    },
    {
      image: roomTerrace,
      name: {
        te: "తులసి కోట & డాబా ఉద్యానవనం",
        en: "Tulasi Kota & Terrace Sky Garden",
      },
      caption: {
        te: "పవిత్ర తులసి కోట, నిమ్మ చెట్లు, మరియు ఆహ్లాదకరమైన సాయంత్రపు సూర్యాస్తమయ వీక్షణం.",
        en: "Sacred Tulasi Kota, fresh botanical greenery, fragrant jasmine, and the serene evening horizon.",
      },
    },
  ],

  seedWishes: [
    {
      name: "శ్రీ సుబ్రహ్మణ్య శర్మ & కుటుంబం (Subrahmanya Sharma & Family)",
      message:
        "నవ గృహప్రవేశం చేసిన శర్మ గారి దంపతులకు హృదయపూర్వక శుభాకాంక్షలు! శ్రీ లక్ష్మీ నరసింహ స్వామి వారి దివ్య కృపాకటాక్షాలతో మీ ఇంట సదా శాంతి, ఆయురారోగ్యాలు, అష్టైశ్వర్యాలు వెల్లివిరియాలని కోరుకుంటున్నాము.",
      date: "శుభదినం",
    },
    {
      name: "Karthik & Sravya Rao",
      message:
        "Heartiest congratulations on your Gruhapravesam! May Sri Ananda Nilayam always be filled with divine light, endless laughter, and abundant prosperity. Can't wait to celebrate with you!",
      date: "12 Nov",
    },
    {
      name: "మాతా పితరులు (Elders' Blessings)",
      message:
        "మా పిల్లల స్వగృహ ప్రవేశాన్ని చూడడం ఎంతో ఆనందంగా ఉంది. పాలు పొంగినట్లు మీ ఇంట సిరిసంపదలు నిత్యం పొంగిపొర్లాలి. సర్వే జనాః సుఖినో భవంతు. దీర్ఘాయుష్మాన్ భవ!",
      date: "14 Nov",
    },
    {
      name: "The Hyderabad Cousins Club",
      message:
        "New home, huge terrace, and authentic banana-leaf feast! We are so thrilled for you. Save us the grand tour of the terrace garden!",
      date: "14 Nov",
    },
  ],
} as const;

export const eventDate = new Date(invitation.event.startsAt);
