import {Button, Card, Group, Image, Stack, Text, Box, Title} from '@mantine/core';
import React from 'react';
import {useModulesStyles} from './Modules.styles'
import { MobileCard } from '../../../Home/components/Categories/components/CategoryCard';
import infantil from './static/infantil.webp';
import arduino from './static/arduino.webp';
import python from './static/python.webp';
import trans from './static/trans.webp';


function Modules(props){
    const {classes} = useModulesStyles();
    const categoryName = ['Programación en Bloques', 'Transición a Código', 'Python en Minecraft', 'Introducción a Arduino'];
    const description = ['1 Curso, 96 Horas de Enseñanza', '1 Curso, 32 Horas de Enseñanza', '2 Cursos, 64 Horas de Enseñanza', '2 Cursos, 64 Horas de Enseñanza'];
    return(
     
            <Stack my={'md'} className={classes.moduleContainer}>
                <Title>Módulos</Title>
                <MobileCard categoryName={categoryName[0]} backgroundImage={infantil} description={description[0]}/>
                <MobileCard categoryName={categoryName[1]} backgroundImage={trans} description={description[1]}/>
                <MobileCard categoryName={categoryName[2]} backgroundImage={python} description={description[2]}/>
                <MobileCard categoryName={categoryName[3]} backgroundImage={arduino} description={description[3]}/>
            </Stack>
    
    )
    
}

export default Modules;