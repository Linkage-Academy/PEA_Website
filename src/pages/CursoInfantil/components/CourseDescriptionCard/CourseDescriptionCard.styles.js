import {createStyles} from '@mantine/core';

export const useCourseDescriptionCardStyles = createStyles((theme) => ({
    labelsCard: {
        [theme.fn.largerThan("sm")]: {
            gap: "4rem"
        }
    }
}))