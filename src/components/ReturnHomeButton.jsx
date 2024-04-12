import { useNavigate } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
import PopoverButton from "./PopoverButton";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Lsi from "../components/Lsi";
import LanguageSelector from "./LanguageSelector";

const ReturnHomeButton = () => {
  const navigate = useNavigate();
  return (
    <PopoverButton icon={<MenuIcon />}>
      <Tooltip
        title={
          <Lsi
            lsi={{
              en: "Return to main page",
              cs: "Vrátit se na hlavní stránku",
            }}
          />
        }
        arrow
        placement="left"
      >
        <IconButton onClick={() => navigate("/")} color="secondary">
          <ExitToAppIcon />
        </IconButton>
      </Tooltip>
      <LanguageSelector />
    </PopoverButton>
  );
};

export default ReturnHomeButton;
