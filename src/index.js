import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "@emotion/react";
import { LsiProvider } from "./contexts/lsi/lsi-provider";
import { ChampionImageProvider } from "./contexts/champion-image/champion-image-provider";
import theme from "./utils/theme";
import { TokenProvider } from "./contexts/token/token-provider";
import SnackbarProvider from "./contexts/snackbar/snackbar-provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <ChampionImageProvider>
      <LsiProvider>
        <SnackbarProvider>
          <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
            authorizationParams={{
              redirect_uri: window.location.origin,
              audience: process.env.REACT_APP_PMF_API_URL,
              scope:
                "openid profile email read:match delete:match create:match",
            }}
          >
            <TokenProvider
              audience={process.env.REACT_APP_PMF_API_URL}
              scope="read:match delete:match create:match"
            >
              <App />
            </TokenProvider>
          </Auth0Provider>
        </SnackbarProvider>
      </LsiProvider>
    </ChampionImageProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); //TODO: Remove before production
