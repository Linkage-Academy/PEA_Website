import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import routes from "./routes";

function App() {
  const appRoutes = createBrowserRouter(routes);
  return <RouterProvider router={appRoutes} />;
}

function WrappedApp() {
  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{
        fontFamily: "Open Sans, sans-serif",
        headings: { fontFamily: "Merriweather, sans-serif" },
      }}
    >
      <App />
    </MantineProvider>
  );
}

export default WrappedApp;
