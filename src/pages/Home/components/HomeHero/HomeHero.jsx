import {Button, Group, Image, Stack, Title} from '@mantine/core';
import React from 'react';
import {useHomeHeroStyles} from "./HomeHero.styles";
import {useMediaQuery} from "@mantine/hooks";
import {useTheme} from "@emotion/react";
import robotDesktop from './static/robot_banner.webp';
import robot from './static/robot.webp';

function HomeHero({title, image, color}) {

    const {classes} = useHomeHeroStyles()
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);

    return (
        <Stack spacing={'sm'}>
            <Group noWrap>
                <Stack className={classes.mainHero}>
                    <Title className={classes.mainTitle}>{title ? title : "¡Aprende a Construir el Futuro!"}</Title>
                    <Group spacing={"xs"} noWrap>
                        <Button color={color ? `${color}.8` : "red.8"} size={isLargeScreen ? "lg" : "sm"}
                                fullWidth={!isLargeScreen}
                                radius={"md"}>¡Registrate Ahora!</Button>
                        {isLargeScreen ?
                            <Button color={color ? `${color}.8` : "red.8"} variant={"outline"} size={"lg"}
                                    radius={"md"}>¡Mirar todos los
                                Cursos!</Button> : null}

                    </Group>
                </Stack>

                <Group p={"xl"} spacing={0} noWrap>
                    {image ? <Image src={image}/> :
                        <Image src={isLargeScreen ? robotDesktop : robot}/>}

                </Group>
            </Group>

        </Stack>
    )
}

export default HomeHero;