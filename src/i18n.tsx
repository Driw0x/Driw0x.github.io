import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { zhCN } from "./data/zh-CN";

type Locale = "fr" | "zh-CN";

const LanguageContext = createContext<{
  language: Locale;
  setLanguage: (language: Locale) => void;
  t: (text: string) => string;
  cvHref: string;
} | null>(null);

const description = "Portfolio de Victor Ye, étudiant en Master 2 AI2D : recherche opérationnelle, IA agentique et systèmes multi-agents, avec des projets en machine learning appliqué.";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Locale>(() => {
    try {
      return localStorage.getItem("portfolio-language") === "zh-CN" ? "zh-CN" : "fr";
    } catch {
      return "fr";
    }
  });

  const t = (text: string) => language === "zh-CN" ? zhCN[text] ?? text : text;
  const cvHref = `${import.meta.env.BASE_URL}cv/${language === "zh-CN" ? "Victor_Ye_CV_zh-CN.pdf" : "Victor_Ye_CV.pdf"}`;

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "zh-CN" ? zhCN["Victor Ye | Portfolio"] : "Victor Ye | Portfolio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content", language === "zh-CN" ? zhCN[description] : description,
    );
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      // Language switching also works when browser storage is unavailable.
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, cvHref }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
