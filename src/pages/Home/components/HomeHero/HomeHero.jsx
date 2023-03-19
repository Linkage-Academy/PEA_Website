import {Box, Button, Group, Image, Stack, Title} from '@mantine/core';
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import robot from './static/robot.svg'
import {useHomeHeroStyles} from "./HomeHero.styles";

function HomeHero() {

    const {classes} = useHomeHeroStyles()

    return (
        <Stack spacing={0} sx={{position: "relative"}}>
            <HeaderComponent/>
            <Group px={"sm"} noWrap spacing={0}>
                <Stack className={classes.mainHeroText}>
                    <Title sx={{whiteSpace: "nowrap", fontSize: "1.6rem", fontWeight: "500"}}>¡Aprende
                        a<br/> Construir el<br/>
                        Futuro!</Title>
                    <Button color={"red.8"}>¡Registrate Ahora!</Button>
                </Stack>

                <Box className={classes.mainHeroImage}>
                    <Image radius="md" src={robot} alt="Random image"/>
                </Box>
            </Group>

            <Box className={classes.rightSidebar}/>
        </Stack>
    )
}

export default HomeHero;