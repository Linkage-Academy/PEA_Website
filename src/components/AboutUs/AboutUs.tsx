import StackInfobox from "../StackInfobox/StackInfobox";
import { IStackInfoboxProps } from "../StackInfobox/StackInfobox";
import { Box, Text, } from "@mantine/core";
import useAboutUsStyles from "./AboutUs.styles";

export interface IAboutUsprops{
    vision:IStackInfoboxProps;
    mission:IStackInfoboxProps;  
}

function AboutUs({
    vision,
    mission
}: IAboutUsprops){
    const {classes} = useAboutUsStyles();
    return(
        <Box className={classes.grid}>
            <StackInfobox {...vision}/>
            <StackInfobox {...mission}/>
        </Box>
    )


}

export default AboutUs;