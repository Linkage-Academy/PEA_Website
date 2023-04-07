import {useMantineTheme} from "@mantine/core";
import React from "react";
import {useMediaQuery} from "@mantine/hooks";
import HeroHeader from "../../components/HeroHeader";

function Home() {
  const theme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
  return (
    <HeroHeader title={"Minecraft"} color={"red"} rightSection={"hello"}/>
  );
}

export default Home;
