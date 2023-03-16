import {Button, Group, Stack, Text} from "@mantine/core";
import {useHomeHeroStyles} from "../HomeHero.styles";

function MainText() {
    const {classes} = useHomeHeroStyles()
    return (
        <Stack spacing={"xs"} align={"center"}>
            <Text color={"gray.2"} underline span>Busce a ultricies felis.</Text>
            <Text className={classes.mainText}>!Aprende a construir el Futuro!</Text>
            <Group>
                <Button variant={"outline"} color={"gray.1"} radius={"lg"} size={"md"}>¡Registrate!</Button>
                <Button color={"red.8"} radius={"lg"} size={"md"} className={classes.CTA_AllCourses}>¡Mirar
                    Todos los Cursos!</Button>
            </Group>
        </Stack>
    )
}

export default MainText