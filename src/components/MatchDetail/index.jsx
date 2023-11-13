import { Container, Paper, Stack, useTheme } from "@mui/material";
import MatchHeader from "../MatchCard/MatchHeader";
import MatchResult from "./MatchResult";

const MatchDetail = ({ match }) => {
  const theme = useTheme();
  const { teams, participants, gameCreation, gameDuration } = match;
  const blueParticipants = participants.slice(0, 5);
  const redParticipants = participants.slice(5, 10);
  return (
    <Container maxWidth="xl" sx={{ mt: "16px" }}>
      <Paper
        elevation={3}
        sx={{
          padding: {
            xs: "8px",
            sm: "16px",
            backgroundColor: theme.palette.white.main,
          },
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <MatchResult teams={teams} />
        <MatchHeader
          gameCreation={gameCreation}
          gameDuration={gameDuration}
          teams={teams}
        />
        <Stack
          direction={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          spacing="8px"
        ></Stack>
        {/* TeamDetails */}
      </Paper>
    </Container>
  );
};

export default MatchDetail;
