import {useMantineTheme, Box, Button, Image } from "@mantine/core";
import React from "react";

//Assets
import Robot from "./assets/robot.webp";
import TechCenterImg from "./assets/TecnologyCenter.webp";
import TechCenterV2Img from "./assets/ProgrammerSet.webp"
import VRImg from "./assets/VrImg.webp";
import VR from "./assets/Vr.webp"
import MissionImg from "./assets/MissionImg.webp";

import {useMediaQuery} from "@mantine/hooks";
import HomePageTemplate from "../../templates/HomePageTemplate/HomePageTemplate";
import { IHomePageTemplateProps } from "../../templates/HomePageTemplate/HomePageTemplate";

function Home() {
  const theme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);

  const data : IHomePageTemplateProps = {
    accentColor:"red",
    hero:{
      title:"¡Aprende a Construir el Futuro!",
      rightSection: <Image src={Robot} maw={350}/>
    },
    infoFirst:{
      title:"¿Qué es el Programa de Estudios Avanzados",
      description:`La empresa Academy.Linkage tiene como objetivo fundamental, dotar de herramientas necesarias para sobresalir en este nuevo mundo donde nos exigen un alto manejo de habilidades y conocimientos multidisciplinarios en respuestas a las tendencias actuales y tomas de decisiones.

      Por ello, hemos creado la unidad de negocio: El Centro Tecnológico Avanzado (CTA), que tiene como objetivo despertar el interés en la física, matemáticas, tecnología, programación y manejo de habilidades humanas, con la conciencia que existe una gran responsabilidad individual que es un superpoder para un cambio social.
      `,
      bottomSection:<Image src={TechCenterV2Img} maw={350}/>,
    },
    valuesInfo:{
      title:"Nuestros Valores",

      infoFirst:{
        title:"First",
        description:"Description",
        bottomSection:<Image/>
      },
      infoSecond:{
        title:"Second",
        description:"Description",
        bottomSection:<Image/>
      },
      infoThird:{ 
        title:"Third",
        description:"Description",
        bottomSection:<Image/>
      },
      infoFourth:{
        title:"Fourth",
        description:"Description",
        bottomSection:<Image/>
      },
    },
    aboutUsInfo:{
      vision:{
        title:"Visión",
        description:"Aplicar nuevos sistemas pedagógicos que maximicen las competencias tecnológicas de los estudiantes en cada etapa de su desarrollo cognitivo.",
        bottomSection:<Image src={VR} maw={350}/>
      },
      mission:{
        title:"Misión",
        description:"Implementar proyectos tecnológicos mediante la incidencia en la reestructuración del sistema educativo regional.",
        bottomSection:<Image src={MissionImg} maw={350}/>
      },
    }

  }

  return (
    <>
   {/* <HeroHeader title={"Minecraft"} color={"red"} rightSection={"hello"}/>*/}
      <HomePageTemplate {...data}/>
    </>
  );
}

export default Home;
