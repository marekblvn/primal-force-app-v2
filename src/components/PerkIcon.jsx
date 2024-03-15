import { Box } from "@mui/material";
import perkImageMap from "../utils/perk-map";
import config from "../static/data/config.json";

const PerkIcon = ({ id, ...props }) => {
  const perkImageName = perkImageMap[id];
  const perkImageUrl = `${config.baseCdnUrl}/img/perk-images/Styles/${perkImageName}`;
  return (
    <Box component="img" alt={perkImageName} src={perkImageUrl} {...props} />
  );
};

export default PerkIcon;
