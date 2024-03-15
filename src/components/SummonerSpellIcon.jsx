import { Box } from "@mui/material";
import summonerSpellMap from "../utils/summoner-spell-map";
import config from "../static/data/config.json";

const SummonerSpellIcon = ({ id, ...props }) => {
  const spellName = summonerSpellMap[id];
  const spellImageUrl = `${config.baseCdnUrl}${config.lolPatch}/img/spell/${spellName}`;
  return <Box component="img" alt={spellName} src={spellImageUrl} {...props} />;
};

export default SummonerSpellIcon;
