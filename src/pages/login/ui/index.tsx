import { Divider, Paper, Text, Title } from '@mantine/core';

import { LoginForm } from '@/features/login-form';

export const LoginPage = () => {
  return (
    <Paper radius="md" p="lg" withBorder>
      <Title component="h1">Войдите в аккаунт</Title>

      <Text size="lg" fw={500} c="bright">
        Заполните поля снизу для входа
      </Text>

      <Divider
        label="Или"
        labelPosition="center"
        my="lg"
        styles={{ label: { color: 'var(--mantine-color-bright)', opacity: 0.85 } }}
      />

      <LoginForm />
    </Paper>
  );
};
