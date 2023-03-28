import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";

export type CustomRoute = RouteObject & {
  // I am adding this property because this array will be used to generate the Header Navbar
  navName: string;
};

const routes: CustomRoute[] = [
  {
    navName: "Home",
    path: "/",
    element: <Home />,
  },
];

export default routes;
