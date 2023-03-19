import {createStyles} from '@mantine/core';

export const useHomeHeroStyles = createStyles((theme) => ({
    header: {
        display: 'flex',
        border: "none",
        justifyContent: 'space-between',
        backgroundColor: "transparent",

        [theme.fn.largerThan('sm')]: {
            backgroundColor: theme.colors["red"][7],
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
        },
    },

    headerLogo: {
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
    },

    activeLink: {
        fontWeight: 700,
        textDecorationLine: "underline",
        textDecorationThickness: "0.125rem",
        textUnderlineOffset: "0.25rem",
    },

    desktopNavbar: {
        display: "none",
        fontSize: theme.fontSizes.md,
        fontWeight: 600,
        color: "white",

        [theme.fn.largerThan('sm')]: {
            display: "flex"
        },
    },

    desktopNavbarCTA: {
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.26))",
        borderRadius: theme.radius.sm
    },

    mainHeroText: {
        maxWidth: "47%",
    },

    mainHeroImage: {
        flexGrow: 1,
    },

    rightSidebar: {
        height: "100%",
        width: "25%",
        backgroundColor: theme.colors["red"][6],
        position: "absolute",
        zIndex: -1,
        alignSelf: "flex-end",

        [theme.fn.largerThan('sm')]: {
            display: "none"
        }
    }
}))