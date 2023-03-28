import {
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
    <Group noWrap>
      <Stack className={classes.mainHero}>
        <Title className={classes.mainTitle}>{title}</Title>
        <Button
          color={`${color}.8`}
          size={buttonSize}
          fullWidth={!isLargeScreen}
          radius="md"
        >
          ¡Registrate Ahora!
        </Button>
      </Stack>

      <Group p="xl" spacing={0} noWrap>
        {rightSection}
      </Group>
    </Group>
  );
}

export default Hero;
