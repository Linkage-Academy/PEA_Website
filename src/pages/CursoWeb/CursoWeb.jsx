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


const groupBannerTitle = '¿Por qué aprender con Minecraft?';
const groupBannerDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin et enim  incidunt laoreet. Nunc auc tor eu ante in blandit. In interdum vel elit eu sollicitudin Ut pretium blandit tincidunt. Vestibulum congue est  felis, at tristique tellus rhoncus eu. Nunc placerat tellus ex.';
const stackBannerTitle = 'Aprende Jugando';
const themeMantineColor = ['cyan', '7', 'cyan.7'];


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
                        />
                    </Center>

                    <Box className={gridClasses.gridPlaying}>
                        <StackBanner mainImage={controller} title={stackBannerTitle}/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default CursoWeb;