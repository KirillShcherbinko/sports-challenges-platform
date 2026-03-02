import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';

import { TRegisterSchema } from '@/entities/auth';

import { REGISTER_DATA } from '../config/register-data';

export const RegisterSchema = () => {
  const router = useRouter();

  const { schema, defaultValues, fields } = REGISTER_DATA;

  const { formState, handleSubmit, register } = useForm<TRegisterSchema>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = (formValues: TRegisterSchema) => {
    console.log(formValues);
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <TextInput
          key="username"
          error={formState.errors['username']?.message}
          {...fields['username']}
          {...register('username')}
        />
        <TextInput key="email" error={formState.errors['email']?.message} {...fields['email']} {...register('email')} />
        <PasswordInput
          key="password"
          error={formState.errors['password']?.message}
          {...fields['password']}
          {...register('password')}
        />
        <Checkbox
          key="agreeToTerms"
          error={formState.errors['agreeToTerms']?.message}
          {...fields['agreeToTerms']}
          {...register('agreeToTerms')}
        />
        <Button type="submit">Войти</Button>
      </Stack>
    </form>
  );
};
