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
import { Checkbox } from '@/components/ui/checkbox'
import z from 'zod'
import { useAuth } from '@/contexts/auth-context'
import { useState } from 'react'
import { LoginData } from '@/interfaces/auth-data'

const loginSchema = z.object({
  username: z.string().nonempty('O nome de usuário é obrigatório.'),
  password: z.string().nonempty('A senha é obrigatória.'),
  rememberUser: z.boolean(),
})

export default function LoginForm() {
  const methods = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { rememberUser: false },
  })

  const { login } = useAuth()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const onSubmit = async (data: LoginData) => {
    setLoading(true)
    setError('')
    try {
      const result = await login(data)
      if (result.success) {
        /* Handle successful login */
      } else {
        setError(result.error || 'Erro ao realizar o login.')
      }
    } catch (error) {
      setError('Erro ao realizar o login.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {/* Username Field */}
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

        {/* Password Field */}
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

        {/* Remember User Checkbox */}
        <FormItem>
          <FormLabel htmlFor="rememberUser">Lembrar Usuário:</FormLabel>
          <Controller
            name="rememberUser"
            control={methods.control}
            render={({ field }) => (
              <FormControl>
                <Checkbox
                  id="rememberUser"
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              </FormControl>
            )}
          />
        </FormItem>

        {/* Submit Button */}
        <Button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </Button>

        {/* Error Message */}
        {error && <p>Ocorreu um Erro: {error}</p>}
      </form>
    </FormProvider>
  )
}
