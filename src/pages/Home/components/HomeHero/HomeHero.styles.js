import {createStyles} from '@mantine/core';

export const useHomeHeroStyles = createStyles((theme) => ({
    imageStyle: {
        height: 600
    },

    header: {
        display: 'flex',
        border: "none",
        justifyContent: 'space-between',

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
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        borderRadius: theme.radius.sm
    },

}))