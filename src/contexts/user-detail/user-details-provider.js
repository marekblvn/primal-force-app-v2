import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import UserDetailsContext from "./user-details-context";
import axios from "axios";

const UserDetailsProvider = ({ children, audience, scope }) => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [userDetails, setUserDetails] = useState({});
  const Auth0ManagementApiUrl = `${audience}users/${user?.sub}`;
  useEffect(() => {
    (async () => {
      if (user) {
        let accessToken;
        try {
          accessToken = await getAccessTokenSilently({
            authorizationParams: {
              audience: audience,
              scope: scope,
            },
          });
        } catch (e) {
          console.log(e.message);
          return;
        }

        const options = {
          method: "GET",
          url: Auth0ManagementApiUrl,
          headers: {
            authorization: `Bearer ${accessToken}`,
            "content-type": "application/json",
          },
        };
        axios
          .request(options)
          .then((res) => setUserDetails(res?.data))
          .catch((err) => console.log(err));
      }
    })();
  }, [getAccessTokenSilently, user?.sub]);
  return (
    <UserDetailsContext.Provider value={userDetails}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export default UserDetailsProvider;
