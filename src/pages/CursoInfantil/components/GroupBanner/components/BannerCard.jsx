import {Button, Card, Group, Image, Stack, Text, Box} from '@mantine/core';
import React from 'react';
import { useGroupBannerStyles } from '../GroupBanner.styles';


function BannerCard(props){
    const {classes} = useGroupBannerStyles();
    const {icon} = props;
    return(
        <Card
        className={[classes.mainCard, classes.cardShadow]}
        shadow="md"
        sx={{backgroundColor: '#0CA678', flexGrow:1}}
        w='100%'
        p={'sm'}
       
    >
        <Group className={classes.bannerCardLayout} noWrap>
        <Image maw={'20%'} src={icon} alt="Random image"/>
        <Text className={classes.textStyle} mt={'xs'} color="white" >
                Imaginacion
        </Text>
        </Group>
    </Card>

    )
}

export default BannerCard;