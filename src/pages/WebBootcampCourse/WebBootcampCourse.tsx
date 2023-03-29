import { Image } from "@mantine/core";
import CoursePageTemplate from "../../templates/CoursePageTemplate";
import { ICoursePageTemplateProps } from "../../templates/CoursePageTemplate/CoursePageTemplate";
import ComputerHeroImageWeb from "./assets/ComputerHeroImageWeb.webp";

const data: ICoursePageTemplateProps = {
  accentColor: "cyan",
  hero: {
    title: "!Aprende a hacer tus ideas realidad!",
    rightSection: <Image src={ComputerHeroImageWeb} width="100%" p={0} m={0} />,
  },
};
function WebBootcampCourse() {
  return <CoursePageTemplate {...data} />;
}

export default WebBootcampCourse;
