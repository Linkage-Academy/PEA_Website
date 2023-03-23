import {Badge, Box, Center, Group, Stack} from "@mantine/core";
import React from "react";
import {useTheme} from "@emotion/react";
import {useMediaQuery} from "@mantine/hooks";
import HeaderComponent from '../Home/components/HomeHero/components/HeaderComponent';
import HomeHero from '../Home/components/HomeHero/HomeHero';
import {useCursoInfantilStyles} from "./CursoInfantil.styles";
import GroupBanner from "./components/GroupBanner/GroupBanner";
import character from './static/char3d.webp';
import CourseDescriptionCard from "./components/CourseDescriptionCard/CourseDescriptionCard";
import Mansion from './static/Mansion.webp';
import StackBanner from "./components/StackBanner/StackBanner";
import stackBannerImg from './static/avatar.webp';
import Modules from "./components/Modules/Modules";
import npc from './static/npc.webp';
import minecraftLand3d from './static/minecraftLand3d.webp';
import {IconBrush, IconMath} from "@tabler/icons-react";


const groupBannerTitle = '¿Por qué aprender con Minecraft?';
const groupBannerDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin et enim  incidunt laoreet. Nunc auc tor eu ante in blandit. In interdum vel elit eu sollicitudin Ut pretium blandit tincidunt. Vestibulum congue est  felis, at tristique tellus rhoncus eu. Nunc placerat tellus ex.';
const stackBannerTitle = 'Aprende Jugando';


function CursoInfantil() {
    const {classes} = useCursoInfantilStyles();
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    const xPadding = isLargeScreen ? 128 : "xs";
    return (
        <>
            <Stack spacing={0} sx={{position: "relative"}}>
                <HeaderComponent backColor='teal'/>
                <Box className={classes.rightSidebar}/>

                <Box pl={xPadding} pr={isLargeScreen ? xPadding / 2 : xPadding} my={"md"}>
                    <HomeHero color={"teal"} title={"!Diviertete Aprendiendo con Minecraft!"} image={minecraftLand3d}/>
                </Box>
            </Stack>
            <Stack pt={18} px={xPadding}>
                <GroupBanner img={character} title={groupBannerTitle} description={groupBannerDescription}/>
                <Group noWrap spacing={"xs"}>
                    <Badge size={"xl"} variant={"filled"} color={"teal.7"} radius={"md"}
                           leftSection={<Center><IconBrush size={22}/></Center>}>Imaginación</Badge>
                    <Badge size={"xl"} variant={"filled"} color={"teal.7"} radius={"md"}
                           leftSection={<Center><IconMath size={22}/></Center>}>Lógica</Badge>
                </Group>

                <CourseDescriptionCard mainImage={Mansion}/>

                <StackBanner mainImage={stackBannerImg} title={stackBannerTitle}/>
                <Modules/>
                <GroupBanner img={npc} title={groupBannerTitle} description={groupBannerDescription}></GroupBanner>
            </Stack>
        </>
    )
}

export default CursoInfantil;