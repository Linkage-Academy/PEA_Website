//Components
import HeroHeader from "../../components/HeroHeader";
import StackInfobox from "../../components/StackInfobox/StackInfobox";
import ValuesSection from "../../components/ValuesSection/ValuesSection";
import AboutUs from "../../components/AboutUs/AboutUs";

//Interfaces
import { IGroupInfoboxProps } from "../../components/GroupInfobox/GroupInfobox";
import { IStackInfoboxProps } from "../../components/StackInfobox/StackInfobox";
import { IValuesSectionprops } from "../../components/ValuesSection/ValuesSection";
import { IAboutUsprops } from "../../components/AboutUs/AboutUs";

//style
import useHomePageTemplateStyles from "./HomePageTemplate.styles";

//React
import {
    Box,
    Center,
    DefaultMantineColor,
    Group,
    SimpleGrid,
    Stack,
    Title,
    useMantineTheme,
  } from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";


export interface IHomePageTemplateProps{
    accentColor: DefaultMantineColor;
    hero:{
        title: string;
        rightSection: React.ReactNode;
    };
    infoFirst: IStackInfoboxProps;
    valuesInfo: IValuesSectionprops;
    aboutUsInfo: IAboutUsprops; 


}

function HomePageTemplate({
    accentColor,
    hero,
    infoFirst,
    valuesInfo,
    aboutUsInfo
}:IHomePageTemplateProps){
    const {classes} = useHomePageTemplateStyles();
    const theme = useMantineTheme();
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    const xPadding = isLargeScreen ? 128 : "xs";

    return(
        <Stack>
            <HeroHeader title={hero.title} color={accentColor} rightSection={hero.rightSection}/>
            <Box px={xPadding}>
                <StackInfobox {...infoFirst}/>
                <AboutUs {...aboutUsInfo}/>
                <ValuesSection {...valuesInfo}/>

            </Box>
            
        </Stack>
    )
}

export default HomePageTemplate;