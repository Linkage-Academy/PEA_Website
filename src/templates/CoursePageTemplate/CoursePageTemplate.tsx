import {
  Box,
  Center,
  DefaultMantineColor,
  Group,
  SimpleGrid,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import HeroHeader from "../../components/HeroHeader";
import useCoursePageTemplateStyles from "./CoursePageTemplate.styles";
import GroupInfobox, {
  IGroupInfoboxProps,
} from "../../components/GroupInfobox/GroupInfobox";
import CourseDescriptionCard from "../../components/CourseDescriptionCard";
import { ICourseDescriptionCardProps } from "../../components/CourseDescriptionCard/CourseDescriptionCard";
import StackInfobox, {
  IStackInfoboxProps,
} from "../../components/StackInfobox/StackInfobox";
import ImageCourseCard from "../../components/ImageCourseCard/ImageCourseCard";

export interface ICoursePageTemplateProps {
  accentColor: DefaultMantineColor;
  hero: {
    title: string;
    rightSection: React.ReactNode;
  };
  infoFirst: IGroupInfoboxProps;
  courseCard: ICourseDescriptionCardProps;

  infoSecond: IStackInfoboxProps;

  modules: {
    img: string;
    title: string;
    description: string;
    hasButton: boolean;
  }[];

  infoThird: IGroupInfoboxProps;
}

function CoursePageTemplate({
  accentColor,
  hero,
  infoFirst,
  courseCard,
  infoSecond,
  modules,
  infoThird,
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

      <Box px={xPadding} className={classes.grid} bg="#FFFFFF" pb="2rem">
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

      <Box bg="gray.1" px={xPadding} py="2rem">
        <Title className={classes.titleSection}>Módulos</Title>
        <SimpleGrid
          cols={1}
          pt="1rem"
          spacing="1rem"
          breakpoints={[{ minWidth: "sm", cols: 2 }]}
        >
          {modules.map((el) => (
            <ImageCourseCard
              key={el.title}
              img={el.img}
              title={el.title}
              description={el.description}
              hasButton={el.hasButton}
              color={accentColor}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Group grow px={xPadding}>
        <GroupInfobox {...infoThird} />
        <Box />
      </Group>
    </Stack>
  );
}

export default CoursePageTemplate;
