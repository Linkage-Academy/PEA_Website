import {Group, Image, Stack, Text, Title} from "@mantine/core";
import React from "react";


function GroupBanner({img, title, description, imgWidth}) {

    return (
        <Stack>
            <Title order={4} weight={500}>{title}</Title>
            <Group noWrap align="start" spacing={0}>
                <Text fz={14}>{description}</Text>
                <Image radius="md" src={img} width={imgWidth}/>
            </Group>
        </Stack>
    )
}

export default GroupBanner;