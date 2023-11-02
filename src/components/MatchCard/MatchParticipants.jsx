import { Stack } from "@mui/material";
import ParticipantList from "./ParticipantList";

const MatchParticipants = ({ participants }) => {
  const blueTeamParticipants = participants.slice(0, 5);
  const redTeamParticipants = participants.slice(5, 10);
  return (
    <Stack direction="row" justifyContent="space-between">
      <ParticipantList participants={blueTeamParticipants} team="blue" />
      <ParticipantList participants={redTeamParticipants} team="red" />
    </Stack>
  );
};

export default MatchParticipants;
