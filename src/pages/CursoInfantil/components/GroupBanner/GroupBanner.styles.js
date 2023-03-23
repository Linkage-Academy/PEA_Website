import {createStyles} from '@mantine/core';

export const useGroupBannerStyles = createStyles((theme) => ({
    grid: {
        display: "grid",
        gridTemplateAreas: `"title title " "content image" "bottomSection bottomSection"`,

        [theme.fn.largerThan("sm")]: {
            gridTemplateAreas: `"title image" "content image"  "bottomSection image"`
        }
    },

    gridTitle: {
        gridArea: "title",
        fontSize: 20,

        [theme.fn.largerThan("sm")]: {
            fontSize: 24
        }
    },

    gridContent: {
        gridArea: "content",
        fontSize: 14,

        [theme.fn.largerThan("sm")]: {
            fontSize: 16
        }
    },

    gridImage: {
        gridArea: "image"
    },

    gridBottomSection: {
        gridArea: "bottomSection"
    }
}))