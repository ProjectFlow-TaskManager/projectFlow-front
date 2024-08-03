import React from 'react';
import { Card, Text, Title } from '@mantine/core';

const ProjectCard = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={2}>This is h2 title</Title>
      <Text size={'xs'}>This is h2 title text</Text>
    </Card>
  );
};

export default ProjectCard;
