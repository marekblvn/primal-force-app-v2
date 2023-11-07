import { useToken } from "../../contexts";
import { decode } from "jsonwebtoken";
import ScopeContext from "./scope-context";
const ScopeProvider = ({ children }) => {
  const token = useToken();
  console.log(decode(token));
  return <ScopeContext.Provider>{children}</ScopeContext.Provider>;
};

export default ScopeProvider;
