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
import CoursePageTemplate from "../../templates/CoursePageTemplate";
import { ICoursePageTemplateProps } from "../../templates/CoursePageTemplate/CoursePageTemplate";
import ComputerHeroImageWeb from "./assets/ComputerHeroImageWeb.webp";
import Css from "./assets/css.webp";
import Codigo from "./assets/Codigo.webp";
import Controller from "./assets/Controller.webp";

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
  courseCard: {
    mainImage: Codigo,
    title: "Bootcamp de desarrollo Web",
    color: "cyan",
    elements: [
      {
        label: "Nivel",
        description: "Principiante",
        icon: <IconChartArrowsVertical color="#0D8598" />,
      },
      {
        label: "Horas Semanales",
        description: "4 Horas",
        icon: <IconClockHour5 color="#0D8598" />,
      },
      {
        label: "Edad",
        description: "14+ años",
        icon: <IconUsers color="#0D8598" />,
      },
      {
        label: "Certificado",
        description: "Si",
        icon: <IconFileCertificate color="#0D8598" />,
      },
      {
        label: "Insignia Digital",
        description: "Si",
        icon: <IconRosette color="#0D8598" />,
      },
      {
        label: "Lecciones",
        description: "96 lecciones",
        icon: <IconSchool color="#0D8598" />,
      },
    ],
  },
  infoSecond: {
    title: "Aprende Jugando",
    bottomSection: <Image radius="md" src={Controller} />,
    description:
      "En nuestro curso, nos enfocamos en hacer que el aprendizaje de programación web sea divertido y efectivo a través de la gamificación. Cada lección está diseñada para desafiarte y motivarte a mejorar tus habilidades a través de desafíos y juegos interactivos. La gamificación también te permite medir tu progreso y competir con otros estudiantes en línea, lo que puede aumentar tu motivación y compromiso. ¡Aprender programación web nunca ha sido tan emocionante!",
  },
};

function WebBootcampCourse() {
  return <CoursePageTemplate {...data} />;
}

export default WebBootcampCourse;
