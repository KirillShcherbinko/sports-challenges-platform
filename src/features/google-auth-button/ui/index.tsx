'use client';

import { Button, Group, Text } from '@mantine/core';
import { IconBrandGoogleFilled } from '@tabler/icons-react';

import { useGoogleAuth } from '../api/use-google-auth';
import { GoogleIcon } from './google-icon';

export const GoogleAuthButton = () => {
  const { isPending, mutate } = useGoogleAuth();

  return (
    <Button variant="default" loading={isPending} onClick={() => mutate()}>
      <Group gap={8}>
        <GoogleIcon />
        <Text fw={600}>Войти с Google</Text>
      </Group>
    </Button>
  );
};
