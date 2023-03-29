import { createStyles } from "@mantine/core";

const useCoursePageTemplateStyles = createStyles((theme) => ({
  grid: {
    display: "grid",
    gridTemplateAreas: `"why" "card" "playing"`,
    gridGap: "1rem 10rem",

    [theme.fn.largerThan("sm")]: {
      gridTemplateAreas: `
                "why  card" 
                "playing  card"
            `,
    },
  },
  gridWhy: {
    gridArea: "why",
  },
  gridCard: {
    gridArea: "card",
  },
  gridPlaying: {
    gridArea: "playing",
  },
}));

export default useCoursePageTemplateStyles;
