import {Box, Stack} from "@mantine/core";
import HomeHero from "./components/HomeHero/HomeHero";
import Categories from "./components/Categories/Categories";
import BannerMinecraft from "./components/BannerMinecraft/BannerMinecraft";
import HeaderComponent from "./components/HomeHero/components/HeaderComponent";
import React from "react";
import {useHomeHeroStyles} from "./components/HomeHero/HomeHero.styles";
import {useTheme} from "@emotion/react";
import {useMediaQuery} from "@mantine/hooks";


function Home() {
    const {classes} = useHomeHeroStyles()
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    const xPadding = isLargeScreen ? 128 : "xs"
    return (
        <>
            <Stack spacing={0} sx={{position: "relative"}}>

                <HeaderComponent/>
                <Box className={classes.rightSidebar}/>

                <Box pl={xPadding} pr={isLargeScreen ? xPadding / 2 : xPadding} my={"md"}>
                    <HomeHero/>
                </Box>
            </Stack>

            <Stack px={xPadding}>
                <Categories/>
                <BannerMinecraft/>
            </Stack>

        </>
    )
}

export default Home;