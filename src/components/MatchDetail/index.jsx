import { Container, Paper, Stack, Typography, useTheme } from "@mui/material";
import MatchHeader from "../MatchCard/MatchHeader";
import MatchResult from "./MatchResult";
import TeamTable from "./TeamTable";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Lsi from "../Lsi";

const TeamName = ({ side, ...props }) => {
  const theme = useTheme();
  return (
    <Typography
      fontFamily="Poppins, sans-serif"
      color={side === "blue" ? theme.palette.blue.main : theme.palette.red.main}
      fontWeight={600}
      {...props}
    >
      <Lsi
        lsi={{
          en: side === "blue" ? "Blue team" : "Red team",
          cs: side === "blue" ? "Modrý tým" : "Červený tým",
        }}
      />
    </Typography>
  );
};

const MatchDetail = ({ match }) => {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const { teams, participants, gameCreation, gameDuration } = match;
  const blueParticipants = participants.slice(0, 5);
  const redParticipants = participants.slice(5, 10);
  return (
    <Container
      maxWidth={false}
      sx={{ mt: "16px", display: "flex", justifyContent: "center" }}
    >
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
          maxWidth: "1800px",
        }}
      >
        <MatchResult teams={teams} />
        <MatchHeader
          gameCreation={gameCreation}
          gameDuration={gameDuration}
          teams={teams}
        />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: "4px", md: "12px", lg: "32px" }}
          mt={"8px"}
        >
          {width < 900 && <TeamName side="blue" />}
          <TeamTable participants={blueParticipants} side={"blue"} />
          {width < 900 && <TeamName side="red" />}
          <TeamTable participants={redParticipants} side={"red"} />
        </Stack>
        {/* TeamDetails */}
      </Paper>
    </Container>
  );
};

export default MatchDetail;
