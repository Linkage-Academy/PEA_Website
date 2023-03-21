import {Button, Card, Group, Image, Stack, Text, Box} from '@mantine/core';
import minecraft3dImage from './static/minecraftLand3d.webp';
import brushIcon from './static/brush.svg';
import bulbIcon from './static/bulb.svg';
import mathIcon from './static/math.svg';
import React from 'react';
import {useBannerMinecraftStyles} from './BannerMinecraft.styles';

function BannerCardMinecraft(props){
    const {classes} = useBannerMinecraftStyles();
    const {icon} = props;
    return(
        <Card
        className={[classes.mainCard, classes.cardShadow]}
        shadow="md"
        sx={{backgroundColor: '#0CA678', flexGrow:1}}
        w='100%'
        p={'sm'}
       
    >
        <Group noWrap>
        <Image maw={'40%'} src={icon} alt="Random image"/>
        <Text className={classes.textStyle} mt={'xs'} color="white" align='center'>
                Imaginacion
        </Text>
        </Group>
    </Card>

    )
}


function BannerDesktopMinecraft() {

    const {classes} = useBannerMinecraftStyles();
    return (
        <Group m={'md'} p={0} noWrap>
            <Image maw={'40%'} radius="md" src={minecraft3dImage} alt="Random image"/>
            <Stack h={'100%'} >
                <Group noWrap>
                    <Stack>
                        <Card
                            sx={{ backgroundColor: '#0CA678'}}
                            className={[classes.mainCard, classes.cardShadow]}
                            shadow="sm"
                            h={184}
                            w='400px'
                            p={'sm'}
                            align={'center'}
                        >
                            <Stack align={'center'} >
                                <Text className={classes.textStyle} mt={'xs'} color="white" align='center'>
                                    Cultiva las Habilidades Stem con Minecraft
                                </Text>
                                <Button className={classes.bannerButton} color='red.6'>¡Inscribite Ahora!</Button>
                            </Stack>
                        </Card>

                        <Card
                            className={[classes.mainCard, classes.cardShadow]}
                            shadow="sm"
                            sx={{backgroundColor: '#0CA678',display:'flex', alignContent:'center', justifyContent:'center'}}
                            h={60}
                            w='100%'
                            
                            
                        >
                          
                                <Text className={classes.textStyle} mt={'xs'} color="white" sx={{display:'flex' ,justifyContent:'center', alignContent:'start'}}>
                                    ¡Diviértete mientras aprendes!
                                </Text>
                              
                    
                        </Card>

                    </Stack>
                    <Stack W='20%' h={'100%'} sx={{ alignItems:'start',}}>
                        <BannerCardMinecraft icon={brushIcon}/>
                        <BannerCardMinecraft icon={bulbIcon}/>
                        <BannerCardMinecraft icon={mathIcon}/>
                    </Stack>



                </Group>
            </Stack>    
        </Group>
    )
}

export default BannerDesktopMinecraft;