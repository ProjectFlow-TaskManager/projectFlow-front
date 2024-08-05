import React from 'react';
import { Grid } from '@mantine/core';

import ProjectCard from '@/entities/project/ui/ProjectCard/ProjectCard';

const ProjectList = () => {
  return (
    <Grid>
      <Grid.Col span={3}>
        <ProjectCard />
      </Grid.Col>
      <Grid.Col span={3}>
        <ProjectCard />
      </Grid.Col>
      <Grid.Col span={3}>
        <ProjectCard />
      </Grid.Col>
      <Grid.Col span={3}>
        <ProjectCard />
      </Grid.Col>
    </Grid>
  );
};

export default ProjectList;
