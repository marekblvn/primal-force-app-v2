import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
  BaronIcon,
  DragonIcon,
  HeraldIcon,
  InhibitorIcon,
  TowerIcon,
} from "../Icons";

const Objective = ({ type, data, team }) => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
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
      flexDirection={{ xs: "column", md: direction[team] }}
      justifyContent="center"
      alignItems="center"
      gap="4px"
    >
      {objectiveIcons[type]}
      <Typography
        fontFamily={"Red Hat Display, sans-serif"}
        textAlign="center"
        fontSize={{ xs: "11px", sm: "14px", md: "16px", lg: "18px" }}
      >
        {kills}
      </Typography>
    </Box>
  );
};

export default Objective;
