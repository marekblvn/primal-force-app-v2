import { useTheme } from "@emotion/react";
import { Box, Stack } from "@mui/material";

const Logo = () => {
  const theme = useTheme();
  return (
    <Box
      component="img"
      sx={{
        [theme.breakpoints.down("sm")]: {
          width: "48px",
          height: "48px",
        },
        [theme.breakpoints.up("sm")]: {
          width: "56px",
          height: "56px",
        },
      }}
      alt="Primal Force"
      src={
        "https://ucarecdn.com/f475973e-0622-4ff6-a092-3582128a4ec4/-/preview/500x500/-/quality/smart_retina/-/format/auto/"
      }
    />
  );
};

export default Logo;
