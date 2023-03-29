import {Button, Card, Group, Image, Stack, Text, Title, TextInput, Select, Modal} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import {
    IconChartArrowsVertical,
    IconClockHour5,
    IconFileCertificate,
    IconRosette,
    IconSchool,
    IconUsers
} from '@tabler/icons-react';
import {useCourseDescriptionCardStyles} from "./CourseDescriptionCard.styles";
import ModalComponent from '../../../../components/ModalComponent';


function CourseDescriptionCard({mainImage, bkColor, btnColor, description, title, cardTitle}) {

    const {classes} = useCourseDescriptionCardStyles();
    const [opened, {open, close}] =useDisclosure();

    return (
        <>
        <ModalComponent opened={opened} open={open} close={close}/>
        <Card shadow="sm" padding="lg" radius="md" withBorder>

            

            <Card.Section component="a">
                <Image
                    src={mainImage}
                    height={220}
                    alt="Norway"
                />
            </Card.Section>
            <Stack sx={{textAlign: "center"}} align={"center"}>
                <Title order={4} fw={500} pt={"1rem"}>{cardTitle}</Title>

                <Group noWrap w={"100%"} className={classes.labelsCard}>
                    <Stack sx={{flexGrow: 1}} spacing={"1.2rem"}>
                        <Group>
                            <IconChartArrowsVertical color={bkColor}/>
                            <Text>{title[0]}</Text>
                        </Group>

                        <Group>
                            <IconClockHour5 color={bkColor}/>
                            <Text>{title[1]}</Text>
                        </Group>

                        <Group>
                            <IconUsers color={bkColor}/>
                            <Text>{title[2]}</Text>
                        </Group>

                        <Group>
                            <IconFileCertificate color={bkColor}/>
                            <Text>{title[3]}</Text>
                        </Group>

                        <Group>
                            <IconRosette color={bkColor}/>
                            <Text>{title[4]}</Text>
                        </Group>

                        <Group>
                            <IconSchool color={bkColor}/>
                            <Text>{title[5]}</Text>
                        </Group>
                    </Stack>

                    <Stack sx={{textAlign: "start"}} spacing={"1.2rem"}>
                        <Text color={'dark.3'}>{description[0]}</Text>
                        <Text color={'dark.3'}>{description[1]}</Text>
                        <Text color={'dark.3'}>{description[2]}</Text>
                        <Text color={'dark.3'}>{description[3]}</Text>
                        <Text color={'dark.3'}>{description[4]}</Text>
                        <Text color={'dark.3'}>{description[5]}</Text>
                    </Stack>

                </Group>
                <Button color={btnColor} fullWidth size={"md"} onClick={open}>Inscribite</Button>

            </Stack>
        </Card>
        </>
    )
}

export default CourseDescriptionCard;