import {Badge, Center, Group, Image, Stack} from "@mantine/core";
import React from "react";
import {useTheme} from "@emotion/react";
import {useMediaQuery} from "@mantine/hooks";
import GroupBanner from "./components/GroupBanner/GroupBanner";
import character from './static/char3d.webp';
import CourseDescriptionCard from "./components/CourseDescriptionCard/CourseDescriptionCard";
import Mansion from './static/Mansion.webp';
import StackBanner from "./components/StackBanner/StackBanner";
import stackBannerImg from './static/avatar.webp';
import Modules from "../CursoInfantil/components/Modules/Modules";
import npc from './static/npc.webp';
import Land3d from './static/minecraftLand3d.webp';
import {IconBrush, IconMath} from "@tabler/icons-react";
import HeroHeader from "../../components/HeroHeader";


const groupBannerTitle = '¿Por qué aprender con Minecraft?';
const groupBannerDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin et enim  incidunt laoreet. Nunc auc tor eu ante in blandit. In interdum vel elit eu sollicitudin Ut pretium blandit tincidunt. Vestibulum congue est  felis, at tristique tellus rhoncus eu. Nunc placerat tellus ex.';
const stackBannerTitle = 'Aprende Jugando';
const themeMantineColor = ['teal', '7',];


function CursoInfantil() {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    const xPadding = isLargeScreen ? 128 : "xs";
    return (
        <>
            <HeroHeader color={"teal"} title={"!Diviertete Aprendiendo con Minecraft!"}
                        rightSection={<Image src={Land3d}/>} barColorIndex={themeMantineColor[1]}/>


            <Stack pt={18} px={xPadding}>
                <GroupBanner img={character} title={groupBannerTitle} description={groupBannerDescription}
                             imgWidth={120}/>
                <Group noWrap spacing={"xs"}>
                    <Badge size={"xl"} variant={"filled"} color={"teal.7"} radius={"md"}
                           leftSection={<Center><IconBrush size={22}/></Center>}>Imaginación</Badge>
                    <Badge size={"xl"} variant={"filled"} color={"teal.7"} radius={"md"}
                           leftSection={<Center><IconMath size={22}/></Center>}>Lógica</Badge>
                </Group>

                <CourseDescriptionCard mainImage={Mansion} bkColor={"#0CA678"} btnColor={"teal.7"}/>
                <StackBanner mainImage={stackBannerImg} title={stackBannerTitle}/>
                <Modules/>
                <GroupBanner
                    img={npc}
                    title={groupBannerTitle}
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin et enim  incidunt laoreet. Nunc auc tor eu ante in blandit. In interdum vel elit eu sollicitudin Ut pretium blandit tincidunt. Vestibulum congue est  felis, at tristique tellus rhoncus eu. '}
                    imgWidth={150}
                />
            </Stack>
        </>
    )
}

export default CursoInfantil;