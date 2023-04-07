import { createStyles, DefaultMantineColor } from "@mantine/core";

interface IUseHeroStylesProps {
  color: DefaultMantineColor;
}

const useHeroStyles = createStyles((theme, { color }: IUseHeroStylesProps) => ({
  mainHero: {
    flexGrow: 1,
  },

  mainTitle: {
    fontSize: "1.6rem",
    fontWeight: "normal",

    [theme.fn.largerThan("sm")]: {
      fontSize: "3.4rem",
      fontWeight: "bolder",
    },
  },

  mainHeroImage: {
    flexGrow: 1,
  },

  rightSidebar: {
    height: "100%",
    width: "25%",
    backgroundColor: theme.colors[color][6],
    position: "absolute",
    zIndex: -1,
    alignSelf: "flex-end",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

export default useHeroStyles;
