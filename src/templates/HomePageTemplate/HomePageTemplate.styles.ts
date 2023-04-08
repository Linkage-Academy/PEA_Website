import { createStyles } from "@mantine/core";

const useHomePageTemplateStyles = createStyles((theme) => ({
  grid: {
    display: "grid",
    gridTemplateAreas: `"why" "card" "playing"`,
    gridGap: "1rem 10rem",

    [theme.fn.largerThan("sm")]: {
        gridTemplateColumns:"auto auto auto"
    },
  },

}))

export default useHomePageTemplateStyles;