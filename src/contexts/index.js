import { useContext } from "react";
import ChampionImageContext from "./champion-image/champion-image-context";
import LsiContext from "./lsi/lsi-context";
import TokenContext from "./token/token-context";
import ScopeContext from "./scope/scope-context";
import DeleteModeContext from "./delete-mode/delete-mode-context";
import UserDetailsContext from "./user-detail/user-details-context";

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

export const useScope = () => {
  const scopeContext = useContext(ScopeContext);
  return scopeContext;
};

export const useDeleteMode = () => {
  const deleteModeContext = useContext(DeleteModeContext);
  return deleteModeContext;
};

export const useUserDetails = () => {
  const userDetailsContext = useContext(UserDetailsContext);
  return userDetailsContext;
};
