import { useMantineTheme, Box, Button, Image } from "@mantine/core";
import React from "react";

// Assets
import { useMediaQuery } from "@mantine/hooks";
import Robot from "./assets/robot.webp";
import TechCenterImg from "./assets/TecnologyCenter.webp";
import TechCenterV2Img from "./assets/ProgrammerSet.webp";
import VRImg from "./assets/VrImg.webp";
import VR from "./assets/Vr.webp";
import MissionImg from "./assets/MissionImg.webp";
import AbUsImg from "./assets/AboutUsSectionImg.svg"
import building from "./assets/building1.png";
import building2 from "./assets/building2.png";

import HomePageTemplate, {
  IHomePageTemplateProps,
} from "../../templates/HomePageTemplate/HomePageTemplate";

function Home() {
  const theme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);

  const data: IHomePageTemplateProps = {
    accentColor: "red",
    hero: {
      title: "¡Aprende a Construir el Futuro!",
      rightSection: <Image src={building2} maw={350} />,
    },
    infoFirst: {
      title: "¿Qué es el Centro Tecnológico Avanzado?",
      description: `La empresa Academy.Linkage tiene como objetivo fundamental, dotar de herramientas necesarias para sobresalir en este nuevo mundo donde nos exigen un alto manejo de habilidades y conocimientos multidisciplinarios en respuestas a las tendencias actuales y tomas de decisiones.

      Por ello, hemos creado la unidad de negocio: El Centro Tecnológico Avanzado (CTA), que tiene como objetivo despertar el interés en la física, matemáticas, tecnología, programación y manejo de habilidades humanas, con la conciencia que existe una gran responsabilidad individual que es un superpoder para un cambio social.
      `,
      rightSection: <Image src={TechCenterV2Img} maw={350} />,
      bottomSection:<Box></Box>
    },
    valuesInfo: {
      title: "Nuestros Valores",

      infoFirst: {
        title: "First",
        description: "Description",
        bottomSection: <Image />,
      },
      infoSecond: {
        title: "Second",
        description: "Description",
        bottomSection: <Image />,
      },
      infoThird: {
        title: "Third",
        description: "Description",
        bottomSection: <Image />,
      },
      infoFourth: {
        title: "Fourth",
        description: "Description",
        bottomSection: <Image />,
      },
    },
    aboutUsInfo: {
      vision: {
        title: "Visión",
        description:
          "Liberar, materializar y rentabilizar las innovaciones de nuestros estudiantes.",
      },
      mission: {
        title: "Misión",
        description:
          "Generar una nueva propuesta en contenido virtual mediante metodologías activas, tecnológicas e innovaciones alineadas a las nuevas solicitudes de competencias profesionales y humanas.",
      },
      abUsImg:AbUsImg
    },
    techCenterInfo:{
      title:"¿Qué es el Programas de Estudios Avanzados?",
      description:`Somos un grupo de ingenieros civiles con especialidades en Administración de Empresas con Orientación en Operación Estratégica, Gerencia de Proyecto, Diseño Geométrico Vial y Marketing y Big Data.

      Con el avance de las tecnologías digitales detectamos la necesidad de desarrollar una plataforma digital con contenido enfocado en las áreas de Ingeniería Civil e Inversiones capaz de incrementar las competencias profesionales en temas donde la educación académica regional no se estuviese impartiendo de forma cotidiana y así prepararlos para un mercado laboral mucho más exigente.`,
      techImg:TechCenterV2Img,
    }
  };

  return <HomePageTemplate {...data} />;
}

export default Home;
