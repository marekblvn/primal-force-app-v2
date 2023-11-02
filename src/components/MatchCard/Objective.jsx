import { Box, Typography } from "@mui/material";
import {
  BaronIcon,
  DragonIcon,
  HeraldIcon,
  InhibitorIcon,
  TowerIcon,
} from "../Icons";

const Objective = ({ type, data, team }) => {
  const direction = {
    blue: type === "champion" ? "row-reverse" : "row",
    red: type === "champion" ? "row" : "row-reverse",
  };
  const { kills, first } = data;
  const objectiveIcons = {
    baron: (
      <BaronIcon
        team={team}
        width={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
        height={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
      />
    ),
    dragon: (
      <DragonIcon
        team={team}
        width={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
        height={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
      />
    ),
    tower: (
      <TowerIcon
        team={team}
        width={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
        height={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
      />
    ),
    riftHerald: (
      <HeraldIcon
        team={team}
        width={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
        height={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
      />
    ),
    inhibitor: (
      <InhibitorIcon
        team={team}
        width={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
        height={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
      />
    ),
  };
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", s: direction[team] }}
      justifyContent="center"
      alignItems="center"
      gap={{ xs: "2px", s: "4px" }}
    >
      {objectiveIcons[type]}
      <Typography
        fontFamily={"Red Hat Display, sans-serif"}
        textAlign="center"
        fontSize={{ xs: "11px", sm: "14px", md: "16px", lg: "18px" }}
        fontWeight={700}
      >
        {kills}
      </Typography>
    </Box>
  );
};

export default Objective;
