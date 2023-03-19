import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MantineProvider} from "@mantine/core";
import {Notifications} from "@mantine/notifications";
import Home from "./pages/Home";


function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
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