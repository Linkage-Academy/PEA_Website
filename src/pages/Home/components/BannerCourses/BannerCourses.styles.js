import { createStyles} from '@mantine/core';

export const useBannerCoursestStyles = createStyles((theme) => ({

    textStyle:{
        fontFamily: 'Merriweather',
        fontSize:'1rem',
    },

    desktopLayout:{
        [theme.fn.largerThan('sm')]: {
            display:'flex',
            flexDirection:'row'
        },
    },

    buttonContainer:{
        width: '100%',
        [theme.fn.largerThan('sm')]: {
            width:'50%'
        },  
    }




}))