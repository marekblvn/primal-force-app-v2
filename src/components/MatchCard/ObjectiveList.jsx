import { Stack } from "@mui/material";
import Objective from "./Objective";
import TeamGold from "./TeamGold";
import BanList from "./BanList";

const ObjectiveList = ({ objectives, team, teamGold, bans }) => {
  return (
    <Stack
      direction="column"
      alignItems={team === "blue" ? "flex-start" : "flex-end"}
      spacing={{ xs: "8px", sm: "10px", xl: "16px" }}
    >
      <Stack
        direction={team === "blue" ? "row" : "row-reverse"}
        spacing={{ xs: "8px", sm: "12px", lg: "18px", xl: "30px" }}
      >
        <Objective type="tower" data={objectives.tower} team={team} />
        <Objective type="inhibitor" data={objectives.inhibitor} team={team} />
        <Objective type="riftHerald" data={objectives.riftHerald} team={team} />
        <Objective type="dragon" data={objectives.dragon} team={team} />
        <Objective type="baron" data={objectives.baron} team={team} />
      </Stack>
      <TeamGold gold={teamGold} team={team} />
      <BanList bans={bans} team={team} />
    </Stack>
  );
};

export default ObjectiveList;
