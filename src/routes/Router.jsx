import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";

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
    element: <div>Error</div>,
  },
]);

export default Router;
