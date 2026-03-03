import { z } from 'zod';

import { loginSchema, registerSchema } from './schema';

////////// Работа с формами авторизации //////////
export type TLoginSchema = z.infer<typeof loginSchema>;
export type TRegisterSchema = z.infer<typeof registerSchema>;

export type TAuthProps = { required: boolean; label: string; placeholder?: string };

////////// Работа с запросами //////////
export type TGoogleUser = {
  id: string;
  email: string;
  name: string | null;
  avatar: string | null;
};

export type TGoogleAuthResponse = {
  accessToken: string;
  user: TGoogleUser;
};
