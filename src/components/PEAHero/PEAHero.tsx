import {
    Box,
    BackgroundImage,
    Center,
    Title
  } from "@mantine/core";

  import usePEAHeroStyles from "./PEAHero.styles";

export interface IPEAHeroProps{
    heroImg:string;
    title:string
}


function PEAHero({
    heroImg,
    title
}:IPEAHeroProps){
    const {classes} = usePEAHeroStyles();
    return(
        <Box className={classes.containerLayout} >
            
            <BackgroundImage src={heroImg} className={classes.containerLayout}>
                <Center>
                    <Title className={classes.titleStyle}>{title}</Title>
                </Center>
            </BackgroundImage>
        </Box>
    )
}

export default PEAHero;