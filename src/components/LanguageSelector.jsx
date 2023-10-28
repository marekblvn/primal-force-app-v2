import {
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import UK_Flag from "../static/img/united-kingdom-flag-icon.svg";
import CZ_Flag from "../static/img/czech-republic-flag-icon.svg";
import { useLsi } from "../contexts";
import Lsi from "./Lsi";

const languageMap = {
  cs: CZ_Flag,
  en: UK_Flag,
};
const LanguageSelector = () => {
  const { language, handleChangeLanguage } = useLsi();
  const theme = useTheme();
  const collapsed = useMediaQuery(theme.breakpoints.down("md"));
  const toggleLanguage = () => {
    language === "en" ? handleChangeLanguage("cs") : handleChangeLanguage("en");
  };
  return (
    <IconButton
      onClick={toggleLanguage}
      src={{ width: collapsed ? "32px" : "48px" }}
    >
      <Tooltip
        title={
          <Lsi
            lsi={{
              en: "Změnit jazyk na češtinu",
              cs: "Change language to English",
            }}
          />
        }
        placement="bottom"
        arrow
        enterDelay={500}
      >
        <Box
          component="img"
          alt={language}
          src={languageMap[language]}
          height={collapsed ? "24px" : "32px"}
          width={collapsed ? "24px" : "32px"}
        />
      </Tooltip>
    </IconButton>
  );
};

export default LanguageSelector;
