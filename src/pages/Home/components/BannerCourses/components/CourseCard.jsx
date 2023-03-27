import {Button, Card, Group, Image, Stack, Text, Badge, Box} from '@mantine/core';
import React from 'react';
import { useBannerCoursestStyles } from '../BannerCourses.styles';
import {Link} from "react-router-dom";


function CourseCard(props) {

    const {mainImage, title, description, btnLink} = props;
    const {classes} = useBannerCoursestStyles();
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section component="a" >
                <Image
                src={mainImage}
                height={220}
                alt="Norway"
                />
            </Card.Section>

        <Group position="apart" mt="md" mb="xs">
            <Text weight={500} sx={{fontSize:'1.25rem', fontFamily:'Merriweather', }}>{title}</Text>
            <Badge color="pink" variant="light">
            Disponible
            </Badge>
        </Group>

        <Text size="sm" color="dimmed" className={classes.textStyle}>
            {description}
        </Text>
        <Box  className={classes.buttonContainer}>
            <Button component={Link} to={btnLink} color='red.6' fullWidth mt="md" radius="md">
                Explorar
            </Button>
        </Box>

        </Card>
    )
}

export default CourseCard;