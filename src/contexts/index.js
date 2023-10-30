import { useContext } from "react";
import ChampionImageContext from "./champion-image/champion-image-context";
import LsiContext from "./lsi/lsi-context";
import TokenContext from "./token/token-context";

export const useChampionImages = () => {
  const championImageContext = useContext(ChampionImageContext);
  return championImageContext;
};

export const useLsi = () => {
  const lsiContext = useContext(LsiContext);
  return lsiContext;
};

export const useToken = () => {
  const tokenContext = useContext(TokenContext);
  return tokenContext;
};
