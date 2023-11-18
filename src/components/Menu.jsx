// components
import { IconButton, Stack, useTheme } from "@mui/material";
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
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
// contexts
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useDeleteMode, useScope } from "../contexts";

const Menu = ({ onAddMatchClick }) => {
  const { logout } = useAuth0();
  const navigate = useNavigate();
  const theme = useTheme();
  const { deleteMode, toggleDeleteMode } = useDeleteMode();
  const { hasScope } = useScope();
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: "4px", sm: "8px" }}
    >
      <TooltipedButton
        color={theme.palette.white.main}
        hoverColor={theme.palette.white.main}
        icon={
          <NoteAddIcon
            sx={{
              width: { xs: "18px", sm: "24px" },
              height: { xs: "18px", sm: "24px" },
            }}
          />
        }
        tooltipText={
          <Lsi lsi={{ en: "Add new match", cs: "Přidat nový zápas" }} />
        }
        tooltipPos="bottom"
        onClick={onAddMatchClick}
      />
      <PopoverButton
        icon={
          <PersonIcon
            sx={{
              width: { xs: "18px", sm: "24px" },
              height: { xs: "18px", sm: "24px" },
            }}
          />
        }
      >
        <TooltipedButton
          icon={
            <FaceIcon
              sx={{
                width: { xs: "18px", sm: "24px" },
                height: { xs: "18px", sm: "24px" },
              }}
            />
          }
          tooltipText={
            <Lsi lsi={{ en: "Go to my profile", cs: "Přejít na můj profil" }} />
          }
          onClick={() => navigate("/profile")}
        />
        <TooltipedButton
          icon={
            <LogoutIcon
              sx={{
                width: { xs: "18px", sm: "24px" },
                height: { xs: "18px", sm: "24px" },
              }}
            />
          }
          tooltipText={<Lsi lsi={{ en: "Log out", cs: "Odhlásit se" }} />}
          onClick={logout}
        />
      </PopoverButton>
      <PopoverButton
        icon={
          <MenuIcon
            sx={{
              width: { xs: "18px", sm: "24px" },
              height: { xs: "18px", sm: "24px" },
            }}
          />
        }
      >
        <TooltipedButton
          icon={
            <QuestionMarkIcon
              sx={{
                width: { xs: "18px", sm: "24px" },
                height: { xs: "18px", sm: "24px" },
              }}
            />
          }
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
        {hasScope("delete:match") && (
          <>
            <TooltipedButton
              icon={
                deleteMode ? (
                  <DeleteIcon
                    sx={{
                      width: { xs: "18px", sm: "24px" },
                      height: { xs: "18px", sm: "24px" },
                    }}
                  />
                ) : (
                  <DeleteOutlineIcon
                    sx={{
                      width: { xs: "18px", sm: "24px" },
                      height: { xs: "18px", sm: "24px" },
                    }}
                  />
                )
              }
              tooltipText={
                <Lsi
                  lsi={{
                    en: deleteMode
                      ? "Turn off delete mode"
                      : "Turn on delete mode",
                    cs: deleteMode ? "Vypnout mazání" : "Zapnout mazání",
                  }}
                />
              }
              onClick={toggleDeleteMode}
            />
          </>
        )}
        <LanguageSelector />
      </PopoverButton>
    </Stack>
  );
};

export default Menu;
