import { Button, Stack, Group, Image, Box, Title } from '@mantine/core';
import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import robot from './static/robot.svg'
import { useHomeHeroStyles } from './HomeHero.styles';

function HomeHero(){

   const {classes} = useHomeHeroStyles();

    return(
        <>
            <HeaderComponent/>
            <Group px="sm" noWrap spacing={0}>
                <Stack sx={{width:"40%"}}>
                    <Title className={classes.heroFont} sx={{fontSize:'1.6rem'}}>¡Aprende a Construir el Futuro!</Title>
                    <Button className={[classes.heroButton, classes.heroFont]}>¡Registrate Ahora!</Button>
                </Stack>
                <Box sx={{flexGrow:1}}>
                    <Image radius="md" src={robot} alt="Random image"/>
                </Box>

            </Group>
        </>
    )
}
export default HomeHero;