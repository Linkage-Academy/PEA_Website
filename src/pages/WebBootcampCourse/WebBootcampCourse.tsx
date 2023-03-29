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
    mainImage: "",
    title: "Helo",
    color: "cyan",
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

function WebBootcampCourse() {
  return <CoursePageTemplate {...data} />;
}

export default WebBootcampCourse;
