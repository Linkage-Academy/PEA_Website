import {createStyles} from '@mantine/core';


export const useCategoriesStyles = createStyles((theme) => ({

    cardButton: {
        display:'flex',
        textAlign: 'center',
        fontSize: '0.75rem',
        justifyContent:'center',
    },

    heroFont: {
        lineHeight: 'normal',
        textAlign: 'left',
    },

    categoryLayout: {
        alignItems:'center',
        [theme.fn.largerThan('sm')]: {
            flexDirection:'row',
            flexGrow:1,  
        },
    },
    categoryMobileContainer:{
        width:324,
        height: 90,
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',

     
    },
    categoryContainer: {
            width:400,
            height: 160,
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            justifyContent:'center',
     
    },

    categoryContentLayout: {
        justifyContent:'flex-start',
        [theme.fn.largerThan('sm')]: {
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },

    backgroundImageStyle: {
        height:90,

        [theme.fn.largerThan('sm')]: {
            height:240,
        },
    },


}))