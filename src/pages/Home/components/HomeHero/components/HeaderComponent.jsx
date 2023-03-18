import { Button, Image, Group, Box  } from '@mantine/core';
import React from 'react';
import { Header, Burger } from '@mantine/core';
import {useHomeHeroStyles} from '../HomeHero.styles';
import isotype from './static/logoLinkage.png'


function HeaderComponent(){
    const {classes} = useHomeHeroStyles();
    return(
        <Header className={classes.header_style}   sx={{backgroundColor:'rgba(0,0,0,0)', border:'none'}}>
            <Box className={classes.logoContainer}>
                <Image maw={95} src={isotype} alt="Random image" /> 
            </Box>
            
            <Group p={'sm'}>
                <Burger/>
            </Group>
        </Header>
    )

}



export default HeaderComponent;