// Components
import {
  ActionIcon,
  Box,
  Card,
  DefaultMantineColor,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconAward,
  IconClipboardCheck,
  IconFriends,
  IconSchool,
} from "@tabler/icons-react";
import HeroHeader from "../../components/HeroHeader";
import { IGroupInfoboxProps } from "../../components/GroupInfobox/GroupInfobox";
import { IValuesSectionprops } from "../../components/ValuesSection/ValuesSection";
import AboutUsSection, {
  IAboutUsSectionprops,
} from "../../components/AboutUsSection/AboutUsSection";

// Interfaces
// style
import useHomePageTemplateStyles from "./HomePageTemplate.styles";

// React

export interface IHomePageTemplateProps {
  accentColor: DefaultMantineColor;
  hero: {
    title: string;
    rightSection: React.ReactNode;
  };
  infoFirst: IGroupInfoboxProps;
  valuesInfo: IValuesSectionprops;
  aboutUsInfo: IAboutUsSectionprops;
  techCenterInfo: {
    title: string;
    description: string;
    techImg: string;
  };
}

function HomePageTemplate({
  accentColor,
  techCenterInfo,
  hero,
  infoFirst,
  valuesInfo,
  aboutUsInfo,
}: IHomePageTemplateProps) {
  const theme = useMantineTheme();
  const isLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm} )`);
  const xPadding = isLargeScreen ? 128 : "xs";
  const { classes } = useHomePageTemplateStyles();

  return (
    <Stack spacing="xl">
      <HeroHeader
        title={hero.title}
        color={accentColor}
        rightSection={hero.rightSection}
      />
      <Stack px={xPadding} spacing="sm">
        <Group align="start" noWrap={!!isLargeScreen}>
          <Box>
            <Box>
              <Title>{techCenterInfo.title}</Title>
              <Text>{techCenterInfo.description}</Text>
            </Box>
          </Box>
          <Image src={techCenterInfo.techImg} />
        </Group>

        <Stack spacing="md">
          <Title>Nuestros Valores</Title>
          <SimpleGrid
            cols={4}
            breakpoints={[{ maxWidth: "36rem", cols: 1, spacing: "sm" }]}
          >
            <Card
              withBorder
              shadow="xs"
              sx={{
                background:
                  "linear-gradient(160deg, rgba(240,62,62,1) 0%, rgba(201,42,42,1) 100%)",
              }}
            >
              <Stack spacing="xs" align="center" sx={{ textAlign: "center" }}>
                <ActionIcon variant="transparent" size="xl">
                  <IconFriends size="3rem" color="white" />
                </ActionIcon>
                <Box>
                  <Text fz="lg" fw={700} color="white">
                  Sastifacción
                  </Text>
                  <Text fz="md" color="white">
                     del cliente
                  </Text>
                </Box>
              </Stack>
            </Card>

            <Card
              withBorder
              shadow="xs"
              sx={{
                background:
                  "linear-gradient(160deg, rgba(240,62,62,1) 0%, rgba(201,42,42,1) 100%)",
              }}
            >
              <Stack spacing="xs" align="center" sx={{ textAlign: "center" }}>
                <ActionIcon variant="transparent" size="xl">
                  <IconAward size="3rem" color="white" />
                </ActionIcon>
                <Box>
                  <Text fz="lg" fw={700} color="white">
                  Comunicación 
                  </Text>
                  <Text fz="md" color="white">
                  con Respeto 
                  </Text>
                </Box>
              </Stack>
            </Card>

            <Card
              withBorder
              shadow="xs"
              sx={{
                background:
                  "linear-gradient(160deg, rgba(240,62,62,1) 0%, rgba(201,42,42,1) 100%)",
              }}
            >
              <Stack spacing="xs" align="center" sx={{ textAlign: "center" }}>
                <ActionIcon variant="transparent" size="xl">
                  <IconSchool size="3rem" color="white" />
                </ActionIcon>
                <Box>
                  <Text fz="lg" fw={700} color="white">
                    Integridad    
                  </Text>
                  <Text fz="md" color="white">
                    en procesos 
                  </Text>
                </Box>
              </Stack>
            </Card>

            <Card
              withBorder
              shadow="xs"
              sx={{
                background:
                  "linear-gradient(160deg, rgba(240,62,62,1) 0%, rgba(201,42,42,1) 100%)",
              }}
            >
              <Stack align="center" sx={{ textAlign: "center" }}>
                <ActionIcon variant="transparent" size="xl">
                  <IconClipboardCheck size="3rem" color="white" />
                </ActionIcon>
                <Box>
                  <Text fz="lg" fw={700} color="white">
                   Compromiso    
                  </Text>
                  <Text fz="md" color="white">
                    con colaboradores
                  </Text>
                </Box>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
        <AboutUsSection {...aboutUsInfo} />
      </Stack>
    </Stack>
  );
}

export default HomePageTemplate;
