import {createStyles} from "@mantine/core";

export const useHomeHeroStyles = createStyles((theme) => ({
    container: {
        backgroundImage: "linear-gradient(135.9deg, #08476F 0%, rgba(8, 92, 104, 0.8) 95.52%);"
    },
    mainText: {
        color: "#FFFFFF !important",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        fontSize: 48,
        fontWeight: 700,
        wordWrap: "break-word"
    },
    CTA_AllCourses: {
        boxShadow: theme.shadows.xl,
    }
}))