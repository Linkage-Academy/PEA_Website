import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MantineProvider, Title} from "@mantine/core";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Title>Home</Title>,
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
      <App/>
    </MantineProvider>
  );
}

export default WrappedApp;