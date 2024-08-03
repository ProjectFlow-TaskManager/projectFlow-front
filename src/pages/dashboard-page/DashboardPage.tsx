'use client';
import React from 'react';
import { Button, Group, Stack, Text, Title } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

import ProjectList from '@/features/ProjectsList/ProjectList';
import SearchProject from '@/features/SearchProject/SearchProject';

import PageWrapper from '@/shared/ui/PageWrapper/PageWrapper';

const DashboardPage = () => {
  return (
    <PageWrapper>
      <Stack>
        <Group gap={5} justify={'space-between'}>
          <Stack>
            <Title order={1}>Дашборд</Title>
            <Text size="sm" c={'gray'}>
              Выбирете существующий проект или создайте новый
            </Text>
          </Stack>
          <Button size={'md'} variant={'outline'} leftSection={<IconPlus size={21} />}>
            Создать проект
          </Button>
        </Group>
        <SearchProject value={''} onChange={() => console.log('value')} />
        <ProjectList />
      </Stack>
    </PageWrapper>
  );
};

export default DashboardPage;
