'use client';
import React from 'react';
import { ActionIcon, Button, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMenu } from '@tabler/icons-react';
import ClassNames from 'classnames';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <Flex direction={'column'} className={ClassNames(styles.container)}>
      <ActionIcon size={'sm'} onClick={toggle} variant={'filled'} className={styles.btn}>
        <IconMenu />
      </ActionIcon>
      <div className={ClassNames(styles.content, styles.transition, !opened ? styles.opened : '')}>
        [Navbar]
      </div>
    </Flex>
  );
};

export default Navbar;
