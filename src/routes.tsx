import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import MinecraftCourse from "./pages/MinecraftCourse";
import WebBootcampCourse from "./pages/WebBootcampCourse";

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
  {
    navName: "",
    path: "/minecraft",
    element: <MinecraftCourse />,
  },
  {
    navName: "",
    path: "/web",
    element: <WebBootcampCourse />,
  },
];

export default routes;
