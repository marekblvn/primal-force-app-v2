import { useContext } from "react";
import ChampionImageContext from "./champion-image/champion-image-context";
import LsiContext from "./lsi/lsi-context";

export const useChampionImage = () => {
  const championImageContext = useContext(ChampionImageContext);
  return championImageContext;
};

export const useLsi = () => {
  const lsiContext = useContext(LsiContext);
  return lsiContext;
};
