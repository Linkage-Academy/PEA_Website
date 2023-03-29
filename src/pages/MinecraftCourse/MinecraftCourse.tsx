import { Box, Image } from "@mantine/core";
import {
  IconChartArrowsVertical,
  IconClockHour5,
  IconFileCertificate,
  IconRosette,
  IconSchool,
  IconUsers,
} from "@tabler/icons-react";
import React from "react";
import SkinWithLantern from "./assets/SkinWithLantern.webp";
import CoursePageTemplate from "../../templates/CoursePageTemplate";
import { ICoursePageTemplateProps } from "../../templates/CoursePageTemplate/CoursePageTemplate";
import PlantHeroImageMinecraft from "./assets/PlantHeroImageMinecraft.webp";
import Mansion from "./assets/Mansion.webp";

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
  courseCard: {
    mainImage: Mansion,
    title: "Introduccion a la Programación para Minecraft for Education",
    color: "teal",
    elements: [
      {
        label: "Nivel",
        description: "Principiante",
        icon: <IconChartArrowsVertical color="#0CA678" />,
      },
      {
        label: "Horas Semanales",
        description: "4 Horas",
        icon: <IconClockHour5 color="#0CA678" />,
      },
      {
        label: "Edad",
        description: "8 - 12 años",
        icon: <IconUsers color="#0CA678" />,
      },
      {
        label: "Certificado",
        description: "Si",
        icon: <IconFileCertificate color="#0CA678" />,
      },
      {
        label: "Insignia Digital",
        description: "Si",
        icon: <IconRosette color="#0CA678" />,
      },
      {
        label: "Lecciones",
        description: "96 lecciones",
        icon: <IconSchool color="#0CA678" />,
      },
    ],
  },
};

function MinecraftCourse() {
  return <CoursePageTemplate {...data} />;
}

export default MinecraftCourse;
