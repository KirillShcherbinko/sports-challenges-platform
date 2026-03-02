import { z } from 'zod';

import { MAX_NAME_LENGTH, MAX_PASSWORD_LENGTH, MIN_NAME_LENGTH, MIN_PASSWORD_LENGTH } from './consts';

const noemptyFieldSchema = z.string().nonempty('Поле обязателено');

const usernameSchema = z
  .string()
  .nonempty('Имя пользователя обязателено')
  .min(MIN_NAME_LENGTH, `Минимальная длина имени: ${MIN_PASSWORD_LENGTH}`)
  .max(MAX_NAME_LENGTH, `Максимальная длина имени: ${MAX_PASSWORD_LENGTH}`);

const emailSchema = z.email('Неверный Email').nonempty('Email обязателен');

const passwordSchema = z
  .string()
  .nonempty('Пароль обязателен')
  .min(MIN_PASSWORD_LENGTH, `Минимальная длина пароля: ${MIN_PASSWORD_LENGTH}`)
  .max(MAX_PASSWORD_LENGTH, `Максимальная длина пароля: ${MAX_PASSWORD_LENGTH}`)
  .regex(/[0-9]/, 'Пароль должен содержать цифру')
  .regex(/[A-ZА-Я]/, 'Пароль должен содержать заглавную букву');

const agreeToTermsSchema = z.boolean().refine((val) => val === true, {
  message: 'Вы должны согласиться с условиями',
});

export const loginSchema = z.object({
  email: noemptyFieldSchema,
  password: noemptyFieldSchema,
});

export const registerSchema = z.object({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
  agreeToTerms: agreeToTermsSchema,
});
