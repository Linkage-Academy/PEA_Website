import { Button, Image, Group  } from '@mantine/core';
import React from 'react';
import { Header, Burger } from '@mantine/core';
import {useHomeHeroStyles} from '../HomeHero.styles';
import isotype from './static/logoColor.svg'


function HeaderComponent(){
    const {classes} = useHomeHeroStyles();
    return(
        <Header className={classes.header_style} px={"xl"} pt ={'xs'} sx={{backgroundColor:'rgba(0,0,0,0)', border:'none'}}>
            <Image maw={65} radius="md" src={isotype} alt="Random image" />
            <Group className={classes.text_white_overlay}>
                <Burger/>
            </Group>
        </Header>
    )

}



export default HeaderComponent;