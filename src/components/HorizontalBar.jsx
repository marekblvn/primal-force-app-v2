import { AppBar, Toolbar } from "@mui/material";
import Logo from "./Logo";
import { useTheme } from "@emotion/react";
import Menu from "./Menu";

const HorizontalBar = ({ championQuery, onChampionQueryChange }) => {
  const theme = useTheme();
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.primary.main,
        justifyContent: "center",
        height: { xs: "48px", sm: "64px" },
      }}
    >
      <Toolbar
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: { xs: "22px", sm: "24px" },
          paddingLeft: { xs: "8px", sm: "16px" },
        }}
      >
        <Logo />
        <Menu />
      </Toolbar>
    </AppBar>
  );
};

export default HorizontalBar;
