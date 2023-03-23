import {createStyles} from '@mantine/core';

export const useStackBannerStyles = createStyles((theme) => ({

    title: {
        fontSize: 20,

        [theme.fn.largerThan("sm")]: {
            fontSize: 24
        }
    },

    content: {
        fontSize: 14,

        [theme.fn.largerThan("sm")]: {
            fontSize: 16
        }
    },

}))