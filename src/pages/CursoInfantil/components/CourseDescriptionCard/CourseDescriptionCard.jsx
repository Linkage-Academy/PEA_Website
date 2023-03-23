import {Button, Card, Group, Image, Stack, Text, Box, Title} from '@mantine/core';
import React from 'react';
import { useCourseDescriptionCardStyles } from './CourseDescriptionCard.styles';
import { IconChartArrowsVertical, IconClockHour5, IconUsers, IconFileCertificate, IconRosette, IconSchool } from '@tabler/icons-react';
import DescriptionContent from './components/DescriptionContent';



function CourseDescriptionCard(props){
    const {classes} = useCourseDescriptionCardStyles();
    const {mainImage} = props;
    const description = ['Principiante', '4 Horas', '8-14 años', 'Si', 'Si', '96 Lecciones']
    const title = ['Nivel', 'Horas Semanales', 'Edad', 'Certificado', 'Insignia Digital', 'Lecciones']
    return(
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section component="a" >
                <Image
                src={mainImage}
                height={220}
                alt="Norway"
                />
            </Card.Section>
           <Stack>
                <Title>Introducción al Mundo de la Programación</Title>
                <DescriptionContent icon={<IconChartArrowsVertical color='#0CA678'/>} title={title[0]} description={description[0]}/>
                <DescriptionContent icon={<IconClockHour5 color='#0CA678'/>} title={title[1]} description={description[1]}/>
                <DescriptionContent icon={<IconUsers color='#0CA678'/>} title={title[2]} description={description[2]}/>
                <DescriptionContent icon={<IconFileCertificate color='#0CA678'/>} title={title[3]} description={description[3]}/>
                <DescriptionContent icon={<IconRosette color='#0CA678'/>} title={title[4]} description={description[4]}/>
                <DescriptionContent icon={<IconSchool color='#0CA678'/>} title={title[5]} description={description[5]}/>
           </Stack >
           <Button color={'teal.9'} w={'60%'} mt={'xl'}>Inscribite</Button> 
        </Card>
    )
}

export default CourseDescriptionCard;