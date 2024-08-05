import React from 'react';
import { Avatar, Flex, Text } from '@mantine/core';

const UserBlock = () => {
  return (
    <Flex align={'center'} gap={5}>
      <Avatar radius="lg" size={'md'} color={'orange'} />
    </Flex>
  );
};

export default UserBlock;
