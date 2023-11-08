import { IconButton, Paper, Stack, useTheme } from "@mui/material";
import summonerNames from "../../static/data/summoners.json";
import MatchHeader from "./MatchHeader";
import MatchParticipants from "./MatchParticipants";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteMode } from "../../contexts";
import { useNavigate } from "react-router-dom";

const MatchCard = ({ match, onDeleteClick }) => {
  const { deleteMode } = useDeleteMode();
  const theme = useTheme();
  const navigate = useNavigate();

  const { _id, gameCreation, gameDuration, teams, participants } = match;
  const winningTeamId = teams.filter((t) => t.win)[0].teamId;
  const PMFTeamId = participants.filter((p) =>
    Object.values(summonerNames).flat().includes(p.summonerName)
  )[0].teamId;
  const victory = winningTeamId === PMFTeamId;
  return (
    <Stack
      direction="column"
      sx={{ width: "95%", height: "auto" }}
      position="relative"
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: victory
            ? theme.palette.matchFill.green
            : theme.palette.matchFill.red,
          width: "auto",
          height: "auto",
          padding: { xs: "4px", md: "16px" },
          border: `solid 3px ${
            victory
              ? theme.palette.matchBorder.green
              : theme.palette.matchBorder.red
          }`,
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => navigate(`/match/${_id}`)}
      >
        <Stack direction="column" spacing="12px">
          <MatchHeader
            gameCreation={gameCreation}
            gameDuration={gameDuration}
            teams={teams}
          />
          <MatchParticipants participants={participants} />
        </Stack>
      </Paper>
      {deleteMode && (
        <IconButton
          disableRipple
          onClick={() => {
            onDeleteClick(_id);
          }}
          sx={{
            backgroundColor: theme.palette.primary.main,
            position: "absolute",
            right: 0,
            top: 0,
            width: { xs: "24px", sm: "28px", md: "32px" },
            height: { xs: "24px", sm: "28px", md: "32px" },
            borderRadius: "0 0 0 50%",
            "&:hover": {
              backgroundColor: theme.palette.primary.light,
            },
          }}
        >
          <DeleteIcon
            sx={{
              width: { xs: "16px", sm: "20px", md: "24px" },
              height: { xs: "16px", sm: "20px", md: "24px" },
            }}
            style={{
              color: theme.palette.white.main,
            }}
          />
        </IconButton>
      )}
    </Stack>
  );
};

export default MatchCard;
