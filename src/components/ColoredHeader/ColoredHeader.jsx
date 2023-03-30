import {useDisclosure} from "@mantine/hooks";
import {
    Anchor,
    Box,
    Burger,
    Button,
    Drawer,
    Group,
    Header as MantineHeader,
    Image,
    MediaQuery,
    Stack
} from "@mantine/core";
import isotype from "../../pages/Home/components/HomeHero/components/static/logoLinkage.png";
import {Link, useLocation} from "react-router-dom";
import React from "react";
import {useColoredHeaderStyles} from "./ColoredHeader.styles";
import ModalComponent from "../ModalComponent";


const routes = [
    {
        path: "/",
        navName: "Home"
    },
    {
        path: "/cursoprogramacioninfantil",
        navName: "Curso Minecaft"
    },
    {
        path: "/cursoweb",
        navName: "Curso Web"

    }
]

function ColoredHeader({color}) {
    const {classes, cx} = useColoredHeaderStyles({color: color});
    const [opened, {toggle, close}] = useDisclosure(false);
    const [isOpened, {open: openIt, close: closeIt}] = useDisclosure(false);

    const location = useLocation();

    const links = routes.map((route) => {
        const isCurrentLocation = location.pathname === route.path;
        const anchorClass = cx(classes.headerLink, {[classes.activeLink]: isCurrentLocation})
        return (
            <Anchor
                key={route.navName}
                component={Link}
                to={route.path || ""}
                className={anchorClass}
                underline={isCurrentLocation}
            >
                {route.navName}
            </Anchor>
        );
    });

    return (
        <MantineHeader className={classes.header} pr={"xl"} height={"auto"}>

            <ModalComponent opened={isOpened} open={openIt} close={closeIt}/>

            <Image maw={185} src={isotype} alt="Academy Linkage Logo" className={classes.headerLogo}/>

            <Box py={"sm"}>
                <MediaQuery largerThan={"sm"} styles={{display: "none"}}>
                    <Burger opened={opened} color={"white"} onClick={toggle}/>
                </MediaQuery>

                <Drawer opened={opened} onClose={close} zIndex={1000}>
                    <Stack>
                        {links}
                        <Anchor href={"https://academy.linkageacademy.com/login"} color={"black"}
                                underline={false}>Aula Virtual</Anchor>
                    </Stack>
                </Drawer>

                <Group className={classes.desktopNavbar} spacing={"xl"}>
                    {links}
                    <Anchor href={"https://academy.linkageacademy.com/login"} color={"white"}
                            underline={false}>Aula Virtual</Anchor>

                    <Button
                        className={classes.desktopNavbarCTA}
                        size={"sm"}
                        color={`${color}.6`}
                        variant={"white"}
                        onClick={() => openIt()}
                    >
                        Inscribete Ahora
                    </Button>

                </Group>
            </Box>

        </MantineHeader>
    )
}

export default ColoredHeader