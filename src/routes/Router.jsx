import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Match from "./Match";
import NotFound from "./NotFound";

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
