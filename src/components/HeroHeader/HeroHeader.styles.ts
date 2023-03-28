import { createStyles, DefaultMantineColor } from "@mantine/core";

interface IUseHeroStylesProps {
  color: DefaultMantineColor;
}

const useHeroHeaderStyles = createStyles(
  (theme, { color }: IUseHeroStylesProps) => ({
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
  })
);

export default useHeroHeaderStyles;
