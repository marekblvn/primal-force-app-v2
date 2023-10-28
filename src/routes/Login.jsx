import React from "react";
import { Button, Container, Stack, Typography, Box } from "@mui/material";
import Loading from "../components/Loading/Loading";
import { useTheme } from "@emotion/react";
import Lsi from "../components/Lsi";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const theme = useTheme();
  const { loginWithRedirect } = useAuth0();
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography
          sx={{
            fontFamily: "K2D, sans-serif",
            fontSize: "48px",
            textAlign: "center",
            verticalAlign: "middle",
            color: theme.palette.white.main,
          }}
        >
          Primal Force
        </Typography>
        <Box
          sx={{
            minHeight: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loading />
        </Box>
        <Button
          disableFocusRipple
          sx={{
            width: { xs: "120px", md: "200px" },
            height: "64px",
            paddingLeft: "8px",
            paddingRight: "8px",
            borderRadius: "8px",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.white.main,
            fontFamily: "Red Hat Display, sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
            "&:focus": {
              backgroundColor: theme.palette.secondary.light,
            },
            textWrap: "nowrap",
          }}
          onClick={loginWithRedirect}
        >
          <Lsi lsi={{ en: "Sign in", cs: "Přihlásit se" }} />
        </Button>
      </Stack>
    </Container>
  );
};

export default Login;
