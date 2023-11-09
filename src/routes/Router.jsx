import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
