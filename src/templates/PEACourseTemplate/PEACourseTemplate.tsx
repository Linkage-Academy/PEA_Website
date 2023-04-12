// React
import { DefaultMantineColor, Stack, useMantineTheme } from "@mantine/core";

import { useMediaQuery } from "@mantine/hooks";

// Components
import ColoredHeader from "../../components/ColoredHeader";
import PEAContentSection from "../../components/PEAContentSection";
import PEAHero, { IPEAHeroProps } from "../../components/PEAHero/PEAHero";

// Interfaces
import { IPEAContentSectiosProps } from "../../components/PEAContentSection/PEAContentSection";

export interface IPEACourseTemplateProps {
  accentColor: DefaultMantineColor;
  PEAContentInfo: IPEAContentSectiosProps;
  PEAHeroInfo: IPEAHeroProps;
}

function PEACourseTemplate({
  accentColor,
  PEAContentInfo,
  PEAHeroInfo,
}: IPEACourseTemplateProps) {
  const theme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
  const xPadding = isLargeScreen ? 128 : "xs";
  return (
    <Stack spacing="xl">
      <ColoredHeader color={accentColor} />
      <PEAHero {...PEAHeroInfo} />
      <Stack px={xPadding} spacing="xl" pb={30}>
        <PEAContentSection {...PEAContentInfo} />
      </Stack>
    </Stack>
  );
}

export default PEACourseTemplate;
