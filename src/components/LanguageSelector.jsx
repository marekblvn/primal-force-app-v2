import { IconButton, Tooltip, Box } from "@mui/material";
import UK_Flag from "../static/img/icons/united-kingdom-flag-icon.svg";
import CZ_Flag from "../static/img/icons/czech-republic-flag-icon.svg";
import { useLsi } from "../contexts";
import Lsi from "./Lsi";

const languageMap = {
  cs: CZ_Flag,
  en: UK_Flag,
};
const LanguageSelector = () => {
  const { language, handleChangeLanguage } = useLsi();
  const toggleLanguage = () => {
    language === "en" ? handleChangeLanguage("cs") : handleChangeLanguage("en");
  };
  return (
    <IconButton onClick={toggleLanguage}>
      <Tooltip
        title={
          <Lsi
            lsi={{
              en: "Změnit jazyk na češtinu",
              cs: "Change language to English",
            }}
          />
        }
        placement="left"
        arrow
        enterDelay={500}
      >
        <Box
          component="img"
          alt={language}
          src={languageMap[language]}
          height={{ xs: "18px", sm: "24px" }}
          width={{ xs: "18px", sm: "24px" }}
        />
      </Tooltip>
    </IconButton>
  );
};

export default LanguageSelector;
