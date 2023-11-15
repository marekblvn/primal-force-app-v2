import { Stack, Tooltip, Typography } from "@mui/material";
import { GoldIcon } from "../Icons";
import { useLsi } from "../../contexts";
import Lsi from "../Lsi";

const TeamGold = ({ gold, team }) => {
  const { language } = useLsi();
  const formattedGold = new Intl.NumberFormat(
    language === "en" ? "en-GB" : "cs-CZ"
  ).format(gold);
  return (
    <Tooltip
      title={
        <Lsi lsi={{ en: `${team === "blue" ? "Blue" : "Red"} team gold` }} />
      }
      placement={team === "blue" ? "right" : "left"}
      arrow
    >
      <Stack
        direction={team === "blue" ? "row" : "row-reverse"}
        justifyContent={team === "blue" ? "flex-start" : "flex-end"}
        alignItems="center"
        spacing="4px"
        padding={team === "blue" ? "0 0 0 4px" : "0 4px 0 0"}
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
