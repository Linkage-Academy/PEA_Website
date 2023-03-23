import {Box, Image} from "@mantine/core";
import React from "react";
import {useTheme} from "@emotion/react";
import {useMediaQuery} from "@mantine/hooks";
import GroupBanner from "./components/GroupBanner/GroupBanner";
import Modules from "../CursoInfantil/components/Modules/Modules";
import npc from './static/npc.webp';
import Land3d from './static/minecraftLand3d.webp';
import HeroHeader from "../../components/HeroHeader";
import InformationSection from "./components/InformationSection";


const groupBannerTitle = '¿Por qué aprender con Minecraft?';
const groupBannerDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin et enim  incidunt laoreet. Nunc auc tor eu ante in blandit. In interdum vel elit eu sollicitudin Ut pretium blandit tincidunt. Vestibulum congue est  felis, at tristique tellus rhoncus eu. Nunc placerat tellus ex.';
const stackBannerTitle = 'Aprende Jugando';
const themeMantineColor = ['teal', '7',];

function CursoInfantil() {

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    const xPadding = isLargeScreen ? 128 : "xs";

    return (
        <Box px={xPadding}>
            <HeroHeader color={"teal"} title={"!Diviertete Aprendiendo con Minecraft!"}
                        rightSection={<Image src={Land3d}/>} barColorIndex={themeMantineColor[1]}/>
            <InformationSection/>
            <Modules/>
            <GroupBanner
                img={npc}
                title={groupBannerTitle}
                description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin et enim  incidunt laoreet. Nunc auc tor eu ante in blandit. In interdum vel elit eu sollicitudin Ut pretium blandit tincidunt. Vestibulum congue est  felis, at tristique tellus rhoncus eu. '}
                imgWidth={isLargeScreen ? 358.5 : 150}
                bottomSection={<Box/>}
            />
        </Box>
    )
}

export default CursoInfantil;