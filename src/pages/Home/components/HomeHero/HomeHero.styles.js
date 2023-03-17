import { createStyles} from '@mantine/core';

export const useHomeHeroStyles = createStyles((theme) => ({
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
    },
    robotHeroImg:{
      
    },
    heroButton: {
        backgroundColor: '#E03131',
        textAlign:'center',
        fontSize: '0.8rem',
        padding: 0
    },
    heroFont: {
        lineHeight: 'normal',
        textAlign: 'left',
    },


}))