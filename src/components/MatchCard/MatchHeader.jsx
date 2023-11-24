import { Stack } from "@mui/material";
import ObjectiveList from "./ObjectiveList";
import MatchHeaderCenter from "./MatchHeaderCenter";

const MatchHeader = ({ gameCreation, gameDuration, teams }) => {
  const [blueTeamData, redTeamData] = teams;
  const blueKills = blueTeamData.objectives.champion.kills;
  const redKills = redTeamData.objectives.champion.kills;
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <ObjectiveList
        objectives={blueTeamData.objectives}
        teamGold={blueTeamData.goldEarned}
        bans={blueTeamData.bans}
        teamId={100}
      />
      <MatchHeaderCenter
        gameCreation={gameCreation}
        gameDuration={gameDuration}
        blueKills={blueKills}
        redKills={redKills}
      />
      <ObjectiveList
        objectives={redTeamData.objectives}
        teamGold={redTeamData.goldEarned}
        bans={redTeamData.bans}
        teamId={200}
      />
    </Stack>
  );
};

export default MatchHeader;
