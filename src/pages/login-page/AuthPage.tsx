import React from 'react';
import { Flex } from '@mantine/core';

import AuthForm from '@/features/LoginForm/AuthForm';

import PageWrapper from '@/shared/ui/PageWrapper/PageWrapper';

import styles from './AuthPage.module.scss';

const AuthPage = () => {
  return (
    <PageWrapper>
      <Flex justify="center" align="center" className={styles.container}>
        <AuthForm />
      </Flex>
    </PageWrapper>
  );
};

export default AuthPage;
