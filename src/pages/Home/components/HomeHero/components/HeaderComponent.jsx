import {Anchor, Box, Burger, Button, Drawer, Group, Header, Image, MediaQuery, Stack} from '@mantine/core';
import React from 'react';
import {useHomeHeroStyles} from '../HomeHero.styles';
import isotype from './static/logoLinkage.png'
import {Link} from "react-router-dom";
import {useDisclosure} from "@mantine/hooks";



function HeaderComponent() {
    const {classes} = useHomeHeroStyles();
    const [opened, {toggle, close}] = useDisclosure(false)

    return (
        <Header className={classes.header} pr={"xl"} height={"auto"}>

            <Image maw={185} src={isotype} alt="Academy Linkage Logo" className={classes.headerLogo}/>

            <Box py={"sm"}>
                <MediaQuery largerThan={"sm"} styles={{display: "none"}}>
                    {/* It does not show in  mobile view because its white */}
                    <Burger opened={opened} color={"white"} onClick={toggle}/>
                </MediaQuery>

                <Drawer opened={opened} onClose={close} zIndex={1000}>
                    <Stack>
                        <Anchor component={Link} to={"/"} color={"black"} className={classes.activeLink}>Inicio</Anchor>
                        <Anchor component={Link} to={"/"} color={"black"} underline={false}>Cursos</Anchor>
                        <Anchor component={Link} to={"/"} color={"black"} underline={false}>Aula Virtual</Anchor>
                    </Stack>
                </Drawer>

                <Group className={classes.desktopNavbar} spacing={"xl"}>
                    <Anchor component={Link} to={"/"} color={"white"} className={classes.activeLink}>Inicio</Anchor>
                    <Anchor component={Link} to={"/"} color={"white"} underline={false}>Cursos</Anchor>
                    <Anchor component={Link} to={"/"} color={"white"} underline={false}>Aula Virtual</Anchor>

                    <Button
                        className={classes.desktopNavbarCTA}
                        size={"sm"}
                        color={"red.6"}
                        variant={"white"}
                    >
                        Inscribete Ahora
                    </Button>

                </Group>
            </Box>

        </Header>
    )

}


export default HeaderComponent;