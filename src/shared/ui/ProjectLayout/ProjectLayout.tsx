'use client';

import React from 'react';
import { Container, Flex, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Navbar from '@/features/Navbar/Navbar';

import styles from './ProjectLayout.module.scss';

const ProjectLayout = ({ children }: any) => {
  return (
    <Flex>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <Flex className={styles.container} direction={'column'} p={25}>
        {children}
      </Flex>
    </Flex>
  );
};

export default ProjectLayout;
