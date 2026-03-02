import { registerSchema, TAuthProps, TRegisterSchema } from "@/entities/auth"

export type TRegisterConfig = {
  schema: typeof registerSchema;
  defaultValues: TRegisterSchema;
  fields: Record<keyof TRegisterSchema, TAuthProps>;
}