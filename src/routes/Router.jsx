import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Match from "./Match";
import NotFound from "./NotFound";
import Profile from "./Profile";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/match/:matchId",
    element: <Match />,
    errorElement: <NotFound />,
  },
  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Router;
