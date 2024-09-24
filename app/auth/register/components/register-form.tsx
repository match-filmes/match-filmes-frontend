'use client'

import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import z from 'zod'
import { useAuth } from '@/contexts/auth-context'
import { useState } from 'react'
import { RegisterData } from '@/interfaces/auth-data'

export const registerSchema = z.object({
  fullName: z.string().max(50).nonempty('O nome completo é obrigatório.'),
  username: z.string().max(50).nonempty('O usuário é obrigatório.'),
  email: z
    .string()
    .email({ message: 'O e-mail não é válido.' })
    .nonempty('O e-mail é obrigatório.'),
  password: z
    .string()
    .min(6, { message: 'A senha deve conter no mínimo 6 caracteres.' })
    .nonempty('A senha é obrigatória.'),
})

export default function RegisterForm() {
  const methods = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  })

  const { register } = useAuth()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')

  const onSubmit = async (data: RegisterData) => {
    setLoading(true)
    setError('')
    setSuccessMessage('')
    try {
      const result = await register(data)
      if (result.success) {
        methods.reset()
        setSuccessMessage('Cadastro Realizado com Sucesso!')
      } else {
        setError(result.error || 'Erro ao realizar o cadastro.')
      }
    } catch (error) {
      setError('Erro ao realizar o cadastro.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormItem>
          <FormLabel htmlFor="fullName">Nome Completo:</FormLabel>
          <Controller
            name="fullName"
            control={methods.control}
            render={({ field }) => (
              <FormControl>
                <Input id="fullName" {...field} />
              </FormControl>
            )}
          />
          {methods.formState.errors.fullName && (
            <FormMessage>
              {methods.formState.errors.fullName.message}
            </FormMessage>
          )}
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="username">Nome de Usuário:</FormLabel>
          <Controller
            name="username"
            control={methods.control}
            render={({ field }) => (
              <FormControl>
                <Input id="username" {...field} />
              </FormControl>
            )}
          />
          {methods.formState.errors.username && (
            <FormMessage>
              {methods.formState.errors.username.message}
            </FormMessage>
          )}
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="email">E-mail:</FormLabel>
          <Controller
            name="email"
            control={methods.control}
            render={({ field }) => (
              <FormControl>
                <Input id="email" type="email" {...field} />
              </FormControl>
            )}
          />
          {methods.formState.errors.email && (
            <FormMessage>{methods.formState.errors.email.message}</FormMessage>
          )}
        </FormItem>

        <FormItem>
          <FormLabel htmlFor="password">Senha:</FormLabel>
          <Controller
            name="password"
            control={methods.control}
            render={({ field }) => (
              <FormControl>
                <Input id="password" type="password" {...field} />
              </FormControl>
            )}
          />
          {methods.formState.errors.password && (
            <FormMessage>
              {methods.formState.errors.password.message}
            </FormMessage>
          )}
        </FormItem>

        <Button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Confirmar'}
        </Button>

        {error && <p>Ocorreu um Erro: {error}</p>}
        {successMessage && <p>{successMessage}</p>}
      </form>
    </FormProvider>
  )
}
