import { createStyles } from "@mantine/core";

const useAboutUsStyles = createStyles((theme) => ({
  grid: {
    display: "grid",

    [theme.fn.largerThan("sm")]: {
        gridTemplateColumns:"auto auto"
    },
  },
}))

export default useAboutUsStyles;