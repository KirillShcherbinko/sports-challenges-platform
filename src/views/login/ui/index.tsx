import { Divider, Stack, Text, Title } from '@mantine/core';

import { LoginForm } from '@/features/login-form';
import { GoogleAuthButton } from '@/features/google-auth-button';

export const LoginPage = () => {
  return (
    <Stack>
      <Title component="h1">Войдите в аккаунт</Title>

      <Text size="lg" fw={500} c="bright">
        Заполните поля снизу для входа
      </Text>

      <GoogleAuthButton/>

      <Divider
        label="Или"
        labelPosition="center"
        my="lg"
        styles={{ label: { color: 'var(--mantine-color-bright)', opacity: 0.85 } }}
      />

      <LoginForm />
    </Stack>
  );
};
