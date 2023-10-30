import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import TokenContext from "./token-context";

const TokenProvider = ({ children, audience, scope }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const authToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: audience,
            scope: scope,
          },
        });
        setToken(authToken);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [getAccessTokenSilently, audience, scope]);
  return (
    <TokenContext.Provider value={token}>{children}</TokenContext.Provider>
  );
};

export { TokenProvider, TokenContext };
