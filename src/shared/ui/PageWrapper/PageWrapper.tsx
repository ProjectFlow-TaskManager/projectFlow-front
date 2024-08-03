import React from 'react';
import { Container } from '@mantine/core';

import { PageWrapperInterface } from '@/shared/ui/PageWrapper/PageWrapper.interface';

import styles from './PageWrapper.module.scss';

const PageWrapper = ({ children }: PageWrapperInterface) => {
  return (
    <Container size={'lg'} className={styles.container}>
      {children}
    </Container>
  );
};

export default PageWrapper;
