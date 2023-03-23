import {Box, Stack, Text, Group, Title, Image} from "@mantine/core";
import React from "react";
import {useTheme} from "@emotion/react";
import {useMediaQuery} from "@mantine/hooks";
import { useGroupBannerStyles } from "./GroupBanner.styles";




function GroupBanner(props) {
    const {img, title, description} = props;
    const {classes} = useGroupBannerStyles();
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    const xPadding = isLargeScreen ? 128 : "xs";
    return (
        <Stack>
            <Title className={classes.titleStyle}>{title}</Title>
            <Group noWrap sx={{justifyContent: "flex-start"}} align="start"> 
                <Text w={'100%'}>{description}</Text>
                <Image sx={{flexGrow:'1'}} radius="md" src={img} alt="Random image"/>
            </Group>
        </Stack>
 
      
    )
}

export default GroupBanner;