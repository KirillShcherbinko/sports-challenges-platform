import { useRouter } from 'next/navigation';

import { useMutation } from '@tanstack/react-query';

import { googleAuth } from '@/entities/auth';
import { useGoogleLogin } from '@react-oauth/google';

export const useGoogleAuth = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationKey: ['google-auth'],
    mutationFn: (credintial: string) => googleAuth(credintial),
    onSuccess: () => {
      router.push('/profile');
    },
    onError: (error) => {
      console.error(error.message);
    },
  });

  const mutate = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      if (tokenResponse.code) {
        mutation.mutate(tokenResponse.code);
      }
    },
    onError: () => {
      console.error('Ошибка при попытке входа через Google');
    },
    flow: 'auth-code',
  });

  return { ...mutation, mutate };
};
