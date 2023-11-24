import { Box, Typography } from "@mui/material";
import {
  BaronIcon,
  DragonIcon,
  HeraldIcon,
  InhibitorIcon,
  TowerIcon,
} from "../Icons";

const Objective = ({ type, data, teamId }) => {
  const direction = {
    100: type === "champion" ? "row-reverse" : "row",
    200: type === "champion" ? "row" : "row-reverse",
  };
  const { kills, first } = data;
  const objectiveIcons = {
    baron: (
      <BaronIcon
        teamId={teamId}
        width={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
        height={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
      />
    ),
    dragon: (
      <DragonIcon
        teamId={teamId}
        width={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
        height={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
      />
    ),
    tower: (
      <TowerIcon
        teamId={teamId}
        width={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
        height={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
      />
    ),
    riftHerald: (
      <HeraldIcon
        teamId={teamId}
        width={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
        height={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
      />
    ),
    inhibitor: (
      <InhibitorIcon
        teamId={teamId}
        width={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
        height={{ xs: "12px", sm: "16px", md: "20px", lg: "24px" }}
      />
    ),
  };
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", s: direction[teamId] }}
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
