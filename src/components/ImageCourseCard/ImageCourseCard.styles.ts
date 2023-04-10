import { createStyles } from "@mantine/core";

const useImageCourseCardStyles = createStyles((theme) => ({
  card: {
    padding: "1rem",
    [theme.fn.largerThan("sm")]: {
      padding: "2rem",
    },
  },

  titleSection: {
    fontSize: 20,
    fontWeight: 500,

    [theme.fn.largerThan("sm")]: {
      fontSize: 24,
    },
  },

  titleCardSection: {
    fontSize: 16,
    fontWeight: 700,
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    fontFamily: "Open Sans",

    [theme.fn.largerThan("sm")]: {
      fontSize: 24,
      fontWeight: 700,
    },
  },

  content: {
    gridArea: "content",
    fontSize: 14,
    fontWeight: "bold",
    [theme.fn.largerThan("sm")]: {
      fontSize: 16,
    },
  },
}));

export default useImageCourseCardStyles;
