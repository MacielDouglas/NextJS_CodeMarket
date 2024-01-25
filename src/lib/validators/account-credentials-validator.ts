import { z } from "zod"

export const AuthCredentialValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {message: 'a senha deve ter pelo menos 8 caracteres'}),
})

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialValidator>