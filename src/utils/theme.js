import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#2F4858", light: "#596d79", dark: "#263a46" },
    secondary: { main: "#33658A", light: "#7093ad", dark: "#244761" },
    warning: { main: "#F6AE2D" },
    white: { main: "#F9F9F9" },
    black: { main: "#191919" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
