import React, { createContext, useContext, useState, useEffect } from "react";
import type { Language } from "./invitation";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: <T extends { te: string; en: string }>(item: T) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("te");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ahvaan_lang") as Language;
      if (saved === "te" || saved === "en") {
        setLanguageState(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("ahvaan_lang", lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "te" ? "en" : "te");
  };

  const t = <T extends { te: string; en: string }>(item: T): string => {
    if (!item) return "";
    return item[language] || item.en || "";
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      <div data-lang={language} className={language === "te" ? "font-telugu" : "font-english"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: "te" as Language,
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: <T extends { te: string; en: string }>(item: T) => item?.te || item?.en || "",
    };
  }
  return context;
}
