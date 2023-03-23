import {Box, Stack} from "@mantine/core";
import React from "react";
import {useTheme} from "@emotion/react";
import {useMediaQuery} from "@mantine/hooks";
import ColoredHeader from "../ColoredHeader";
import Hero from "../Hero";
import {useHeroHeaderStyles} from "./HeroHeader.styles";

function HeroHeader({color, title, rightSection, barColorIndex}) {
    const {classes} = useHeroHeaderStyles({color, barColorIndex});
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    const xPadding = isLargeScreen ? 128 : "xs";

    return (
        <Stack spacing={0} sx={{position: "relative"}}>
            <ColoredHeader color={color}/>
            <Box className={classes.rightSidebar}/>

            <Box pl={xPadding} pr={isLargeScreen ? xPadding / 2 : xPadding} my={"md"}>
                <Hero
                    color={color}
                    title={title}
                    rightSection={rightSection}
                />
            </Box>
        </Stack>
    )
}

export default HeroHeader