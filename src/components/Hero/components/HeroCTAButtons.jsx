import {Button, Group, Stack} from "@mantine/core";
import React from "react";
import {useMediaQuery} from "@mantine/hooks";
import {useTheme} from "@emotion/react";

function HeroCTAButtons({color}) {

    const theme = useTheme()
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    const buttonSize = isLargeScreen ? "lg" : "sm"
    const FlexLayout = isLargeScreen ? Group : Stack

    return (
        <FlexLayout spacing={"xs"} noWrap>
            <Button color={`${color}.8`} size={buttonSize} fullWidth={!isLargeScreen} radius={"md"}>¡Registrate
                Ahora!</Button>
            <Button color={`${color}.8`} variant={"outline"} fullWidth={!isLargeScreen} size={buttonSize} radius={"md"}>¡Mirar
                todos los
                Cursos!</Button>
        </FlexLayout>
    )
}

export default HeroCTAButtons