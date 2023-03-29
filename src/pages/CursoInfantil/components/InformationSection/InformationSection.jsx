import {Badge, Box, Center, Group} from "@mantine/core";
import GroupBanner from "../GroupBanner/GroupBanner";
import character from "../../static/char3d.webp";
import {IconBrush, IconMath} from "@tabler/icons-react";
import CourseDescriptionCard from "../CourseDescriptionCard/CourseDescriptionCard";
import Mansion from "../../static/Mansion.webp";
import StackBanner from "../StackBanner/StackBanner";
import stackBannerImg from "../../static/avatar.webp";
import React from "react";
import {useInformationSectionStyles} from "./InformationSection.styles";
import {useTheme} from "@emotion/react";
import {useMediaQuery} from "@mantine/hooks";


const groupBannerTitle = '¿Por qué aprender con Minecraft?';
const groupBannerDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin et enim  incidunt laoreet. Nunc auc tor eu ante in blandit. In interdum vel elit eu sollicitudin Ut pretium blandit tincidunt. Vestibulum congue est  felis, at tristique tellus rhoncus eu. Nunc placerat tellus ex.';
const stackBannerTitle = 'Aprende Jugando';

const description = ['Principiante', '4 Horas', '8-14 años', 'Si', 'Si', '96 Lecciones']
const cardElemtitle = ['Nivel', 'Horas Semanales', 'Edad', 'Certificado', 'Insignia Digital', 'Lecciones']
function InformationSection(props) {
    const {groupBannerTitle, groupBannerDescription, stackBannerTitle, stackBannerDescription } = props;
    const {classes: gridClasses} = useInformationSectionStyles()
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);

    const badges = (
        <Group noWrap spacing={"xs"} pt={"1rem"}>
            <Badge size={isLargeScreen ? "xl" : "lg"} variant={"filled"} color={"teal.7"}
                   radius={"md"}
                   leftSection={<Center><IconBrush size={22}/></Center>}>Imaginación</Badge>
            <Badge size={isLargeScreen ? "xl" : "lg"} variant={"filled"} color={"teal.7"}
                   radius={"md"}
                   leftSection={<Center><IconMath size={22}/></Center>}>Lógica</Badge>
        </Group>
    )

    return (
        <Box className={gridClasses.grid}>
        
            <Box className={gridClasses.gridWhy}>
                <GroupBanner

                    img={character}
                    title={groupBannerTitle}
                    description={groupBannerDescription}
                    imgWidth={isLargeScreen ? 167 : 120} imgOutsideTitle={true}
                    bottomSection={badges}
                />
            </Box>


            <Center className={gridClasses.gridCard}>
                <CourseDescriptionCard
                    className={gridClasses.gridCard}
                    mainImage={Mansion}
                    bkColor={"#0CA678"}
                   btnColor={"teal.7"}
                    description={description}
                    title={cardElemtitle}
                    cardTitle={"Introduccion a la Programación para Minecraft for Education"}
                />
            </Center>

            <Box className={gridClasses.gridPlaying}>
                <StackBanner mainImage={stackBannerImg} title={stackBannerTitle} description={stackBannerDescription}/>
            </Box>
        </Box>
    )
}

export default InformationSection