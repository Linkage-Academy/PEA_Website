import {createStyles} from "@mantine/core";

export const useHeroHeaderStyles = createStyles((theme, props) => ({
    rightSidebar: {
        height: "100%",
        width: "25%",
        backgroundColor: props.color ? theme.colors[props.color][props.barColorIndex]: theme.colors["teal"][6], 
        position: "absolute",
        zIndex: -1,
        alignSelf: "flex-end",

        [theme.fn.largerThan('sm')]: {
            display: "none"
        }
    }
}))

//"teal"