import { AppBar, Toolbar } from "@mui/material";
import Logo from "./Logo";
import { useTheme } from "@emotion/react";

const HorizontalBar = ({ children }) => {
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
          paddingRight: { xs: "16px", sm: "24px" },
          paddingLeft: { xs: "8px", sm: "16px" },
        }}
      >
        <Logo />
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default HorizontalBar;
