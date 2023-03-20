import {Button, Card, Group, Image, Stack, Title} from '@mantine/core';
import React from 'react';
import {useHomeHeroStyles} from "./HomeHero.styles";
import {useMediaQuery} from "@mantine/hooks";
import {useTheme} from "@emotion/react";

function HomeHero() {

    const {classes} = useHomeHeroStyles()
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);

    return (
        <Stack spacing={"xl"}>
            <Group noWrap>
                <Stack className={classes.mainHero}>
                    <Title className={classes.mainTitle}>¡Aprende a Construir el Futuro!</Title>
                    <Group spacing={"xs"}>
                        <Button color={"red.8"} size={isLargeScreen ? "lg" : "sm"} fullWidth={!isLargeScreen}
                                radius={"md"}>¡Registrate Ahora!</Button>
                        {isLargeScreen ?
                            <Button color={"red.8"} variant={"outline"} size={"lg"} radius={"md"}>¡Mirar todos los
                                Cursos!</Button> : null}

                    </Group>
                </Stack>

                <Group sx={{border: "1px solid red", flexGrow: 1}} p={"xl"} spacing={0} noWrap>
                    <Image withPlaceholder h={250} w={200}/>

                    <Card shadow={"md"} withBorder h={300} ml={0} sx={{flexGrow: 1}}>
                        Hello
                    </Card>
                </Group>
            </Group>

        </Stack>
    )
}

export default HomeHero;