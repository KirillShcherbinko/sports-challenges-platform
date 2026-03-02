import { z } from 'zod';

import { loginSchema, registerSchema } from './schema';

export type TLoginSchema = z.infer<typeof loginSchema>;
export type TRegisterSchema = z.infer<typeof registerSchema>;

export type TAuthProps = { required: boolean; label: string; placeholder?: string };
