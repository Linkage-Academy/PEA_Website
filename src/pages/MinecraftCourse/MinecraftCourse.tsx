import { Image } from "@mantine/core";
import CoursePageTemplate from "../../templates/CoursePageTemplate";
import { ICoursePageTemplateProps } from "../../templates/CoursePageTemplate/CoursePageTemplate";
import PlantHeroImageMinecraft from "./assets/PlantHeroImageMinecraft.webp";

const data: ICoursePageTemplateProps = {
  accentColor: "teal",
  hero: {
    title: "!Diviertete Aprendiendo con Minecraft!",
    rightSection: <Image src={PlantHeroImageMinecraft} maw={350} />,
  },
};
function MinecraftCourse() {
  return <CoursePageTemplate {...data} />;
}

export default MinecraftCourse;
