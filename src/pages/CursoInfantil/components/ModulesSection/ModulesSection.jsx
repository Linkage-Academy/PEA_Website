import {Box, Button, Card, SimpleGrid, Stack, Text, Title, Modal, TextInput, Select} from "@mantine/core";
import infantil from "../Modules/static/infantil.webp";
import trans from "../Modules/static/trans.webp";
import python from "../Modules/static/python.webp";
import arduino from "../Modules/static/arduino.webp";
import React from "react";
import {useModuleSectionStyles} from "./ModulesSection.styles";
import { useDisclosure } from '@mantine/hooks';
import ModalComponent from '../../../../components/ModalComponent';
import CardComponent from "./components/CardComponent";

function ModulesSection() {
    const [opened, {open, close}] =useDisclosure(false);
    const {classes} = useModuleSectionStyles();

    return(
        <>

            <ModalComponent opened={opened} open={open} close={close}/>

            <Title className={classes.titleSection} pt={"2rem"}>Módulos</Title>
            <SimpleGrid cols={1} pt={"1rem"} spacing={"1rem"} breakpoints={[{minWidth: "sm", cols: 2}]}>
                <CardComponent img={infantil} title='Programación Mediante Bloques' description='Módulo 1, 28 Horas de enseñanza' open={open}/>
                <CardComponent img={trans} title='Transición a Código' description='Módulo 2, 16 Horas de enseñanza' open={open}/>
                <CardComponent img={python} title='Transición a Código' description='Módulo 3, 32 Horas de enseñanza' open={open}/>
                <CardComponent img={arduino} title='Introducción a Arduino' description='Módulo 4, 16 Horas de enseñanza' open={open}/>
            </SimpleGrid>
        </>
    )
}

export default ModulesSection