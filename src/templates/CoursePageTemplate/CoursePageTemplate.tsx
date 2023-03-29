import {
  Box,
  Center,
  DefaultMantineColor,
  Skeleton,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import HeroHeader from "../../components/HeroHeader";
import useCoursePageTemplate from "./CoursePageTemplate.styles";
import useCoursePageTemplateStyles from "./CoursePageTemplate.styles";

export interface ICoursePageTemplateProps {
  accentColor: DefaultMantineColor;
  hero: {
    title: string;
    rightSection: React.ReactNode;
  };
}
function CoursePageTemplate({ accentColor, hero }: ICoursePageTemplateProps) {
  const { classes } = useCoursePageTemplateStyles();
  const theme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
  const xPadding = isLargeScreen ? 128 : "xs";

  return (
    <Stack spacing="2rem">
      <HeroHeader
        title={hero.title}
        color={accentColor}
        rightSection={hero.rightSection}
      />
      <Box px={xPadding} className={classes.grid}>
        <Box className={classes.gridWhy}>
          <Skeleton height={200} width="100%" />
        </Box>

        <Center className={classes.gridCard}>
          <Skeleton height="100%" width="100%" />
        </Center>

        <Box className={classes.gridPlaying}>
          <Skeleton height={50} width="100%" />
        </Box>
      </Box>
    </Stack>
  );
}

export default CoursePageTemplate;
