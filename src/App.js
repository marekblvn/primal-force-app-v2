import { RouterProvider } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Router from "./routes/Router";
import Login from "./routes/Login";
import { Paper } from "@mui/material";
import { useTheme } from "@emotion/react";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  const theme = useTheme();
  if (isLoading) return <div>Loading</div>;
  return (
    <Paper
      sx={{
        backgroundColor: theme.palette.secondary.main,
        minHeight: "100vh",
        padding: 0,
        margin: 0,
        borderRadius: 0,
        borderWidth: 0,
      }}
    >
      {isAuthenticated ? <RouterProvider router={Router} /> : <Login />}
    </Paper>
  );
}

export default App;
