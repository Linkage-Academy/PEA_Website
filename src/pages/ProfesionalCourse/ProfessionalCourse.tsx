import PEACourseTemplate from "../../templates/PEACourseTemplate/PEACourseTemplate";
import { IPEACourseTemplateProps } from "../../templates/PEACourseTemplate/PEACourseTemplate";
import {
    IconChartArrowsVertical,
    IconClockHour5,
    IconFileCertificate,
    IconRosette,
    IconSchool,
    IconUsers,
  } from "@tabler/icons-react";

import Mansion from "./assets/Mansion.webp";
import profesionalImg from "./assets/profesionalImg.jpg";

const data: IPEACourseTemplateProps = {
    accentColor:"grape",
    PEAContentInfo:{
        textContent:"Ofrecemos Programas de Estudios Avanzados en todas las ramas de la ingeniería Civil, así como también el profesional puede optar por la carga de cursos del programa universitario:",
        listContent:["PROGRAMA DE ESTUDIOS AVANZADO EN MODELO DE EVALUACIÓN ECONÓMICA DE INFRAESTRUCTURAS VIALES CON EL SISTEMA DE GESTIÓN HDM-4.", "PROGRAMA DE ESTUDIOS AVANZADO EN SEGURIDAD VIAL CON ÉNFASIS EN NORMATIVAS, AUDITORIAS E INFRAESTRUCTURA SEGURA.", "PROGRAMA DE ESTUDIOS AVANZADO EN GESTIÓN INTEGRAL SOSTENIBLE DE RESIDUOS SÓLIDOS."],
        courseInfo:{
            cardImage:Mansion,
            color:"red",
            title:"Programa de Estudios Avanzados",
            elements:[
                {
                    label:"Nivel",
                    description:"Principiante",
                    icon:<IconChartArrowsVertical color="#0CA678" />,
                },
                {
                    label:"Duración",
                    description:"120 Horas",
                    icon:<IconClockHour5 color="#0CA678" />,
                },
                {
                    label:"Edad",
                    description:"Adultos",
                    icon:<IconUsers color="#0CA678" />,
                },
                {
                    label:"Certificado",
                    description:"Si",
                    icon:<IconFileCertificate color="#0CA678" />,
                },
                {
                    label:"Insignia Digital",
                    description:"Si",
                    icon:<IconRosette color="#0CA678" />,
                },

            ]
        },        
    },
    PEAHeroInfo:{
      heroImg:profesionalImg,
      title:"Programas para Profesionales"  
    }

}

function ProfessionalCourse(){
    return(
        <PEACourseTemplate {...data}/>
    )
}

export default ProfessionalCourse;
