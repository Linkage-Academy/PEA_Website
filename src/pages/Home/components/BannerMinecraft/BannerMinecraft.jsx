import { Button, Stack, Group, Card, Overlay, Title, BackgroundImage, Image, Box, Text } from '@mantine/core';
import minecraft3dImage from './static/minecraftLand3d.svg'
import React from 'react';
import { useBannerMinecraftStyles } from './BannerMinecraft.styles';



function BannerMinecraft(props){

   const {classes} = useBannerMinecraftStyles();
    return( 
        <Group m={'md'} sx={{justifyContent:'space-around', padding:'0' }}>
                <Card
                shadow="sm"
                sx={{backgroundColor:'#0CA678', flexGrow:1}}
                h={184}
                w='40%'
                p={'sm'}
                m={0}

                >
                    <Stack>
                        <Text className={classes.textStyle} mt={'xs'} color="white" align='center' >
                            Cultiva las Habilidades STEM con Minecraft
                        </Text>
                        <Button className={classes.bannerButton} color='red.6'>¡Inscribite Ahora!</Button>
                    </Stack>
                </Card>
            <Image maw={'52%'} radius="md" src={minecraft3dImage} alt="Random image" />
        </Group>
    )
}
export default BannerMinecraft;