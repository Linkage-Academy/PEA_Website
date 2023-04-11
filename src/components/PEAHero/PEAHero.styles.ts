import { createStyles } from "@mantine/core";

const usePEAHeroStyles = createStyles((theme) => ({
    containerLayout:{
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        marginTop:0,
        height:'400px',
        width:'100%'
    },
    titleStyle:{
        color:"white",
        fontSize: "3.125rem"
    }

}))

export default usePEAHeroStyles;