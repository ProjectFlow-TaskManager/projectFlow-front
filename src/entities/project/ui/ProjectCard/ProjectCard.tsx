import React from 'react';
import { Avatar, Box, Card, Flex, Group, Stack, Text, Title } from '@mantine/core';
import { IconClipboardList } from '@tabler/icons-react';
import { IconListCheck } from '@tabler/icons-react';
import Link from 'next/link';

const ProjectCard = () => {
  return (
    <Link href={{ pathname: `/${1}` }} style={{ textDecoration: 'none' }}>
      <Card shadow="sm" padding="xs" radius="md" withBorder>
        <Flex direction={'column'} gap={15}>
          <Flex direction={'row'} gap={10}>
            <Avatar color="orange" radius="sm" size={'sm'}>
              <IconClipboardList size="1rem" />
            </Avatar>
            <Stack gap={1}>
              <Title order={5}>Допустим длинное название</Title>
              <Box w={190}>
                <Text truncate="end" size={'xs'} c={'gray'}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat
                  id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae
                  magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
                </Text>
              </Box>
            </Stack>
          </Flex>
          <Group justify={'space-between'}>
            <Group gap={2}>
              <IconListCheck size="1.2rem" color={'gray'} />
              <Text size={'xs'}>1</Text>
            </Group>
            <Group gap={2}>
              <Avatar radius="xl" size={'sm'} />
              <Text size={'xs'}>Создатель</Text>
            </Group>
          </Group>
        </Flex>
      </Card>
    </Link>
  );
};

export default ProjectCard;
