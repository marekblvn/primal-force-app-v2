import { Box, Stack, Tooltip } from "@mui/material";
import icon from "../../static/img/icons/lol-ui/ban.png";
import Ban from "./Ban";
import Lsi from "../Lsi";

const BanList = ({ bans = [], team }) => {
  return (
    <Tooltip
      title={
        <Lsi
          lsi={{
            en: `${team === "blue" ? "Blue" : "Red"} team bans`,
            cs: `Bany ${team === "blue" ? "modrého" : "červeného"} týmu`,
          }}
        />
      }
      placement={team === "blue" ? "right" : "left"}
      arrow
    >
      <Stack
        direction={team === "blue" ? "row" : "row-reverse"}
        spacing="2px"
        alignItems="center"
      >
        <Box
          component="img"
          alt="ban"
          src={icon}
          width={{ xs: "14px", sm: "18px", md: "20px", lg: "24px" }}
          height={{ xs: "14px", sm: "18px", md: "20px", lg: "24px" }}
        />
        {bans.map((ban) => {
          return <Ban key={ban.championId} championId={ban.championId} />;
        })}
      </Stack>
    </Tooltip>
  );
};

export default BanList;
