import {Group, Stack, Title} from "@mantine/core";
import React from "react";
import {useHeroStyles} from "./Hero.styles";
import HeroCTAButtons from "./components/HeroCTAButtons";

function Hero({title, color, rightSection}) {
    const {classes} = useHeroStyles({color})

    return (
        <Group noWrap>
            <Stack className={classes.mainHero}>
                <Title className={classes.mainTitle}>{title}</Title>
                <HeroCTAButtons color={color}/>
            </Stack>

            <Group p={"xl"} spacing={0} noWrap>
                {rightSection}
            </Group>
        </Group>
    )
}

export default Hero