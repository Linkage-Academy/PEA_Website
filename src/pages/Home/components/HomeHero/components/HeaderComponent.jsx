import { Button, Image } from '@mantine/core';
import React from 'react';
import { BackgroundImage, Anchor, Group } from '@mantine/core';
import { Header, Burger } from '@mantine/core';
import {useHomeHeroStyles} from '../HomeHero.styles';


function HeaderComponent(){
    const {classes} = useHomeHeroStyles();
    return(
        <Header className={classes.header_style} px={"xl"} pt ={'xs'} sx={{backgroundColor:'rgba(0,0,0,0)', border:'none'}}>
            <h1>Logo</h1>
            <Group className={classes.text_white_overlay}>
                <Anchor href="#" target="_blank" className={classes.colorWhite}>Inicio</Anchor>
                <Anchor href="#" target="_blank" className={classes.colorWhite}>Cursos</Anchor>
                <Anchor href="#" target="_blank" className={classes.colorWhite}>Quienes Somos?</Anchor>
                <Burger/>;
            </Group>
        </Header>
    )

}



export default HeaderComponent;