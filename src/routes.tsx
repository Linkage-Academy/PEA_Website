import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import MinecraftCourse from "./pages/MinecraftCourse";
import WebBootcampCourse from "./pages/WebBootcampCourse";
import ProfessionalCourse from "./pages/ProfesionalCourse/ProfessionalCourse";


export type CustomRoute = RouteObject & {
  // I am adding this property because this array will be used to generate the Header Navbar. Diego is useless and his code is repetitive.
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
    path: "/profesional",
    element: <ProfessionalCourse />,
  },
  {
    navName: "",
    path: "/empresarial",
    element: <WebBootcampCourse />,
  },
  {
    navName: "",
    path: "/universitario",
    element: <WebBootcampCourse/>,
  },
];

export default routes;
