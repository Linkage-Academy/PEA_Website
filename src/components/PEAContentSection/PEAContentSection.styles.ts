import { createStyles } from "@mantine/core";

const usePEAContentSectionStyles = createStyles((theme) => ({
  grid: {
    display: "grid",

    [theme.fn.largerThan("sm")]: {
        gridTemplateColumns:"auto auto",
        columnGap:"40px"
    },
  },

  textContentStyle:{
    fontSize:"1.25rem",
  },

  listContentStyle:{
    fontSize:"1.063rem"
  }
}))

export default usePEAContentSectionStyles;