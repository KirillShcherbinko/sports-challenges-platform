import { Divider, Stack, Text, Title } from '@mantine/core';

import { GoogleAuthButton } from '@/features/google-auth-button';
import { RegisterForm } from '@/features/register-form';

export const RegisterPage = () => {
  return (
    <Stack>
      <Title component="h1">Создайте аккаунт</Title>

      <Text size="lg" fw={500} c="bright">
        Заполните поля снизу для регистрации
      </Text>

      <GoogleAuthButton />

      <Divider label="Или" labelPosition="center" my="lg" c="var(--mantine-color-grey-4)" />

      <RegisterForm />
    </Stack>
  );
};
