import {Box, Image} from "@mantine/core";
import React from "react";
import {useTheme} from "@emotion/react";
import {useMediaQuery} from "@mantine/hooks";
import GroupBanner from "./components/GroupBanner/GroupBanner";
import npc from './static/npc.webp';
import Land3d from './static/minecraftLand3d.webp';
import HeroHeader from "../../components/HeroHeader";
import InformationSection from "./components/InformationSection";
import ModulesSection from "./components/ModulesSection";


const groupBannerTitle = ['Bienvenidos al Mundo de la Programación', 
                        'Gamificación'];
const groupBannerDescription= ['Nuestro curso de Introducción al Mundo de la Programación tiene como objetivo despertar el pensamiento crítico en los niños desde temprana edad. Se impartirán conceptos como variables, tipo de datos, bucles, sentencias condicionales, etc. Las lecciones serán complementadas con actividades prácticas de programación dentro de Minecraft.',
                              'La metodología de nuestro curso para niños es que los chicos aprendan mientras se divierten en su videojuego favorito, en este caso Minecraft. La gamificación presente alrededor de la curva de aprendizaje será la clave para desarrollar el pensamiento lógico del estudiante. ¡Anímate!'];
const stackBannerTitle = ['Aprende Jugando'];
const stackBannerDescription = ['Construye la ciudad de tus sueños mientras desarrollas tus habilidades como programador.'];
const themeMantineColor = ['teal', '7',];

function CursoInfantil() {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    const xPadding = isLargeScreen ? 128 : "xs";

    return <>
        <HeroHeader color={"teal"} title={"!Diviertete Aprendiendo con Minecraft!"}
                    rightSection={<Image src={Land3d}/>} barColorIndex={themeMantineColor[1]}/>
        <Box px={xPadding}>

            <InformationSection groupBannerTitle={groupBannerTitle[0]} groupBannerDescription={groupBannerDescription[0]} 
            stackBannerTitle={stackBannerTitle[0]} stackBannerDescription={stackBannerDescription[0]}/>
            
            <ModulesSection/>

            <GroupBanner
                img={npc}
                title={groupBannerTitle[1]}
                description={groupBannerDescription[1]}
                imgWidth={isLargeScreen ? 358.5 : 150}
                bottomSection={<Box/>}
            />
        </Box>
    </>

}

export default CursoInfantil;