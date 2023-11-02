import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLsi } from "../../contexts";
import { KillIcon } from "../Icons";

const locale = {
  en: "en-GB",
  cs: "cs-CZ",
};

const MatchHeaderCenter = ({
  gameCreation,
  gameDuration,
  redKills,
  blueKills,
}) => {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const { language } = useLsi();
  const gameCreated = new Date(gameCreation).toLocaleDateString(
    locale[language]
  );
  const gameMinutes = String(Math.floor(gameDuration / 60)).padStart(2, "0");
  const gameSeconds = String(gameDuration % 60).padStart(2, "0");
  return (
    <Stack direction="column">
      <Typography
        fontSize={{ xs: "10px", lg: "12px" }}
        fontWeight={"11px"}
        textAlign={"center"}
      >
        {gameCreated}
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing="2px"
      >
        <Typography
          fontSize={{ xs: "14px", sm: "18px", md: "20px", lg: "24px" }}
          fontFamily="Poppins, sans-serif"
          color={theme.palette.blue.main}
          fontWeight={800}
        >
          {blueKills}
        </Typography>
        <KillIcon
          color="#785A28"
          size={largeScreen ? "large" : mediumScreen ? "medium" : "small"}
        />
        <Typography
          fontSize={{ xs: "14px", sm: "18px", md: "20px", lg: "24px" }}
          fontFamily="Poppins, sans-serif"
          color={theme.palette.red.main}
          fontWeight={800}
        >
          {redKills}
        </Typography>
      </Stack>
      <Typography
        fontSize={{ xs: "10px", s: "12px", sm: "14px", md: "16px", lg: "18px" }}
        fontWeight={800}
        textAlign={"center"}
      >
        {gameMinutes + ":" + gameSeconds}
      </Typography>
    </Stack>
  );
};

export default MatchHeaderCenter;
