import { createStyles } from "@mantine/core";

const useStackInfoboxStyles = createStyles((theme) => ({
  title: {
    fontSize: 20,

    [theme.fn.largerThan("sm")]: {
      fontSize: 24,
    },
  },

  content: {
    fontSize: 14,

    [theme.fn.largerThan("sm")]: {
      fontSize: 16,
    },
  },
}));

export default useStackInfoboxStyles;
