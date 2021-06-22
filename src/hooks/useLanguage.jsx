import React, { createContext, useContext, useEffect, useState } from "react";
import Arabic from "../Languages/Arabic";
import English from "../Languages/English";

const LanguageContext = createContext();

const eng = "english";
const ar = "arabic";

const languages = new Map([
  [
    eng,
    {
      id_: eng,
      name: "English",
      shorthand: "EN",
      data: English,
      direction: "ltr",
    },
  ],
  [
    ar,
    {
      id_: ar,
      name: "العربية",
      shorthand: "AR",
      data: Arabic,
      direction: "rtl",
    },
  ],
]);

export const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = ({ children }) => {
  const [active, setActive] = useState(eng);
  useEffect(() => {
    const active = localStorage.getItem("language");
    setActive(active || eng);
  }, []);
  useEffect(() => {
    localStorage.setItem("language", active);
    document.querySelector("html").lang = languages
      .get(active)
      .shorthand.toLowerCase();
  }, [active]);
  const language = languages.get(active);
  const english = languages.get(eng);
  const arabic = languages.get(ar);
  const setArabic = () => setActive(ar);
  const setEnglish = () => setActive(eng);
  return (
    <LanguageContext.Provider
      value={{ language, english, arabic, active, setArabic, setEnglish }}
    >
      <div className={language.direction}>{children}</div>
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
