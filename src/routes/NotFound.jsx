import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Lsi from "../components/Lsi";
import missing from "../static/img/missing.png";
import useWindowDimensions from "../hooks/useWindowDimensions";

const NotFound = () => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  return (
    <Container
      sx={{
        height: "100vh",
        minWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography
          fontFamily="Poppins, sans-serif"
          fontWeight={700}
          fontSize={width > 450 ? "36px" : "24px"}
          color={theme.palette.primary.dark}
          sx={{
            textShadow: `${theme.palette.secondary.dark} 1px 0 10px`,
            paddingBottom: "12px",
          }}
        >
          <Lsi lsi={{ en: "Page not found", cs: "Stránka nenalezena" }} />
        </Typography>
        <Typography
          fontFamily="Red Hat Display, sans-serif"
          fontWeight={500}
          color={theme.palette.white.main}
          letterSpacing="1px"
          fontSize={width > 450 ? "18px" : "14px"}
          textAlign="center"
        >
          <Lsi
            lsi={{
              en: "Oh no! Looks like this page is missing ...",
              cs: "Ale ne! Vypadá to, že tato stránka chybí ...",
            }}
          />
        </Typography>
        <Box
          component="img"
          alt="not-found"
          src={missing}
          width={width > 450 ? "120px" : "80px"}
          height={width > 450 ? "120px" : "80px"}
          padding="32px"
        />
        <Typography
          fontFamily="Red Hat Display, sans-serif"
          fontWeight={500}
          color={theme.palette.white.main}
          letterSpacing="1px"
          fontSize={width > 450 ? "18px" : "14px"}
          textAlign="center"
        >
          <Lsi
            lsi={{
              en: "... better ping it and go back to the main page.",
              cs: "... raději to pingni a vrať se na hlavní stránku.",
            }}
          />
        </Typography>
      </Stack>
    </Container>
  );
};

export default NotFound;
