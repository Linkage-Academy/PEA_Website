import {Badge, Box, Center, createStyles, Group, Image} from "@mantine/core";
import React from "react";
import {useTheme} from "@emotion/react";
import {useMediaQuery} from "@mantine/hooks";
import GroupBanner from "../CursoInfantil/components/GroupBanner/GroupBanner";
import CourseDescriptionCard from "../CursoInfantil/components/CourseDescriptionCard/CourseDescriptionCard";
import StackBanner from "../CursoInfantil/components/StackBanner/StackBanner";
import {IconBrush, IconMath} from "@tabler/icons-react";
import HeroHeader from "../../components/HeroHeader";
import heroImg from './static/heroImgs.webp';
import css from "./static/css.webp";
import controller from "./static/controller.webp";
import Codigo from "./static/Codigo.webp";


const groupBannerTitle = '¿Por qué aprender programación web?';
const groupBannerDescription = 'Aprender programación web puede abrir un mundo de posibilidades. En nuestro curso, aprenderás a crear sitios y aplicaciones web interactivos y personalizados, desde cero. Te enseñaremos los lenguajes de programación necesarios para convertir tus ideas en realidad, y te guiaremos a través de proyectos prácticos que te ayudarán a desarrollar habilidades de resolución de problemas y lógica. Además, la programación web es una habilidad en demanda en la industria tecnológica, por lo que esta puede ser una carrera rentable y satisfactoria. ¡Únete a nuestro curso y comienza tu viaje en la programación web hoy mismo!';
const stackBannerTitle = 'Aprende Jugando';
const themeMantineColor = ['cyan', '7', 'cyan.7'];

const description = ['Principiante', '4 Horas', '14+ años', 'Si', 'Si', '96 Lecciones']
const cardElemtitle = ['Nivel', 'Horas Semanales', 'Edad', 'Certificado', 'Insignia Digital', 'Lecciones']
export const useInformationSectionStyles = createStyles(theme => ({

    grid: {
        display: "grid",
        gridTemplateAreas: `"why" "card" "playing"`,
        gridGap: "1rem 10rem",

        [theme.fn.largerThan("sm")]: {
            gridTemplateAreas: `
                "why  card" 
                "playing  card"
            `,
        }

    },
    gridWhy: {
        gridArea: "why",
    },
    gridCard: {
        gridArea: "card",
    },
    gridPlaying: {
        gridArea: "playing"
    }
}))

function CursoWeb() {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    const xPadding = isLargeScreen ? 128 : "xs";
    const {classes: gridClasses} = useInformationSectionStyles()

    const badges = (
        <Group noWrap spacing={"xs"} pt={"1rem"}>
            <Badge size={isLargeScreen ? "xl" : "lg"} variant={"filled"} color={"cyan.7"}
                   radius={"md"}
                   leftSection={<Center><IconBrush size={22}/></Center>}>Imaginación</Badge>
            <Badge size={isLargeScreen ? "xl" : "lg"} variant={"filled"} color={"cyan.7"}
                   radius={"md"}
                   leftSection={<Center><IconMath size={22}/></Center>}>Lógica</Badge>
        </Group>
    )

    return (
        <>
            <HeroHeader color={themeMantineColor[0]} title={"!Diviertete Aprendiendo con Minecraft!"}
                        rightSection={<Image src={heroImg}/>} barColorIndex={themeMantineColor[1]}/>
            <Box px={xPadding}>


                <Box className={gridClasses.grid}>

                    <Box className={gridClasses.gridWhy}>
                        <GroupBanner

                            img={css}
                            title={groupBannerTitle}
                            description={groupBannerDescription}
                            imgWidth={isLargeScreen ? 180 : 130}
                            imgOutsideTitle={true}
                            bottomSection={badges}
                        />
                    </Box>


                    <Center className={gridClasses.gridCard}>
                        <CourseDescriptionCard
                            className={gridClasses.gridCard}
                            mainImage={Codigo}
                            bkColor={"#0D98AD"}
                            btnColor={"cyan.7"}
                            description={description}
                            title={cardElemtitle}
                            cardTitle={"Bootcamp de desarrollo Web"}
                        />
                    </Center>

                    <Box className={gridClasses.gridPlaying}>
                        <StackBanner mainImage={controller} title={stackBannerTitle} description={"En nuestro curso, nos enfocamos en hacer que el aprendizaje de programación web sea divertido y efectivo a través de la gamificación. Cada lección está diseñada para desafiarte y motivarte a mejorar tus habilidades a través de desafíos y juegos interactivos. La gamificación también te permite medir tu progreso y competir con otros estudiantes en línea, lo que puede aumentar tu motivación y compromiso. ¡Aprender programación web nunca ha sido tan emocionante!"}/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default CursoWeb;