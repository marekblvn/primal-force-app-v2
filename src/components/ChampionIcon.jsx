import { Box } from "@mui/material";
import unknown from "../static/img/unknown.png";
import champions from "../static/data/champions.json";
import { useChampionImages } from "../contexts";

const ChampionIcon = ({ id = -1, name, ...props }) => {
  const championImages = useChampionImages();
  const champion = name
    ? champions.find((champ) => champ.name === name)?.asset.split(".")[0]
    : champions.find((champ) => champ.id === id)?.asset.split(".")[0];
  const championAsset = championImages[champion]?.src || unknown;
  return <Box component="img" alt="" src={championAsset} {...props} />;
};

export default ChampionIcon;
