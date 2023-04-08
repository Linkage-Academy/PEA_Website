import { createStyles } from "@mantine/core";

const useValuesSectionStyles = createStyles((theme) => ({
  grid: {
    display: "grid",


    [theme.fn.largerThan("sm")]: {
        gridTemplateColumns:"auto auto auto auto"
    },
  },
  valuesTitle:{
    fontSize: 20,
  }

}))

export default useValuesSectionStyles;