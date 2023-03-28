import {Button, Card, Group, Image, Stack, Text, Modal, TextInput, Select} from '@mantine/core';
import minecraft3dImage from './static/minecraftLand3d.webp'
import React from 'react';
import {useBannerMinecraftStyles} from './BannerMinecraft.styles';
import { useDisclosure } from '@mantine/hooks';
import ModalComponent from '../../../../components/ModalComponent';

function BannerMinecraft() {
    const[opened, {open, close}] = useDisclosure();
    const {classes} = useBannerMinecraftStyles();
    return (
        <>

            <ModalComponent opened={opened} open={open} close={close}/>
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
                        <Button className={classes.mobileBannerButton} color='red.6' align='start' onClick={open}>¡Inscribite!</Button>
                    </Stack>
                </Card>
                <Image maw={'42%'} radius="md" src={minecraft3dImage} alt="Random image"/>
            </Group>
        </>
    )
}

export default BannerMinecraft;