import {Button, Card, Group, Image, Stack, Text} from '@mantine/core';
import React from 'react';
import { useBannerCoursestStyles } from './BannerCourses.styles';
import CourseCard from './components/CourseCard';
import minecratImage from './static/mineCourse.webp';
import setup from './static/setup.webp';
import setupPurple from './static/setupPurple.webp';
import setupDark from './static/setupDark.webp';



function BannerCourses(props) {
    const {classes} = useBannerCoursestStyles();
    const titles = ['Introducción al Mundo de la Programación', 'Desarrollo Web Full Stack'];
    const description = ['Introduce a los más pequeños del hogar al pensamiento lógico del mundo de la programación. Dentro de este curso los chicos aprenderán divirtiéndose dentro del mundo de Minecraft.',
                        ''];
    return (        
        <Stack my={'md'} className={classes.desktopLayout}>
            <CourseCard mainImage={minecratImage} title={titles[0]} description={description[0]}/>
            <CourseCard mainImage={setupDark} title={titles[1]} description={description[0]}/>
        </Stack>
    )
}

export default BannerCourses;