import { Box, Image } from "@mantine/core";
import SkinWithLantern from "./assets/SkinWithLantern.webp";
import CoursePageTemplate from "../../templates/CoursePageTemplate";
import { ICoursePageTemplateProps } from "../../templates/CoursePageTemplate/CoursePageTemplate";
import PlantHeroImageMinecraft from "./assets/PlantHeroImageMinecraft.webp";

const data: ICoursePageTemplateProps = {
  accentColor: "teal",
  hero: {
    title: "!Diviertete Aprendiendo con Minecraft!",
    rightSection: <Image src={PlantHeroImageMinecraft} maw={350} />,
  },
  infoFirst: {
    title: "Bienvenidos al Mundo de la Programación",
    description:
      "Nuestro curso de Introducción al Mundo de la Programación tiene como objetivo despertar el pensamiento crítico en los niños desde temprana edad. Se impartirán conceptos como variables, tipo de datos, bucles, sentencias condicionales, etc. Las lecciones serán complementadas con actividades prácticas de programación dentro de Minecraft.",
    rightSection: <Image src={SkinWithLantern} height={200} />,
    bottomSection: <Box />,
  },
};

function MinecraftCourse() {
  return <CoursePageTemplate {...data} />;
}

export default MinecraftCourse;
