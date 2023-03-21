import { createStyles} from '@mantine/core';

export const useBannerCoursestStyles = createStyles((theme) => ({

    bannerButton: {
        width:'50%',
        height:'50px',
        fontSize: '0.75rem',
        borderRadius: '10px',
    },

    mobileBannerButton: {
        fontSize: '0.75rem',
        borderRadius: '10px',
    },

    textStyle: {
        fontFamily: 'Merriweather',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '1.25rem',
        lineHeight: '25px',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },

    cardShadow: {
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    }



}))