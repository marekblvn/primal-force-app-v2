import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#ff0000" },
    secondary: { main: "#0000ff" },
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
