import { DefaultMantineColor } from "@mantine/core";
import React from "react";
import HeroHeader from "../../components/HeroHeader";

export interface ICoursePageTemplateProps {
  accentColor: DefaultMantineColor;
  hero: {
    title: string;
    rightSection: React.ReactNode;
  };
}
function CoursePageTemplate({ accentColor, hero }: ICoursePageTemplateProps) {
  return (
    <HeroHeader
      title={hero.title}
      color={accentColor}
      rightSection={hero.rightSection}
    />
  );
}

export default CoursePageTemplate;
