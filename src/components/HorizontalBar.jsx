import { AppBar, Toolbar } from "@mui/material";
import Logo from "./Logo";
import { useTheme } from "@emotion/react";
import Menu from "./Menu";

const HorizontalBar = () => {
  const theme = useTheme();
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.primary.main,
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>
        <Logo />
        <Menu />
      </Toolbar>
    </AppBar>
  );
};

export default HorizontalBar;
