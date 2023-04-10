import { createStyles, DefaultMantineColor } from "@mantine/core";

interface IUseColoredHeaderProps {
  color: DefaultMantineColor;
}

const useColoredHeaderStyles = createStyles(
  (theme, { color }: IUseColoredHeaderProps) => ({
    header: {
      display: "flex",
      border: "none",
      justifyContent: "space-between",
      backgroundColor: "transparent",

      [theme.fn.largerThan("sm")]: {
        backgroundColor: theme.colors[color][7],
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },

    headerLogo: {
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      padding: theme.spacing.md,
      backgroundColor: theme.colors[color][6],
      borderBottomRightRadius: "10px",

      [theme.fn.largerThan("sm")]: {
        backgroundColor: "transparent",
      },
    },

    activeLink: {
      fontWeight: 700,
      textDecorationLine: "underline",
      textDecorationThickness: "0.125rem",
      textUnderlineOffset: "0.25rem",
    },

    desktopNavbar: {
      display: "none",
      fontSize: theme.fontSizes.md,
      fontWeight: 600,
      color: "white",

      [theme.fn.largerThan("sm")]: {
        display: "flex",
      },
    },

    desktopNavbarCTA: {
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.26))",
      borderRadius: theme.radius.sm,
    },
  })
);

export default useColoredHeaderStyles;
