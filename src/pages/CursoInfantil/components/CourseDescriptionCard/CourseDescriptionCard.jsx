import {Button, Card, Group, Image, Stack, Text, Title} from '@mantine/core';
import React from 'react';
import {useCourseDescriptionCardStyles} from './CourseDescriptionCard.styles';
import {
    IconChartArrowsVertical,
    IconClockHour5,
    IconFileCertificate,
    IconRosette,
    IconSchool,
    IconUsers
} from '@tabler/icons-react';


function CourseDescriptionCard(props) {
    const {classes} = useCourseDescriptionCardStyles();
    const {mainImage} = props;
    const description = ['Principiante', '4 Horas', '8-14 años', 'Si', 'Si', '96 Lecciones']
    const title = ['Nivel', 'Horas Semanales', 'Edad', 'Certificado', 'Insignia Digital', 'Lecciones']
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section component="a">
                <Image
                    src={mainImage}
                    height={220}
                    alt="Norway"
                />
            </Card.Section>
            <Stack sx={{textAlign: "center"}} align={"center"}>
                <Title order={4} fw={500} pt={"1rem"}>Introducción al Mundo de la Programación</Title>

                <Group noWrap w={"100%"}>
                    <Stack sx={{flexGrow: 1}}>
                        <Group>
                            <IconChartArrowsVertical color='#0CA678'/>
                            <Text>{title[0]}</Text>
                        </Group>

                        <Group>
                            <IconClockHour5 color='#0CA678'/>
                            <Text>{title[1]}</Text>
                        </Group>

                        <Group>
                            <IconUsers color='#0CA678'/>
                            <Text>{title[2]}</Text>
                        </Group>

                        <Group>
                            <IconFileCertificate color='#0CA678'/>
                            <Text>{title[3]}</Text>
                        </Group>

                        <Group>
                            <IconRosette color='#0CA678'/>
                            <Text>{title[4]}</Text>
                        </Group>

                        <Group>
                            <IconSchool color='#0CA678'/>
                            <Text>{title[5]}</Text>
                        </Group>
                    </Stack>

                    <Stack sx={{
                        textAlign: "start"
                    }}>
                        <Text color={'dark.3'}>{description[0]}</Text>
                        <Text color={'dark.3'}>{description[1]}</Text>
                        <Text color={'dark.3'}>{description[2]}</Text>
                        <Text color={'dark.3'}>{description[3]}</Text>
                        <Text color={'dark.3'}>{description[4]}</Text>
                        <Text color={'dark.3'}>{description[5]}</Text>
                    </Stack>

                </Group>


            </Stack>
            <Button color={'teal.9'} w={'60%'} mt={'xl'}>Inscribite</Button>
        </Card>
    )
}

export default CourseDescriptionCard;