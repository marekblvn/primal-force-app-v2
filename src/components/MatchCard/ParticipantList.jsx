import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import Participant from "./Participant";
import summonerNames from "../../static/data/summoners.json";

const ParticipantList = ({ participants, team }) => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const PMFParticipants = Object.values(summonerNames).flat();
  return smScreen ? (
    <Grid
      container
      justifyContent={"flex-end"}
      flexDirection={team === "blue" ? "row-reverse" : "row"}
      columns={11}
      wrap="nowrap"
      overflow="hidden"
    >
      {participants &&
        participants.map((p, index) => (
          <Grid key={index} item xs={2} zeroMinWidth>
            <Participant
              championId={p.championId}
              summonerName={p.summonerName}
              team={team}
              highlight={PMFParticipants.includes(p.summonerName)}
            />
          </Grid>
        ))}
    </Grid>
  ) : (
    <Stack
      direction="column"
      alignItems={team === "blue" ? "flex-start" : "flex-end"}
      spacing="4px"
    >
      {participants &&
        participants.map((p, index) => (
          <Participant
            key={index}
            championId={p.championId}
            summonerName={p.summonerName}
            team={team}
            highlight={PMFParticipants.includes(p.summonerName)}
          />
        ))}
    </Stack>
  );
};

export default ParticipantList;
