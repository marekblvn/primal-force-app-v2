import { useEffect, useState } from "react";
import ChampionImageContext from "./champion-image-context";
import champions from "../../static/data/champions.json";
import config from "../../static/data/config.json";

const ChampionImageProvider = ({ children }) => {
  const [championImages, setChampionImages] = useState([]);
  useEffect(() => {
    const loadImages = async () => {
      const images = await Promise.all(
        champions.map(
          (champion) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src =
                config.baseCdnUrl +
                config.lolPatch +
                "/img/champion/" +
                champion.asset;
              img.onload = () => resolve(img);
            })
        )
      );
      const imagesMap = images.map((img, index) => [
        champions[index].asset.split(".")[0],
        img,
      ]); //FIXME: This surely can be achieved easier
      setChampionImages(Object.fromEntries(imagesMap));
    };
    loadImages();
  }, []);
  return (
    <ChampionImageContext.Provider value={championImages}>
      {children}
    </ChampionImageContext.Provider>
  );
};
export default ChampionImageProvider;
