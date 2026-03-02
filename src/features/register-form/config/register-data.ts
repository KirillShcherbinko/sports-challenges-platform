import { registerSchema } from '@/entities/auth';

import { TRegisterConfig } from '../model/types';

export const REGISTER_DATA: TRegisterConfig = {
  schema: registerSchema,
  defaultValues: {
    username: '',
    email: '',
    password: '',
    agreeToTerms: false,
  },
  fields: {
    username: { required: true, label: 'Имя пользователя', placeholder: 'Ваше имя' },
    email: { required: true, label: 'Email', placeholder: 'example@mail.ru' },
    password: { required: true, label: 'Пароль', placeholder: '********' },
    agreeToTerms: { required: true, label: 'Принять пользовательское соглашение' },
  },
};
