import {Image, Stack, Text, Title} from '@mantine/core';
import React from 'react';


function StackBanner(props) {
    const {mainImage, title} = props;
    return (
        <Stack>
            <Title order={4} weight={500}>{title}</Title>
            <Text fz={14}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin et enim incidunt
                laoreet. Nunc auc tor eu ante in blandit. In interdum vel elit eu sollicitudin Ut pretium blandit
                tincidunt. Vestibulum congue est felis, at tristique tellus rhoncus eu. </Text>
            <Image width={'100%'} mx="auto" radius="md" src={mainImage}/>
        </Stack>

    )
}

export default StackBanner;