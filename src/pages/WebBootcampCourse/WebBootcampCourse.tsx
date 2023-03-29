import { Box, Image } from "@mantine/core";
import CoursePageTemplate from "../../templates/CoursePageTemplate";
import { ICoursePageTemplateProps } from "../../templates/CoursePageTemplate/CoursePageTemplate";
import ComputerHeroImageWeb from "./assets/ComputerHeroImageWeb.webp";
import Css from "./assets/css.webp";

const data: ICoursePageTemplateProps = {
  accentColor: "cyan",
  hero: {
    title: "!Aprende a hacer tus ideas realidad!",
    rightSection: <Image src={ComputerHeroImageWeb} width="100%" p={0} m={0} />,
  },
  infoFirst: {
    title: "¿Por qué aprender programación web?",
    description:
      "Aprende a crear sitios y aplicaciones web interactivos desde cero con nuestro curso de programación web. Desarrolla habilidades en lógica y resolución de problemas, y prepárate para una carrera rentable en la industria tecnológica. Únete a nuestro curso y comienza tu viaje en la programación hoy mismo.",
    rightSection: <Image src={Css} width={180} />,
    bottomSection: <Box />,
  },
};

function WebBootcampCourse() {
  return <CoursePageTemplate {...data} />;
}

export default WebBootcampCourse;
