import {Button, Group, Stack} from "@mantine/core";
import React from "react";
import {useMediaQuery} from "@mantine/hooks";
import {useTheme} from "@emotion/react";
import {useDisclosure} from "@mantine/hooks";
import ModalComponent from "../../ModalComponent";


function HeroCTAButtons({color}) {
    const [opened, {open, close}] = useDisclosure();
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    const buttonSize = isLargeScreen ? "lg" : "sm"
    const FlexLayout = isLargeScreen ? Group : Stack

    return (

        <FlexLayout spacing={"xs"} noWrap>
            <ModalComponent opened={opened} open={open} close={close}/>
            <Button color={`${color}.8`} size={buttonSize} fullWidth={!isLargeScreen} onClick={open} radius={"md"}>¡Registrate
                Ahora!</Button>

        </FlexLayout>
    )
}

export default HeroCTAButtons