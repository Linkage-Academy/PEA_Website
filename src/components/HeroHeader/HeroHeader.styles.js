import {createStyles} from "@mantine/core";

export const useHeroHeaderStyles = createStyles((theme) => ({
    rightSidebar: {
        height: "100%",
        width: "25%",
        backgroundColor: theme.colors["teal"][6],
        position: "absolute",
        zIndex: -1,
        alignSelf: "flex-end",

        [theme.fn.largerThan('sm')]: {
            display: "none"
        }
    }
}))