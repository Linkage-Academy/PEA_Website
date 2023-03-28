import { useMantineTheme } from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { CustomRoute } from "../../routes";

function Home({ routes }: { routes: CustomRoute[] }) {
  alert(routes);
  const theme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
  return <p>ks</p>;
}

export default Home;
