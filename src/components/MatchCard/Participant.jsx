import { Stack, Typography, useTheme } from "@mui/material";
import ChampionIcon from "../ChampionIcon";

import PMFSummonerNames from "../../static/data/summoners.json";

const Participant = ({
  championId = -1,
  summonerName = "",
  team = "blue",
  highlight = false,
}) => {
  const theme = useTheme();
  return (
    <Stack
      direction={{ xs: team === "blue" ? "row-reverse" : "row", sm: "column" }}
      justifyContent="center"
      alignItems={"center"}
      spacing="4px"
    >
      <Typography
        fontSize={{ xs: "10px", md: "12px", xl: "18px" }}
        fontWeight={highlight ? 700 : 500}
        noWrap
        width="90%"
        textAlign="center"
      >
        {Object.keys(PMFSummonerNames).find((name) =>
          PMFSummonerNames[name].includes(summonerName)
        ) || summonerName}
      </Typography>
      <ChampionIcon
        id={championId}
        width={{ xs: "20px", sm: "24px", md: "32px", lg: "40px" }}
        height={{ xs: "20px", sm: "24px", md: "32px", lg: "40px" }}
        border={`solid 2px ${
          team === "blue" ? theme.palette.blue.main : theme.palette.red.main
        }`}
        borderRadius="25%"
      />
    </Stack>
  );
};

export default Participant;
