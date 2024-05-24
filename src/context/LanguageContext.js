import React, { createContext } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { useState } from "react";
import { useEffect } from "react";
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("tr");

  useEffect(() => {
    const selectedLanguage = sessionStorage.getItem("selectedLanguage");
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
      setLanguage(selectedLanguage);
    }
  }, []);

  const handleClick = async (lang) => {
    await i18n.changeLanguage(lang);
    setLanguage(lang);
    sessionStorage.setItem("selectedLanguage", lang);
  };
  return (
    <LanguageContext.Provider value={{ t, i18n, handleClick, language }}>
      {children}
    </LanguageContext.Provider>
  );
};
