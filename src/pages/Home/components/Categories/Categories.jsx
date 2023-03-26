import React from 'react';
import CategoryCard from './components/CategoryCard';
import { MobileCard } from './components/CategoryCard';
import { DesktopCard } from './components/CategoryCard';
import infantil from './static/Infantil.webp';
import frontend from './static/Frontend.webp';
import backend from './static/Backend.webp';
import { Stack, Title } from '@mantine/core';
import { useCategoriesStyles } from './Categories.styles';
import {useTheme} from "@emotion/react";
import {useMediaQuery} from "@mantine/hooks";


function Categories(props) {
    const {btnLink1, btnLink2} = props;
    const {classes} = useCategoriesStyles();
    const categoryName = ['Infantil', 'Frontend', 'Backend'];
    const description = ['1 Curso, 96 horas de Enseñanza', '1 Curso, 32 Horas de Enseñanza', '2 Cursos, 64 Horas de Enseñanza'];
    const overlayColor = ['#572A1333', '#0000004D', '#572A1333'];
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);

    return (
        

        <Stack mt={'sm'} >
            <Title >Categorias</Title>
            <Stack className={classes.categoryLayout} >

            <>
            {isLargeScreen ?
            <>
                <DesktopCard categoryName={categoryName[0]} backgroundImage={infantil} description={description[0]}/>
                <DesktopCard categoryName={categoryName[1]} backgroundImage={frontend} description={description[1]}/>
                <DesktopCard categoryName={categoryName[2]} backgroundImage={backend} description={description[2]}/>
            </> 
                : 
                <>
                  <MobileCard categoryName={categoryName[0]} backgroundImage={infantil} description={description[0]} btnLink={btnLink1}/>
                  <MobileCard categoryName={categoryName[1]} backgroundImage={frontend} description={description[1]} btnLink={btnLink2}/>
                  <MobileCard categoryName={categoryName[2]} backgroundImage={backend} description={description[2]} btnLink={btnLink2}/>
                </>
                  }
        </>

            {/*
                <CategoryCard categoryName={categoryName[0]} backgroundImage={infantil} description={description[0]}
                            />
                <CategoryCard categoryName={categoryName[1]} backgroundImage={frontend} description={description[1]}
                            />
                <CategoryCard categoryName={categoryName[2]} backgroundImage={backend} description={description[2]}
                           />
            */}               
            </Stack>
        </Stack>
    )
}

export default Categories;