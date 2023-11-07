import { useToken } from "../../contexts";
import { jwtDecode } from "jwt-decode";
import ScopeContext from "./scope-context";
import { useEffect, useState } from "react";
const ScopeProvider = ({ children }) => {
  const token = useToken();
  const [scopes, setScopes] = useState([]);
  useEffect(() => {
    if (token) {
      const { permissions } = jwtDecode(token);
      setScopes(permissions);
    }
  }, [token]);

  const hasScope = (scope) => {
    return scopes.includes(scope);
  };
  return (
    <ScopeContext.Provider value={{ hasScope }}>
      {children}
    </ScopeContext.Provider>
  );
};

export default ScopeProvider;
