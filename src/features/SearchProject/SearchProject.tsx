'use client';

import React from 'react';
import { Button, Group, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

import { SearchProjectInterface } from '@/features/SearchProject/SearchProject.interface';

import styles from './SearchProject.module.scss';

const SearchProject = ({ value, onChange }: SearchProjectInterface) => {
  return (
    <Group gap={10} className={styles.container}>
      <TextInput
        placeholder="Поиск по проектам"
        variant={'filled'}
        radius={'sm'}
        size={'md'}
        className={styles.search}
        leftSection={<IconSearch size={20} />}
        value={value}
        onChange={onChange}
      />
    </Group>
  );
};

export default SearchProject;
