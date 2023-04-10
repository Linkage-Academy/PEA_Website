import { Box, Button, Image } from "@mantine/core";
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
import Players from "./assets/Players.webp";
import Infantil from "./assets/Infantil.webp";
import Trans from "./assets/Trans.webp";
import Python from "./assets/Python.webp";
import Arduino from "./assets/Arduino.webp";
import Npc from "./assets/Npc.webp";

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
  infoSecond: {
    title: "Aprende Jugando",
    bottomSection: <Image radius="md" src={Players} />,
    description:
      "Construye la ciudad de tus sueños mientras desarrollas tus habilidades como programador.",
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
  modules: [
    {
      title: "Programación Mediante Bloques",
      img: Infantil,
      description: "Módulo 1, 28 Horas de enseñanza",
      hasButton: false,
    },
    {
      title: "Transición a Código",
      img: Trans,
      description: "Módulo 2, 16 Horas de enseñanza",
      hasButton: false,
    },
    {
      title: "Python",
      img: Python,
      description: "Módulo 3, 32 Horas de enseñanza",
      hasButton: false,
    },
    {
      title: "Introducción a Arduino",
      img: Arduino,
      description: "Módulo 4, 16 Horas de enseñanza",
      hasButton: false,
    },
  ],
  infoThird: {
    title: "Conviértete en un experto",
    bottomSection: (
      <Button color="teal" mt="1rem" size="sm" fullWidth>
        ¡Compra el curso ahora!
      </Button>
    ),
    description:
      "La metodología de nuestro curso para niños es que los chicos aprendan mientras se divierten en su videojuego favorito, en este caso Minecraft. La gamificación presente alrededor de la curva de aprendizaje será la clave para desarrollar el pensamiento lógico del estudiante. ¡Anímate!",
    rightSection: <Image src={Npc} width={200} />,
  },
};

function MinecraftCourse() {
  return <CoursePageTemplate {...data} />;
}

export default MinecraftCourse;
