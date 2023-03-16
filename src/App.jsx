import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MantineProvider} from "@mantine/core";
import {Notifications} from "@mantine/notifications";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home2/>,
        },
    ]);
    return <RouterProvider router={routes}/>;
}

function WrappedApp() {
    return (
        <MantineProvider withNormalizeCSS withGlobalStyles>
            <Notifications position={"top-right"}/>
            <App/>
        </MantineProvider>
    );
}

export default WrappedApp;