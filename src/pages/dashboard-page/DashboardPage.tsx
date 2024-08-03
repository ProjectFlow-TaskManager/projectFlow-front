'use client';
import React from 'react';
import { Button, Flex, Stack, Text, Title } from '@mantine/core';
import { IconClipboardList } from '@tabler/icons-react';

import ProjectList from '@/features/ProjectsList/ProjectList';
import SearchProject from '@/features/SearchProject/SearchProject';

import PageWrapper from '@/shared/ui/PageWrapper/PageWrapper';

const DashboardPage = () => {
  return (
    <PageWrapper>
      <Stack>
        <Flex gap={5} justify={'space-between'} align={'flex-end'}>
          <Stack>
            <Title order={1}>Проекты</Title>
            <Text size="sm" c={'gray'}>
              Выбирете существующий проект или создайте новый
            </Text>
          </Stack>
          <Button
            size={'md'}
            variant={'light'}
            color="orange"
            leftSection={<IconClipboardList size={21} />}
          >
            Создать проект
          </Button>
        </Flex>
        <SearchProject value={''} onChange={() => console.log('value')} />
        <ProjectList />
      </Stack>
    </PageWrapper>
  );
};

export default DashboardPage;
