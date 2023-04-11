// React
import {
    ActionIcon,
    Box,
    Card,
    DefaultMantineColor,
    Group,
    Image,
    SimpleGrid,
    Stack,
    Text,
    Title,
    useMantineTheme,
  } from "@mantine/core";

  import { useMediaQuery } from "@mantine/hooks";

  // Components
  import ColoredHeader from "../../components/ColoredHeader";
  import PEAContentSection from "../../components/PEAContentSection";
  import PEAHero from "../../components/PEAHero/PEAHero";

  //Interfaces

  import { IPEAContentSectiosProps } from "../../components/PEAContentSection/PEAContentSection";
  import { IPEAHeroProps } from "../../components/PEAHero/PEAHero";


export interface IPEACourseTemplateProps{
    accentColor:DefaultMantineColor;
    PEAContentInfo:IPEAContentSectiosProps;
    PEAHeroInfo:IPEAHeroProps;
}

function PEACourseTemplate({
    accentColor,
    PEAContentInfo,
    PEAHeroInfo
}:IPEACourseTemplateProps){
    const theme = useMantineTheme();
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    const xPadding = isLargeScreen ? 128 : "xs";
return(
    <Stack spacing={"xl"}>
        <ColoredHeader color={accentColor}/>
        <PEAHero {...PEAHeroInfo}/>

        <Stack px={xPadding} spacing="sm" pb={30}>
            <PEAContentSection {... PEAContentInfo}/>
        </Stack>
      

        

    </Stack>
)
}

export default PEACourseTemplate;
