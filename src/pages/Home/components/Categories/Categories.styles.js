import {createStyles} from '@mantine/core';

export const useCategoriesStyles = createStyles((theme) => ({

    cardButton: {
        textAlign: 'center',
        fontSize: '0.75rem',
    },

    heroFont: {
        lineHeight: 'normal',
        textAlign: 'left',
    },

    categoryLayout: {
        [theme.fn.largerThan('sm')]: {
            flexDirection:'row',
            justifyContent:'space-around',
            flexGrow:1,
        },
    },

    categoryContainer: {
        height: 3000,
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',

        [theme.fn.largerThan('sm')]: {
            height: 300
        }
    },

    categoryContentLayout: {
        [theme.fn.largerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        }
    },

    backgroundImageStyle: {
        height:90,

        [theme.fn.largerThan('sm')]: {
            height:240,
            
        }

    }


}))