import champions from "../static/data/champions.json";
import config from "../static/data/config.json";
const cdnUri = config.baseCdnUrl + config.lolPatch + "/img/champion/";
const getChampionAssetName = (id) => {
  const championAssetName = champions.find((champ) => champ.id === id).asset;
  return cdnUri + championAssetName;
};
export default getChampionAssetName;
