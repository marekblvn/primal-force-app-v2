import { Stack } from "@mui/material";
import Objective from "./Objective";

const ObjectiveList = ({ objectives, team }) => {
  return (
    <Stack
      direction={team === "blue" ? "row" : "row-reverse"}
      spacing={{ xs: "8px", sm: "12px", xl: "18px" }}
    >
      <Objective type="tower" data={objectives.tower} team={team} />
      <Objective type="inhibitor" data={objectives.inhibitor} team={team} />
      <Objective type="riftHerald" data={objectives.riftHerald} team={team} />
      <Objective type="dragon" data={objectives.dragon} team={team} />
      <Objective type="baron" data={objectives.baron} team={team} />
    </Stack>
  );
};

export default ObjectiveList;
