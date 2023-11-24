import { IconButton, Tooltip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import HorizontalBar from "../components/HorizontalBar";
import PopoverButton from "../components/PopoverButton";
import Lsi from "../components/Lsi";
import LanguageSelector from "../components/LanguageSelector";
import UserDetailsProvider from "../contexts/user-detail/user-details-provider";
import UserDetails from "../components/UserDetails";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <HorizontalBar>
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
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <LanguageSelector />
        </PopoverButton>
      </HorizontalBar>
      <UserDetailsProvider
        audience={`https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`}
        scope="read:current_user"
      >
        <UserDetails />
      </UserDetailsProvider>
    </>
  );
};

export default Profile;
