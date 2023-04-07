import { createStyles } from "@mantine/core";

const useCourseDescriptionCardStyles = createStyles((theme) => ({
  labelsCard: {
    [theme.fn.largerThan("sm")]: {
      gap: "3rem",
    },
  },
}));

export default useCourseDescriptionCardStyles;
