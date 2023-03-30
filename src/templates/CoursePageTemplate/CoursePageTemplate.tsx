import {
  Box,
  Center,
  DefaultMantineColor,
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
import StackInfobox, {
  IStackInfoboxProps,
} from "../../components/StackInfobox/StackInfobox";

export interface ICoursePageTemplateProps {
  accentColor: DefaultMantineColor;
  hero: {
    title: string;
    rightSection: React.ReactNode;
  };
  infoFirst: IGroupInfobox;
  courseCard: ICourseDescriptionCardProps;

  infoSecond: IStackInfoboxProps;
}

function CoursePageTemplate({
  accentColor,
  hero,
  infoFirst,
  courseCard,
  infoSecond,
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
          <StackInfobox {...infoSecond} />
        </Box>
      </Box>
    </Stack>
  );
}

export default CoursePageTemplate;
