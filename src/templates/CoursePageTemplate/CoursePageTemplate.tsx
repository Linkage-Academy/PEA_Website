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
import useCoursePageTemplateStyles from "./CoursePageTemplate.styles";
import GroupInfobox, {
  IGroupInfobox,
} from "../../components/GroupInfobox/GroupInfobox";
import CourseDescriptionCard from "../../components/CourseDescriptionCard";
import { ICourseDescriptionCardProps } from "../../components/CourseDescriptionCard/CourseDescriptionCard";

export interface ICoursePageTemplateProps {
  accentColor: DefaultMantineColor;
  hero: {
    title: string;
    rightSection: React.ReactNode;
  };
  infoFirst: IGroupInfobox;
  courseCard: ICourseDescriptionCardProps;
}

function CoursePageTemplate({
  accentColor,
  hero,
  infoFirst,
  courseCard,
}: ICoursePageTemplateProps) {
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
          <GroupInfobox {...infoFirst} />
        </Box>

        <Center className={classes.gridCard}>
          <CourseDescriptionCard {...courseCard} />
        </Center>

        <Box className={classes.gridPlaying}>
          <Skeleton height={50} width="100%" />
        </Box>
      </Box>
    </Stack>
  );
}

export default CoursePageTemplate;
