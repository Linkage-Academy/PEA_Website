import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MantineProvider} from "@mantine/core";
import {Notifications} from "@mantine/notifications";
import Home from "./pages/Home";
import CursoInfantil from "./pages/CursoInfantil";


function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path:"/cursoProgramacionInfantil",
            element: <CursoInfantil/>
        },
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