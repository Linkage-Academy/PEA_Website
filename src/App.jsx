import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MantineProvider} from "@mantine/core";
import {Notifications} from "@mantine/notifications";
import Home from "./pages/Home";
import CursoInfantil from "./pages/CursoInfantil";
import CursoWeb from "./pages/CursoWeb";


function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path:"/cursoprogramacioninfantil",
            element: <CursoInfantil/>
        },
        {
            path:"/cursoweb",
            element:<CursoWeb/>

        }
    ]);
    return <RouterProvider router={routes}/>;
}

function WrappedApp() {
    return (
        <MantineProvider withNormalizeCSS withGlobalStyles theme={{
            fontFamily: "Open Sans, sans-serif",
            headings: {fontFamily: 'Merriweather, sans-serif'},
        }}>
            <Notifications position={"top-right"}/>
            <App/>
        </MantineProvider>
    );
}

export default WrappedApp;