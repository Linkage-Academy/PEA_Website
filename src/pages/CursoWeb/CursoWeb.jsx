import {Badge, Box, Center, Group, Stack, Image} from "@mantine/core";
import React from "react";
import {useTheme} from "@emotion/react";
import {useMediaQuery} from "@mantine/hooks";
import HeaderComponent from '../Home/components/HomeHero/components/HeaderComponent';
import HomeHero from '../Home/components/HomeHero/HomeHero';
import GroupBanner from "../CursoInfantil/components/GroupBanner/GroupBanner";
import character from '../CursoInfantil/static/char3d.webp';
import CourseDescriptionCard from "../CursoInfantil/components/CourseDescriptionCard/CourseDescriptionCard";
import Mansion from '../CursoInfantil/static/Mansion.webp';
import StackBanner from "../CursoInfantil/components/StackBanner/StackBanner";
import stackBannerImg from '../CursoInfantil/static/avatar.webp';
import npc from '../CursoInfantil/static/npc.webp';
import {IconBrush, IconMath} from "@tabler/icons-react";
import HeroHeader from "../../components/HeroHeader";
import heroImg from './static/heroImgs.webp';
import cssImg from './static/css.webp';
import codeImg from './static/Codigo.webp';
import controller from './static/controller.webp';

import Modules from "../CursoInfantil/components/Modules/Modules";


const groupBannerTitle = '¿Por qué aprender con Minecraft?';
const groupBannerDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin et enim  incidunt laoreet. Nunc auc tor eu ante in blandit. In interdum vel elit eu sollicitudin Ut pretium blandit tincidunt. Vestibulum congue est  felis, at tristique tellus rhoncus eu. Nunc placerat tellus ex.';
const stackBannerTitle = 'Aprende Jugando';
const themeMantineColor = ['cyan', '7', 'cyan.7'];


function CursoWeb() {
   
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    const xPadding = isLargeScreen ? 128 : "xs";
    return (
        <>
        {/*
            <Stack spacing={0} sx={{position: "relative"}}>
                <HeaderComponent backColor='teal'/>
                <Box className={classes.rightSidebar}/>

                <Box pl={xPadding} pr={isLargeScreen ? xPadding / 2 : xPadding} my={"md"}>
                    <HomeHero color={"teal"} title={"!Diviertete Aprendiendo con Minecraft!"}/>
                </Box>
            </Stack>

          */  }
            <HeroHeader color={themeMantineColor[0]} title={"!Diviertete Aprendiendo con Minecraft!"}
                        rightSection={<Image src={heroImg}/>} barColorIndex={themeMantineColor[1]}/>

            <Stack pt={18} px={xPadding}>
                <GroupBanner img={cssImg} title={groupBannerTitle} description={groupBannerDescription}/>
                <Group noWrap spacing={"xs"}>
                    <Badge size={"xl"} variant={"filled"} color={themeMantineColor[0]} radius={"md"}
                           leftSection={<Center><IconBrush size={22}/></Center>}>Imaginación</Badge>
                    <Badge size={"xl"} variant={"filled"} color={themeMantineColor[0]} radius={"md"}
                           leftSection={<Center><IconMath size={22}/></Center>}>Lógica</Badge>
                </Group>

                <CourseDescriptionCard mainImage={codeImg} bkColor={'#1098AD'} btnColor={themeMantineColor[0]}/>

                <StackBanner mainImage={controller} title={stackBannerTitle}/>
                <Modules/>
                <GroupBanner img={npc} title={groupBannerTitle} description={groupBannerDescription}></GroupBanner>
            </Stack>
        </>
    )
}

export default CursoWeb;