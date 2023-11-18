import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GoldBarChart from "./GoldBarChart";
import Lsi from "../Lsi";
import { GoldIcon } from "../Icons";
import DamageBarChart from "./DamageBarChart";
import DamageIcon from "../Icons/DamageIcon";

const Charts = ({ matchId }) => {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid container paddingTop="4px">
      <Grid item xs={12} md={6}>
        <Stack
          direction="column"
          paddingBottom={{ xs: "4px", sm: "16px", md: 0 }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing="8px"
            paddingBottom={{ xs: "4px", sm: "6px", md: "12px" }}
          >
            <GoldIcon />
            <Typography
              fontFamily="Poppins, sans-serif"
              fontWeight={600}
              fontSize={{ xs: "12px", sm: "14px", md: "18px" }}
            >
              <Lsi lsi={{ en: "Gold earned", cs: "Získané zlato" }} />
            </Typography>
          </Stack>
          <GoldBarChart matchId={matchId} />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack direction="column">
          <Stack
            direction="row"
            alignItems="center"
            spacing="8px"
            paddingBottom={{ xs: "4px", sm: "6px", md: "12px" }}
          >
            <DamageIcon
              color="#785A28"
              size={largeScreen ? "large" : mediumScreen ? "medium" : "small"}
            />
            <Typography
              fontFamily="Poppins, sans-serif"
              fontWeight={600}
              fontSize={{ xs: "12px", sm: "14px", md: "18px" }}
            >
              <Lsi
                lsi={{
                  en: "Damage dealt to champions",
                  cs: "Poškození způsobené šampionům",
                }}
              />
            </Typography>
          </Stack>
          <DamageBarChart matchId={matchId} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Charts;
