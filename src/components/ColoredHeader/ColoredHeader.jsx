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
    Stack,
    Modal,
    TextInput,
    Select
} from "@mantine/core";
import isotype from "../../pages/Home/components/HomeHero/components/static/logoLinkage.png";
import {Link} from "react-router-dom";
import React from "react";
import {useColoredHeaderStyles} from "./ColoredHeader.styles";
import ModalComponent from "../ModalComponent";

function ColoredHeader({color}) {
    const {classes} = useColoredHeaderStyles({color: color});
    const [opened, {toggle, close}] = useDisclosure(false);
    const [isOpened, {open:openIt, close:closeIt}] = useDisclosure(false);
    console.log(isOpened);


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
                        <Anchor component={Link} to={"/"} color={"black"} className={classes.activeLink}>Inicio</Anchor>
                        <Anchor component={Link} to={"/cursoprogramacioninfantil"} color={"black"} underline={false}>Curso
                            Minecraft</Anchor>
                        <Anchor component={Link} to={"/cursoweb"} color={"black"} underline={false}>Cursos Web</Anchor>
                        <Anchor href={"https://academy.linkageacademy.com/login"} color={"black"}
                                underline={false}>Aula Virtual</Anchor>
                    </Stack>
                </Drawer>

                <Group className={classes.desktopNavbar} spacing={"xl"}>
                    <Anchor component={Link} to={"/"} color={"white"} className={classes.activeLink}>Inicio</Anchor>
                    <Anchor component={Link} to={"/cursoprogramacioninfantil"} color={"white"} underline={false}>Curso
                        Minecraft</Anchor>
                    <Anchor component={Link} to={"/cursoweb"} color={"white"} underline={false}>Cursos Web</Anchor>
                    <Anchor href={"https://academy.linkageacademy.com/login"} color={"white"}
                            underline={false}>Aula Virtual</Anchor>

                    <Button
                        className={classes.desktopNavbarCTA}
                        size={"sm"}
                        color={`${color}.6`}
                        variant={"white"}
                        onClick={()=>openIt()}
                    >
                        Inscribete Ahora
                    </Button>

                </Group>
            </Box>

        </MantineHeader>
    )
}

export default ColoredHeader