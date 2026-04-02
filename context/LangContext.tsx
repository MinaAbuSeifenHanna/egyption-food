"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang, translations } from "@/data/translations";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof translations["en"]) => string;
  isRTL: boolean;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => key as string,
  isRTL: false,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "ar") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const t = (key: keyof typeof translations["en"]): string =>
    translations[lang][key] || translations["en"][key] || key;

  return (
    <LangContext.Provider value={{ lang, setLang, t, isRTL: lang === "ar" }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
