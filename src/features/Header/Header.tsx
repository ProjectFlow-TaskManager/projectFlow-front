'use client';
import React from 'react';
import { Burger, Flex, Group, Text } from '@mantine/core';
import Link from 'next/link';

import UserBlock from '@/entities/user/ui/UserBlock/UserBlock';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={{ pathname: '/' }} className={styles.link}>
        <Text size={'md'} fw={500} c={'black'}>
          Проекты
        </Text>
      </Link>
      <UserBlock />
    </header>
  );
};

export default Header;
