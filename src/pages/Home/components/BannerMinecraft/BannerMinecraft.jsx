import {Button, Card, Group, Image, Stack, Text} from '@mantine/core';
import minecraft3dImage from './static/minecraftLand3d.webp'
import React from 'react';
import {useBannerMinecraftStyles} from './BannerMinecraft.styles';


function BannerMinecraft() {

    const {classes} = useBannerMinecraftStyles();
    return (
        <Group m={'sm'} p={0}  grow>
            <Card
                shadow="sm"
                sx={{backgroundColor: '#0CA678'}}
                h={184}
                p={'xs'}    
            >
                <Stack sx={{ width:'100%'}} >
                    <Text className={classes.textStyle} mt={'xs'} color="white" align='center'>
                        Cultiva las Habilidades STEM con Minecraft 
                    </Text>
                    <Button className={classes.mobileBannerButton} color='red.6' align='start'>¡Inscribite!</Button>
                </Stack>
            </Card>
            <Image maw={'42%'} radius="md" src={minecraft3dImage} alt="Random image"/>
        </Group>
    )
}

export default BannerMinecraft;