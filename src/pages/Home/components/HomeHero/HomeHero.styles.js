import { createStyles} from '@mantine/core';

export const useHomeHeroStyles = createStyles((theme) => ({
    wrapper: {
        //backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: 100,
    },
    imageStyle: {
        height:600
    },
    header_style: {
        display: 'flex',
        //alignContent: 'flex-end',
        justifyContent: 'space-between'
        
        //marginLeft:900,
    },
    text_white_overlay: {
        color:'white',
        textShadow:'0.05rem 0.05rem grey',
        fontSize: '1rem',

    },
    colorWhite: {
        color: 'white'
    }

}))