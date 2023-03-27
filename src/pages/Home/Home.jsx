import {Image, Stack, Modal} from "@mantine/core";
import Categories from "./components/Categories/Categories";
import BannerMinecraft from "./components/BannerMinecraft/BannerMinecraft";
import BannerDesktopMinecraft from "./components/BannerMinecraft/BannerDesktopMinecraft";
import React from "react";
import {useHomeHeroStyles} from "./components/HomeHero/HomeHero.styles";
import {useTheme} from "@emotion/react";
import {useMediaQuery} from "@mantine/hooks";
import BannerCourses from "./components/BannerCourses/BannerCourses";
import HeroHeader from "../../components/HeroHeader";
import robotDesktop from './components/HomeHero/static/robot_banner.webp';
import robot from './components/HomeHero/static/robot.webp';



function Home() {
    const btnLink = ['https://cta.linkageacademy.com/cursoprogramacioninfantil', 'https://cta.linkageacademy.com/cursoweb'];
    const {classes} = useHomeHeroStyles();
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    const xPadding = isLargeScreen ? 128 : "xs"
    return (
        <>
            <HeroHeader color={"red"} title={"¡Aprende a Construir el Futuro!"} barColorIndex={7}
                        rightSection={<Image src={isLargeScreen ? robotDesktop : robot}/>}/>

            <Stack px={xPadding}>
                <Categories btnLink1={btnLink[0]} btnLink2={btnLink[1]}/>
                {isLargeScreen ?
                    <BannerDesktopMinecraft />
                    :
                    <BannerMinecraft/>
                }

                <BannerCourses/>
            </Stack>
        </>
    )
}

export default Home;