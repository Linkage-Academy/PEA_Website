import StackInfobox from "../StackInfobox/StackInfobox";
import { IStackInfoboxProps } from "../StackInfobox/StackInfobox";
import { Box, Text, } from "@mantine/core";
import useAboutUsStyles from "./AboutUs.styles";

export interface IAboutUsprops{
    Vision:IStackInfoboxProps;
    Mission:IStackInfoboxProps;  
}

function AboutUs({
    Vision,
    Mission
}: IAboutUsprops){
    const {classes} = useAboutUsStyles();
    return(
        <Box className={classes.grid}>
            <StackInfobox {...Vision}/>
            <StackInfobox {...Mission}/>
        </Box>
    )


}

export default AboutUs;