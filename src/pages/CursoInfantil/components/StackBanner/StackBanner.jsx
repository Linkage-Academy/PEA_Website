import {Button, Card, Group, Image, Stack, Text, Box, Title} from '@mantine/core';
import React from 'react';
import { useStackBannerStyles } from './StackBanner.styles';


function StackBanner(props){
    const {classes} = useStackBannerStyles();
    const {mainImage, title} = props;
    const description = ['Principiante', '4 Horas', '8-14 años', 'Si', 'Si', '96 Lecciones'];
    
    
    return(
     
            <Stack my={'md'}>
                <Title>{title}</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin et enim  incidunt laoreet. Nunc auc tor eu ante in blandit. In interdum vel elit eu sollicitudin Ut pretium blandit tincidunt. Vestibulum congue est  felis, at tristique tellus rhoncus eu. </Text>
                <Image width={'100%'} mx="auto" radius="md" src={mainImage} />
            </Stack>
    
    )
}

export default StackBanner;