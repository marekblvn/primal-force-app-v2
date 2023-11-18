import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import HorizontalBar from "../components/HorizontalBar";
import useGetCommand from "../hooks/useGetCommand";
import { matchGet } from "../services/primal-force-api/match-service";
import MatchDetailProvider from "../components/MatchDetailProvider";
import LanguageSelector from "../components/LanguageSelector";
import { IconButton, Tooltip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PopoverButton from "../components/PopoverButton";
import Lsi from "../components/Lsi";

const Match = () => {
  const navigate = useNavigate();
  const { matchId } = useParams();
  const { data, loading, error } = useGetCommand({
    command: matchGet,
    skipInitial: false,
    initialParams: { id: matchId },
  });
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
      <MatchDetailProvider data={data} error={error} loading={loading} />
    </>
  );
};

export default Match;
