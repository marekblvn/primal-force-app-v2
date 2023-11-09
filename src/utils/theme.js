import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#363062", light: "#4a4572", dark: "#312b58" },
    secondary: { main: "#4D4C7D", light: "#5f5e8a", dark: "#454471" },
    warning: { main: "#F99417", dark: "#c77612" },
    white: { main: "#F5F5F5" },
    black: { main: "#191919" },
    blue: { main: "#0A96AA" },
    red: { main: "#BE1E37" },
    matchBorder: { green: "#1aa31a", red: "#d63333" },
    matchFill: { green: "#E1EEE1", red: "#F2E3E3" },
  },
  breakpoints: {
    values: {
      xs: 0,
      s: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
