import { Button, Stack, Group, Card, Overlay, Title, BackgroundImage, Text, Box } from '@mantine/core';
import React from 'react';
//import infantil from './static/categoryInfantil.svg';
import { useCategoriesStyles } from '../Categories.styles';

function MobileCard(props){
    const {classes} = useCategoriesStyles();
    const {categoryName, backgroundImage, description} = props;
    return(
        <Card className={classes.categoryContainer}  shadow={'md'} p={0} mx={'sm'}>
        <BackgroundImage src={backgroundImage} radius="sm" className={classes.backgroundImageStyle} shadow={'md'}>
            <Group className={classes.categoryContentLayout} align='center' h={"100%"} px={'md'} noWrap>
                <Stack spacing={0} sx={{ alignContent:'center'}}>
                    <Text sx={{color:'white', fontWeight:'bold', fontSize:'1rem',textShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)' }}>{categoryName}</Text>
                    <Text sx={{color:'white', fontSize:'0.75rem', textShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)'}}>{description}</Text>
                </Stack>
                <Box sx={{display:'flex', flexGrow:1, justifyContent:'center'}}>
                    <Button className={classes.cardButton}  color="red.6" >Leer Más</Button>
                </Box>        
            </Group>

        </BackgroundImage>
        
        </Card>
    )
}



function CategoryCard(props){

   const {classes} = useCategoriesStyles();
   const {categoryName, backgroundImage, description} = props;
    return( 
        <Card className={classes.categoryContainer}  shadow={'md'} p={0} mx={'sm'}>
        {/*<MobileCard categoryName={categoryName} backgroundImage={backgroundImage} description={description}/>*/}
            <BackgroundImage src={backgroundImage}>
                <Stack >
                    <Text sx={{color:'white', fontWeight:'bold', fontSize:'1rem',textShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)' }}>{categoryName}</Text>
                    <Text sx={{color:'white', fontSize:'0.75rem', textShadow:' 0px 4px 4px rgba(0, 0, 0, 0.25)'}}>{description}</Text>
                </Stack>
                <Button color="red.6">Leer Más</Button>
            </BackgroundImage>
        </Card>
    )
}
export default CategoryCard;