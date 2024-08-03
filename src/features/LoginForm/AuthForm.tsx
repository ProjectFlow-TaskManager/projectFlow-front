'use client';

import { Button, Center, Flex, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { IconAt, IconLock, IconUser } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './AuthForm.module.scss';

const AuthForm = () => {
  const pathname = usePathname();

  const register = pathname === '/register';

  return (
    <Flex direction={'column'} gap={13} w={500}>
      <Center>
        <Title order={3}> {register ? 'Зарегистрироваться' : 'Войти'}</Title>
      </Center>
      {register ? (
        <TextInput label={'Имя'} placeholder={'Имя'} leftSection={<IconUser size="1rem" />} />
      ) : null}
      <TextInput label={'Email'} placeholder={'Почта'} leftSection={<IconAt size="1rem" />} />
      <PasswordInput
        label={'Пароль'}
        placeholder={'Пароль'}
        leftSection={<IconLock size="1rem" />}
      />
      <Button fullWidth size={'sm'}>
        {register ? 'Зарегистрироваться' : 'Войти'}
      </Button>
      {!register ? (
        <Text size={'xs'}>
          Нет аккаунта?{' '}
          <Link href={{ pathname: '/register' }} className={styles.link}>
            <Text span c="blue" inherit>
              Зарегистрироваться
            </Text>
          </Link>
        </Text>
      ) : null}
    </Flex>
  );
};

export default AuthForm;
