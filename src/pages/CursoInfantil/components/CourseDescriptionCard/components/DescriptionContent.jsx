import {Box, Group, Text} from '@mantine/core';
import React from 'react';

function DescriptionContent(props) {
    const {icon, title, description} = props;
    return (
        <Group noWrap w={"100%"}>
            <Group sx={{flexGrow: 1}}>
                {icon}
                <Text>{title}</Text>
            </Group>
            <Box>
                <Text color={'dark.3'}>{description}</Text>
            </Box>
        </Group>
    )
}

export default DescriptionContent;