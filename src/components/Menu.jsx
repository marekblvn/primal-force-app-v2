// components
import { Stack } from "@mui/material";
import PopoverButton from "./PopoverButton";
import LanguageSelector from "./LanguageSelector";
import Lsi from "./Lsi";
import TooltipedButton from "./TooltipedButton";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import FaceIcon from "@mui/icons-material/Face";
// contexts
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing="8px"
    >
      <PopoverButton icon={<PersonIcon />}>
        <TooltipedButton
          icon={<FaceIcon />}
          tooltipText={
            <Lsi lsi={{ en: "Go to my profile", cs: "Přejít na můj profil" }} />
          }
        />
        <TooltipedButton
          icon={<LogoutIcon />}
          tooltipText={<Lsi lsi={{ en: "Log out", cs: "Odhlásit se" }} />}
          onClick={logout}
        />
      </PopoverButton>
      <PopoverButton icon={<MenuIcon />}>
        <TooltipedButton
          icon={<QuestionMarkIcon />}
          tooltipText={
            <Lsi
              lsi={{
                en: "Go to About page",
                cs: "Přejít na informace o stránce",
              }}
            />
          }
          onClick={() => navigate("/about")}
        />
        <LanguageSelector />
      </PopoverButton>
    </Stack>
  );
};

export default Menu;
