import {Card, Stack, Title, Box, Text, Button} from "@mantine/core";
import React from "react";
import { useModuleSectionStyles } from "../ModulesSection.styles";

function CardComponent(props) {
    const {classes} = useModuleSectionStyles();
    const {img, title, description, open} = props;
    return (
        <Card withBorder className={classes.card} radius={"lg"} sx={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover"
        }}>
            <Stack>
                <Box>
                    <Title order={3} className={classes.titleCardSection} color={"white"}>{title}</Title>
                    <Text color={"white"}>{description}</Text>
                </Box>
                <Button color={"teal.8"} size={"sm"} fullWidth={false} onClick={open}>Inscribete al Módulo</Button>
            </Stack>
        </Card>
    )
}

export default CardComponent;