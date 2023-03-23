import {createStyles} from '@mantine/core';

export const useGroupBannerStyles = createStyles((theme) => ({

    titleStyle:{
        fontSize:'0.75rem',
    },
    cardShadow: {
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    },
    bannerCardLayout: {
        justifyContent:"center"
    }
    

    
}))