import {Box, Button, Card, SimpleGrid, Stack, Text, Title, Modal, TextInput, Select} from "@mantine/core";

import infantil from './static/infantilCategory.svg';
import backend from './static/backendCategory.svg';
import frontend from './static/frontendCategory.svg';
import React from "react";
import {useModuleSectionHomeStyles} from "./ModulesSectionHome.styles";
import { useDisclosure } from '@mantine/hooks';
import ModalComponent from "../../../../components/ModalComponent";
import CardComponent from "../../../CursoInfantil/components/ModulesSection/components/CardComponent";

function ModulesSection() {
    const [opened, {open, close}] =useDisclosure(false);
    const {classes} = useModuleSectionHomeStyles();

    return(
        <>

            <ModalComponent opened={opened} open={open} close={close}/>

            <Title className={classes.titleSection} pt={"2rem"}>Categoria</Title>
            <SimpleGrid cols={1} pt={"1rem"} spacing={"1rem"} breakpoints={[{minWidth: "sm", cols: 2}]}>
                <CardComponent img={infantil} title='Infantil' description='Módulo 1, 28 Horas de enseñanza' open={open}/>
                <CardComponent img={frontend} title='Frontend' description='Módulo 2, 16 Horas de enseñanza' open={open}/>
                <CardComponent img={backend} title='Backend' description='Módulo 3, 32 Horas de enseñanza' open={open}/>
            </SimpleGrid>
        </>
    )
}

export default ModulesSection