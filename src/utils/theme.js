import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#363062", light: "#4a4572", dark: "#312b58" },
    secondary: { main: "#4D4C7D", light: "#5f5e8a", dark: "#454471" },
    warning: { main: "#F99417", dark: "#c77612" },
    white: { main: "#F5F5F5", dark: "#D3D3D3" },
    black: { main: "#191919" },
    blue: { main: "#0A96AA", dark: "#076977" },
    red: { main: "#BE1E37", light: "#F2E3E3", dark: "#D63333" },
    green: { dark: "#1AA31A", light: "#E1EEE1" },
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
