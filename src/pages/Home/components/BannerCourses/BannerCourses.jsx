import {Button, Card, Group, Image, Stack, Text} from '@mantine/core';
import React from 'react';
import { useBannerCoursestStyles } from './BannerCourses.styles';
import CourseCard from './components/CourseCard';
import minecratImage from './static/mineCourse.webp';
import setupDark from './static/setupDark.webp';





function BannerCourses(props) {
    const btnLinks = ['/cursoprogramacioninfantil', '/cursoweb'];
    const {classes} = useBannerCoursestStyles();
    const titles = ['Introducción al Mundo de la Programación', 'Desarrollo Web Full Stack'];
    const description = ['Introduce a los más pequeños del hogar al pensamiento lógico del mundo de la programación. Dentro de este curso los chicos aprenderán divirtiéndose dentro del mundo de Minecraft.',
                        'Descubre el poder de la programación y adquiere habilidades para construir sitios web de alta calidad con nuestro curso para adolescentes y adultos. Únete a la comunidad de desarrolladores y construye tu futuro digital con nosotros'];
    return (        
        <Stack my={'md'} className={classes.desktopLayout}>
            <CourseCard mainImage={minecratImage} title={titles[0]} description={description[0]} btnLink={btnLinks[0]}/>
            <CourseCard mainImage={setupDark} title={titles[1]} description={description[0]} btnLink={btnLinks[1]}/>
        </Stack>
    )
}

export default BannerCourses;