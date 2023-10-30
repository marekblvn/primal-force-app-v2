import { useTheme } from "@emotion/react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";

const Logo = () => {
  const theme = useTheme();
  const nameShown = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing="16px"
    >
      <NavLink
        to="/"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            [theme.breakpoints.down("sm")]: {
              width: "32px",
              height: "32px",
            },
            [theme.breakpoints.up("sm")]: {
              width: "64px",
              height: "64px",
            },
          }}
          alt="Primal Force"
          src={
            "https://ucarecdn.com/f475973e-0622-4ff6-a092-3582128a4ec4/-/preview/500x500/-/quality/smart_retina/-/format/auto/"
          }
        />
      </NavLink>
      {nameShown && (
        <Typography
          sx={{
            fontFamily: "K2D, sans-serif",
            fontSize: { xs: "28px", sm: "40px" },
            textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          Primal Force
        </Typography>
      )}
    </Stack>
  );
};

export default Logo;
