import {
  Box,
  Button,
  DefaultMantineColor,
  Group,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import useHeroStyles from "./Hero.styles";

export interface IHeroProps {
  title: string;
  color: DefaultMantineColor;
  rightSection: React.ReactNode;
}

function Hero({ title, color, rightSection }: IHeroProps) {
  const { classes } = useHeroStyles({ color });
  const theme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
  const buttonSize = isLargeScreen ? "lg" : "sm";

  return (
    <Group noWrap px={isLargeScreen ? "xl" : 0} grow spacing={128}>
      <Stack className={classes.mainHero}>
        <Title className={classes.mainTitle}>{title}</Title>
        <Box>
          <Button
            color={`${color}.8`}
            size={buttonSize}
            fullWidth={!isLargeScreen}
            radius="md"
          >
            ¡Registrate Ahora!
          </Button>
        </Box>
      </Stack>

      <Group spacing={0} noWrap p={0}>
        {rightSection}
      </Group>
    </Group>
  );
}

export default Hero;
