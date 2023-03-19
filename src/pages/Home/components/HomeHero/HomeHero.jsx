import {Box, Button, Group, Image, Stack, Title} from '@mantine/core';
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import robot from './static/robot.svg'

function HomeHero() {
    
    return (
        <>
            <HeaderComponent/>
            <Group px={"sm"} noWrap spacing={0}>
                <Stack sx={{maxWidth: "48%"}}>
                    <Title fz={"1.6rem"}>¡Aprende a Construir el Futuro!</Title>
                    <Button color={"red.8"}>¡Registrate Ahora!</Button>
                </Stack>
                <Box sx={{flexGrow: 1, minWidth: "52%"}}>
                    <Image radius="md" src={robot} alt="Random image"/>
                </Box>

            </Group>
        </>
    )
}

export default HomeHero;