import { Box, Stack, Tooltip } from "@mui/material";
import icon from "../../static/img/icons/lol-ui/ban.png";
import Ban from "./Ban";
import Lsi from "../Lsi";

const BanList = ({ bans = [], teamId }) => {
  return (
    <Tooltip
      title={
        <Lsi
          lsi={{
            en: `${teamId === 100 ? "Blue" : "Red"} team bans`,
            cs: `Bany ${teamId === 100 ? "modrého" : "červeného"} týmu`,
          }}
        />
      }
      placement={teamId === 100 ? "right" : "left"}
      arrow
    >
      <Stack
        direction={teamId === 100 ? "row" : "row-reverse"}
        spacing={{ xs: "2px", sm: "4px", md: "8px", lg: "12px", xl: "16px" }}
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
