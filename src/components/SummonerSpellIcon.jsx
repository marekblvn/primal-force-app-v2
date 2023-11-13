import { Box } from "@mui/material";
import summonerSpells from "../utils/summoner-spell-map";

const SummonerSpellIcon = ({ id, ...props }) => {
  return <Box component="img" alt={id} src={summonerSpells[id]} {...props} />;
};

export default SummonerSpellIcon;
