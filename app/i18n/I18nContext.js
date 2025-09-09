"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en/common.json";
import hi from "@/locales/hi/common.json";
import mr from "@/locales/mr/common.json";

const dictionaries = { en, hi, mr };
const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && dictionaries[saved]) setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key, vars = {}) => {
    let text = key.split(".").reduce((acc, cur) => acc?.[cur], dictionaries[lang]) || key;
    Object.entries(vars).forEach(([k, v]) => {
      text = text.replace(`{${k}}`, v);
    });
    return text;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
