import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import TokenContext from "./token-context";

const TokenProvider = ({ children }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const authToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: process.env.REACT_APP_AUTH0_API,
            scope: "read:match create:match delete:match",
          },
        });
        setToken(authToken);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [getAccessTokenSilently]);
  return (
    <TokenContext.Provider value={token}>{children}</TokenContext.Provider>
  );
};

export { TokenProvider, TokenContext };
