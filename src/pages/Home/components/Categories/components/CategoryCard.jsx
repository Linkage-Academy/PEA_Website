import { Button, Stack, Group, Card, Overlay, Title, BackgroundImage, Text } from '@mantine/core';
import React from 'react';
//import infantil from './static/categoryInfantil.svg';
import { useCategoriesStyles } from '../Categories.styles';



function CategoryCard(props){

   const {classes} = useCategoriesStyles();
   const {categoryName, backgroundImage, description, overlayColor} = props;
    return( 
        <Card h={90} shadow={'md'} p={0} mx={'sm'}>
            <BackgroundImage src={backgroundImage} radius="sm" h='100%'>
            <Overlay color={overlayColor} opacity={0.2} />
                <Group align="center" h={"100%"} px={'md'}>
                    <Stack spacing={0} sx={{flexGrow:1}}>
                        <Text sx={{color:'white', fontWeight:'bold', fontSize:'1rem',textShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)' }}>{categoryName}</Text>
                        <Text sx={{color:'white', fontSize:'0.75rem', textShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)'}}>{description}</Text>
                    </Stack>
                    <Button className={classes.cardButton}  color="red.6" >Leer Más</Button>
                    
                </Group>
            </BackgroundImage>
            </Card>
    )
}
export default CategoryCard;