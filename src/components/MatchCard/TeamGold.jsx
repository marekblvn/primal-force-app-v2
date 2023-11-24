import { Stack, Tooltip, Typography } from "@mui/material";
import { GoldIcon } from "../Icons";
import { useLsi } from "../../contexts";
import Lsi from "../Lsi";

const TeamGold = ({ gold, teamId }) => {
  const { language } = useLsi();
  const formattedGold = new Intl.NumberFormat(
    language === "en" ? "en-GB" : "cs-CZ"
  ).format(gold);
  return (
    <Tooltip
      title={
        <Lsi
          lsi={{
            en: `${teamId === 100 ? "Blue" : "Red"} team gold`,
            cs: `Zlato ${teamId === 100 ? "modrého" : "červeného"} týmu`,
          }}
        />
      }
      placement={teamId === 100 ? "right" : "left"}
      arrow
    >
      <Stack
        direction={teamId === 100 ? "row" : "row-reverse"}
        justifyContent={teamId === 100 ? "flex-start" : "flex-end"}
        alignItems="center"
        spacing="4px"
        padding={teamId === 100 ? "0 0 0 4px" : "0 4px 0 0"}
      >
        <GoldIcon />
        <Typography
          fontSize={{ xs: "10px", md: "14px", lg: "16px", xl: "20px" }}
          fontWeight={600}
        >
          {formattedGold}
        </Typography>
      </Stack>
    </Tooltip>
  );
};

export default TeamGold;
