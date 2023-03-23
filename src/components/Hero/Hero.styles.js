import {createStyles} from '@mantine/core';


export const useHeroStyles = createStyles((theme, {color}) => ({
    
    mainHero: {
        flexGrow: 1
    },

    mainTitle: {
        fontSize: "1.6rem",
        fontWeight: "500",

        [theme.fn.largerThan('sm')]: {
            fontSize: "3.4rem",
            fontWeight: "600",
        }
    },

    mainHeroImage: {
        flexGrow: 1,
    },

    rightSidebar: {
        height: "100%",
        width: "25%",
        backgroundColor: theme.colors[color][6],
        position: "absolute",
        zIndex: -1,
        alignSelf: "flex-end",

        [theme.fn.largerThan('sm')]: {
            display: "none"
        }
    }
}))