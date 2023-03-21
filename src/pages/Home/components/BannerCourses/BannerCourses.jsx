import {Button, Card, Group, Image, Stack, Text} from '@mantine/core';
import React from 'react';
import { useBannerCoursestStyles } from './BannerCourses.styles';
import CourseCard from './components/CourseCard';



function BannerCourses() {

    const {classes} = useBannerCoursestStyles();
    return (        
        <Stack mt={'md'}>
            <CourseCard/>
            <CourseCard/>
        </Stack>
    )
}

export default BannerCourses;