import {Button, Card, Group, Image, Stack, Text, Box, Title} from '@mantine/core';
import React from 'react';
import { useCourseDescriptionCardStyles } from '../CourseDescriptionCard.styles';

function DescriptionContent(props){
    const {classes} = useCourseDescriptionCardStyles();
    const {icon, title, description} = props;
    return(
        <Group noWrap>
            {icon}
            <Text w={'40%'}>{title}</Text>
            <Text color={'dark.3'}>{description}</Text>
        </Group>
    )
}

export default DescriptionContent;