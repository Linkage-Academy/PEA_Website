import {Box, Group, Stack, Text} from "@mantine/core";
import React from "react";
import {useTheme} from "@emotion/react";
import {useMediaQuery} from "@mantine/hooks";
import HeaderComponent from '../Home/components/HomeHero/components/HeaderComponent';
import HomeHero from '../Home/components/HomeHero/HomeHero';
import { useCursoInfantilStyles } from "./CursoInfantil.styles";
import GroupBanner from "./components/GroupBanner/GroupBanner";
import character from './static/char3d.webp';
import BannerCard from "./components/GroupBanner/components/BannerCard";
import brushIcon from './components/GroupBanner/static/brush.svg';
import bulbIcon from './components/GroupBanner/static/brush.svg';
import mathIcon from './components/GroupBanner/static/brush.svg';
import CourseDescriptionCard from "./components/CourseDescriptionCard/CourseDescriptionCard";
import Mansion from './static/Mansion.webp';
import StackBanner from "./components/StackBanner/StackBanner";
import stackBannerImg from './static/avatar.webp';
import Modules from "./components/Modules/Modules";
import npc from './static/npc.webp';


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
                    <HomeHero/>
                </Box>
            </Stack>
            <Stack pt={'md'} px={xPadding}>
                <GroupBanner img={character} title={groupBannerTitle} description={groupBannerDescription}/>
                <Group noWrap>
                    <BannerCard icon={brushIcon}/>
                    <BannerCard icon={brushIcon}/>
                </Group>
                <CourseDescriptionCard mainImage={Mansion} />
                <StackBanner mainImage={stackBannerImg} title={stackBannerTitle}/>
                <Modules/>
                <GroupBanner img={npc} title={groupBannerTitle} description={groupBannerDescription}></GroupBanner>
            </Stack>
        </>
    )
}

export default CursoInfantil;