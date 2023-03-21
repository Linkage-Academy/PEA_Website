import { Button, Stack, Group, Card, Overlay, Title, BackgroundImage, Text, Box, MediaQuery} from '@mantine/core';
import React from 'react';
import {useMediaQuery} from "@mantine/hooks";
import {useTheme} from "@emotion/react";

//import infantil from './static/categoryInfantil.svg';
import { useCategoriesStyles } from '../Categories.styles';

export function MobileCard(props){
    const {classes} = useCategoriesStyles();
    const {categoryName, description, backgroundImage} = props;
    return(
        <Card className={classes.categoryMobileContainer} sx={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}  shadow={'md'} mx={'sm'}>
            <Group className={classes.categoryContentLayout}  h={"100%"}  noWrap>
                <Stack  noWrap>
                    <Text sx={{color:'white', fontWeight:'bold', fontSize:'1rem',textShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)',  }}>{categoryName}</Text>
                    <Text sx={{color:'white', fontSize:'0.75rem', textShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)'}}>{description}</Text>
                </Stack>
                <Box >
                    <Button className={classes.cardButton}  color="red.6" >Leer Más</Button>
                </Box>
            </Group>     
        </Card>
    )
}

export function DesktopCard(props){
    const {classes} = useCategoriesStyles();
    
    const {categoryName, description, backgroundImage} = props;
    return(
        <Card className={classes.categoryContainer} sx={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',}} shadow={'md'} >
                <Stack pb={'md'}>
                    <Text pb={0} sx={{color:'white', fontWeight:'bold', fontSize:'1.37rem',textShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)' }}>{categoryName}</Text>
                    <Text sx={{color:'white', fontSize:'0.875rem', textShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)'}}>{description}</Text>
                </Stack>
                <Button color="red.6">Leer Más</Button>
            
        </Card>
    )
}



function CategoryCard(props){
   const theme = useTheme();
   const {classes} = useCategoriesStyles();
   const {categoryName, description} = props;
   const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
    return( 
        <>
            {isLargeScreen ?
                <DesktopCard categoryName={categoryName} description={description}/> 
                : <MobileCard categoryName={categoryName} description={description}/>}
        </>
    )
}
export default CategoryCard;