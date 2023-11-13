import { Stack, Typography, useTheme } from "@mui/material";
import Lsi from "../Lsi";

const winMsg = <Lsi lsi={{ en: "Victory", cs: "Vítězství" }} />;
const defeatMsg = <Lsi lsi={{ en: "Defeat", cs: "Prohra" }} />;

const MatchResult = ({ teams }) => {
  const theme = useTheme();
  const [blueTeam, redTeam] = teams;
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography
        fontFamily="Poppins, sans-serif"
        color={theme.palette.blue.main}
        fontWeight={700}
        textTransform="uppercase"
        fontSize={{
          xs: "12px",
          sm: "14px",
          md: "18px",
          lg: "24px",
          xl: "28px",
        }}
      >
        {blueTeam.win ? winMsg : defeatMsg}
      </Typography>
      <Typography
        fontFamily="Poppins, sans-serif"
        color={theme.palette.red.main}
        fontWeight={700}
        textTransform="uppercase"
        fontSize={{
          xs: "12px",
          sm: "14px",
          md: "18px",
          lg: "24px",
          xl: "28px",
        }}
      >
        {redTeam.win ? winMsg : defeatMsg}
      </Typography>
    </Stack>
  );
};

export default MatchResult;
