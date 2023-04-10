import { Stack, Text, Title } from "@mantine/core";
import React from "react";
import useStackInfoboxStyles from "./StackInfobox.styles";

export interface IStackInfoboxProps {
  title: string;
  description: string;
  bottomSection: React.ReactNode;
}

function StackInfobox({
  bottomSection,
  title,
  description,
}: IStackInfoboxProps) {
  const { classes } = useStackInfoboxStyles();
  return (
    <Stack>
      <Title order={4} weight={500} className={classes.title}>
        {title}
      </Title>
      <Text className={classes.content}>{description}</Text>
      {bottomSection}
    </Stack>
  );
}

export default StackInfobox;
