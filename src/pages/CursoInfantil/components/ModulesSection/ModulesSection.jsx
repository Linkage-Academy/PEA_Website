import {Box, Button, Card, SimpleGrid, Stack, Text, Title} from "@mantine/core";
import infantil from "../Modules/static/infantil.webp";
import trans from "../Modules/static/trans.webp";
import python from "../Modules/static/python.webp";
import arduino from "../Modules/static/arduino.webp";
import React from "react";
import {useModuleSectionStyles} from "./ModulesSection.styles";

function ModulesSection() {
    const {classes} = useModuleSectionStyles()
    return <>
        <Title className={classes.titleSection} pt={"2rem"}>Módulos</Title>
        <SimpleGrid cols={1} pt={"1rem"} spacing={"1rem"} breakpoints={[{minWidth: "sm", cols: 2}]}>
            <Card withBorder className={classes.card} radius={"lg"} sx={{
                backgroundImage: `url(${infantil})`,
                backgroundSize: "cover"
            }}>
                <Stack>
                    <Box>
                        <Title order={3} className={classes.titleCardSection} color={"white"}>Programacion en
                            Bloques</Title>
                        <Text color={"white"}>1 Curso, 90 Horas de enseñanza</Text>
                    </Box>
                    <Button color={"teal.8"} size={"sm"} fullWidth={false}>Inscribete al Módulo</Button>
                </Stack>
            </Card>

            <Card withBorder radius={"lg"} className={classes.card} sx={{
                backgroundImage: `url(${trans})`,
                backgroundSize: "cover"

            }}>
                <Stack>
                    <Box>
                        <Title order={3} color={"white"} className={classes.titleCardSection}>Programacion en
                            Bloques</Title>
                        <Text color={"white"}>1 Curso, 90 Horas de enseñanza</Text>
                    </Box>
                    <Button color={"teal.8"} size={"sm"}>Inscribete al Módulo</Button>
                </Stack>
            </Card>

            <Card withBorder radius={"lg"} className={classes.card} sx={{
                backgroundImage: `url(${python})`,
                backgroundSize: "cover"

            }}>
                <Stack>
                    <Box>
                        <Title order={3} color={"white"} className={classes.titleCardSection}>Programacion en
                            Bloques</Title>
                        <Text color={"white"}>1 Curso, 90 Horas de enseñanza</Text>
                    </Box>
                    <Button color={"teal.8"} size={"sm"}>Inscribete al Módulo</Button>
                </Stack>
            </Card>

            <Card withBorder radius={"lg"} className={classes.card} sx={{
                backgroundImage: `url(${arduino})`,
                backgroundSize: "cover"

            }}>
                <Stack>
                    <Box>
                        <Title order={3} color={"white"} className={classes.titleCardSection}>Programacion en
                            Bloques</Title>
                        <Text color={"white"}>1 Curso, 90 Horas de enseñanza</Text>
                    </Box>
                    <Button color={"teal.8"} size={"sm"}>Inscribete al Módulo</Button>
                </Stack>
            </Card>
        </SimpleGrid>
    </>
}

export default ModulesSection