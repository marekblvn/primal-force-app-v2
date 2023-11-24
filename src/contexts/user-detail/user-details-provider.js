import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import UserDetailsContext from "./user-details-context";
import axios from "axios";

const UserDetailsProvider = ({ children, audience, scope }) => {
  const { getAccessTokenWithPopup, getAccessTokenSilently, user } = useAuth0();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const Auth0ManagementApiUrl = `${audience}users/${user?.sub}`;
  useEffect(() => {
    (async () => {
      if (user) {
        setLoading(true);
        let accessToken;
        try {
          accessToken = await getAccessTokenSilently({
            authorizationParams: {
              audience: audience,
              scope: scope,
            },
          });
        } catch (e) {
          try {
            accessToken = await getAccessTokenWithPopup({
              authorizationParams: {
                audience: audience,
                scope: scope,
              },
            });
          } catch (err) {
            setError(err);
            return;
          }
        }
        setAccessToken(accessToken);
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
          .then((res) => setData(res?.data))
          .catch((err) => setError(err));
        setLoading(false);
      }
    })();
  }, [getAccessTokenWithPopup, getAccessTokenSilently, user?.sub]);
  // management API hooks
  const changeUserPicture = (userPicUrl) => {
    const opt = {
      method: "PATCH",
      maxBodyLength: Infinity,
      url: Auth0ManagementApiUrl,
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      data: {
        picture: userPicUrl,
      },
    };
    axios
      .request(opt)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <UserDetailsContext.Provider
      value={{ loading, error, data, changeUserPicture }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
};

export default UserDetailsProvider;
