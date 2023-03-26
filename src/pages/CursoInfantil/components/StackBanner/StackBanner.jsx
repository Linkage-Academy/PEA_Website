import {Image, Stack, Text, Title} from '@mantine/core';
import React from 'react';
import {useStackBannerStyles} from "./StackBanner.styles";


function StackBanner({mainImage, title, description}) {
    const {classes} = useStackBannerStyles()
    return (
        <Stack>
            <Title order={4} weight={500} className={classes.title}>{title}</Title>
            <Text className={classes.content}>{description}</Text>
            <Image width={'100%'} mx="auto" radius="md" src={mainImage}/>
        </Stack>

    )
}

export default StackBanner;