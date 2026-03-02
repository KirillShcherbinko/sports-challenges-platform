import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';

import { TLoginSchema } from '@/entities/auth';

import { LOGIN_DATA } from '../config/login-data';

export const LoginForm = () => {
  const router = useRouter();

  const { schema, defaultValues, fields } = LOGIN_DATA;

  const { formState, handleSubmit, register } = useForm<TLoginSchema>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = (formValues: TLoginSchema) => {
    console.log(formValues);
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <TextInput key="email" error={formState.errors['email']?.message} {...fields['email']} {...register('email')} />
        <PasswordInput
          key="password"
          error={formState.errors['password']?.message}
          {...fields['password']}
          {...register('password')}
        />
        <Button type="submit">Войти</Button>
      </Stack>
    </form>
  );
};
