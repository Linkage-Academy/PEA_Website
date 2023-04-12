import { Box, DefaultMantineColor, List, Stack, Text } from "@mantine/core";

import { ICourseDescriptionCardElement } from "../CourseDescriptionCard/CourseDescriptionCard";
import CourseDescriptionCard from "../CourseDescriptionCard";
import usePEAContentSectionStyles from "./PEAContentSection.styles";

export interface IPEAContentSectiosProps {
  textContent: string;
  listContent?: string[];
  courseInfo: {
    cardImage: string;
    color: DefaultMantineColor;
    title: string;
    elements: ICourseDescriptionCardElement[];
  };
}

function PEAContentSection({
  textContent,
  listContent,

  courseInfo,
}: IPEAContentSectiosProps) {
  const { classes } = usePEAContentSectionStyles();
  const listContentElements = listContent?.map((element) => (
    <List.Item>{element}</List.Item>
  ));
  return (
    <Stack spacing="xl" className={classes.grid}>
      <Box>
        <Text className={classes.textContentStyle} mb={20}>
          {textContent}
        </Text>
        <List className={classes.listContentStyle}>{listContentElements}</List>
      </Box>
      <CourseDescriptionCard
        mainImage={courseInfo.cardImage}
        color={courseInfo.color}
        title={courseInfo.title}
        elements={courseInfo.elements}
      />
    </Stack>
  );
}

export default PEAContentSection;
