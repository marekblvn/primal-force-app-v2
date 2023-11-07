import { Paper, Stack, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import summonerNames from "../../static/data/summoners.json";
import MatchHeader from "./MatchHeader";
import MatchParticipants from "./MatchParticipants";

const MatchCard = ({ match, onDeleteClick }) => {
  const theme = useTheme();
  const { _id, gameCreation, gameDuration, teams, participants } = match;
  const winningTeamId = teams.filter((t) => t.win)[0].teamId;
  const PMFTeamId = participants.filter((p) =>
    Object.values(summonerNames).flat().includes(p.summonerName)
  )[0].teamId;
  const victory = winningTeamId === PMFTeamId;
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: victory
          ? theme.palette.matchFill.green
          : theme.palette.matchFill.red,
        width: "95%",
        height: "auto",
        padding: { xs: "4px", md: "16px" },
        border: `solid 3px ${
          victory
            ? theme.palette.matchBorder.green
            : theme.palette.matchBorder.red
        }`,
      }}
    >
      <NavLink
        // to={"/match/" + _id}
        style={{
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <Stack direction="column" spacing="12px">
          <MatchHeader
            gameCreation={gameCreation}
            gameDuration={gameDuration}
            teams={teams}
          />
          <MatchParticipants participants={participants} />
        </Stack>
      </NavLink>
    </Paper>
  );
};

export default MatchCard;
