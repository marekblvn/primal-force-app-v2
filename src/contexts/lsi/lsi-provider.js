import { useState, useEffect } from "react";
import LsiContext from "./lsi-context";

const LsiProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("user_pref_language")
  );
  useEffect(() => {
    if (!language) {
      setLanguage("en");
      localStorage.setItem("user_pref_language", "en");
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
