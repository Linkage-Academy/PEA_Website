import {Stack, Title} from "@mantine/core";
import {ReactComponent as HeroImage} from './static/HeroImage.svg';
import {useHomeHeroStyles} from "./HomeHero.styles";
import MainText from "./components/MainText";

function HomeHero() {
    const {classes} = useHomeHeroStyles()
    return (
        <Stack className={classes.container} p={"xl"} px={100}>
            <Title>Home</Title>
            <Stack align={"center"} spacing={"lg"}>
                <MainText/>
                <HeroImage/>
            </Stack>
        </Stack>
    )
}

export default HomeHero