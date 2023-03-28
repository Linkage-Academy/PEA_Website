import { Box, Stack, useMantineTheme } from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import ColoredHeader from "../ColoredHeader";
import Hero from "../Hero";
import useHeroHeaderStyles from "./HeroHeader.styles";
import { IHeroProps } from "../Hero/Hero";
import routes from "../../routes";

type IHeroHeaderProps = IHeroProps;

function HeroHeader({ color, title, rightSection }: IHeroHeaderProps) {
  const { classes } = useHeroHeaderStyles({ color });

  const theme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
  const xPadding = isLargeScreen ? 128 : 128 / 2;

  return (
    <Stack spacing={0} sx={{ position: "relative" }}>
      <ColoredHeader color={color} routes={routes} />
      <Box className={classes.rightSidebar} />

      <Box pl={xPadding} pr={xPadding} my="md">
        <Hero color={color} title={title} rightSection={rightSection} />
      </Box>
    </Stack>
  );
}

export default HeroHeader;
