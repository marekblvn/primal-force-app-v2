import { Stack } from "@mui/material";
import Objective from "./Objective";
import TeamGold from "./TeamGold";
import BanList from "./BanList";

const ObjectiveList = ({ objectives, teamId, teamGold, bans }) => {
  return (
    <Stack
      direction="column"
      alignItems={teamId === 100 ? "flex-start" : "flex-end"}
      spacing={{ xs: "8px", sm: "10px", xl: "16px" }}
    >
      <Stack
        direction={teamId === 100 ? "row" : "row-reverse"}
        spacing={{ xs: "8px", sm: "12px", lg: "18px", xl: "30px" }}
      >
        <Objective type="tower" data={objectives.tower} teamId={teamId} />
        <Objective
          type="inhibitor"
          data={objectives.inhibitor}
          teamId={teamId}
        />
        <Objective
          type="riftHerald"
          data={objectives.riftHerald}
          teamId={teamId}
        />
        <Objective type="dragon" data={objectives.dragon} teamId={teamId} />
        <Objective type="baron" data={objectives.baron} teamId={teamId} />
      </Stack>
      <TeamGold gold={teamGold} teamId={teamId} />
      <BanList bans={bans} teamId={teamId} />
    </Stack>
  );
};

export default ObjectiveList;
