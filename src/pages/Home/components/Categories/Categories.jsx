import React from 'react';
import CategoryCard from './components/CategoryCard';
import infantil from './static/categoryInfantil.webp';
import frontend from './static/categoryFrontend.webp';
import backend from './static/categoryBackend.webp';


function Categories() {

    //const {classes} = useHomeHeroStyles();
    const categoryName = ['Infantil', 'Frontend', 'Backend']
    const description = ['1 Curso, 96 horas de Enseñanza', '1 Curso, 32 Horas de Enseñanza', '2 Cursos, 64 Horas de Enseñanza']
    const overlayColor = ['#572A1333', '#0000004D', '#572A1333']

    return (
        <>
            <CategoryCard categoryName={categoryName[0]} backgroundImage={infantil} description={description[0]}
                          overlayColor={overlayColor[0]}/>
            <CategoryCard categoryName={categoryName[1]} backgroundImage={frontend} description={description[1]}
                          overlayColor={overlayColor[1]}/>
            <CategoryCard categoryName={categoryName[2]} backgroundImage={backend} description={description[2]}
                          overlayColor={overlayColor[2]}/>
        </>
    )
}

export default Categories;