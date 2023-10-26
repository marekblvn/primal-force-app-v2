import { useState, useEffect } from "react";
import LsiContext from "./lsi-context";

const LsiProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("user_pref_language")
  );
  useEffect(() => {
    if (!language) {
      const lang = navigator.language.split("-")[0];
      setLanguage(["en", "cs"].includes(lang) ? lang : "en");
      localStorage.setItem(
        "user_pref_language",
        ["en", "cs"].includes(lang) ? lang : "en"
      );
    }
  }, [language]);

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("user_pref_language", lang);
  };
  return (
    <LsiContext.Provider value={{ language, handleChangeLanguage }}>
      {children}
    </LsiContext.Provider>
  );
};

export default { LsiProvider, LsiContext };
