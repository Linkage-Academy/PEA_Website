import {Box, Image, Text, Title} from "@mantine/core";
import React from "react";
import {useGroupBannerStyles} from "./GroupBanner.styles";


function GroupBanner({img, title, description, imgWidth, bottomSection}) {
    const {classes} = useGroupBannerStyles()
    return <>
        <Box className={classes.grid}>
            <Title order={4} weight={500} className={classes.gridTitle}>{title}</Title>
            <Text fz={14} className={classes.gridContent}>{description}</Text>
            <Box className={classes.gridBottomSection}>
                {bottomSection}
            </Box>
            <Image radius="md" src={img} width={imgWidth} className={classes.gridImage}/>
        </Box>
    </>
}

export default GroupBanner;