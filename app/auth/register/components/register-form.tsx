'use client'
import { Controller, FormProvider, useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAxios } from "@/hooks/use-axios"
import { Button } from "@/components/ui/button"

export const registerSchema = z.object({
    fullName: z.string().max(50),
    username: z.string().max(50),
    email: z.string().email({ message: 'O e-mail não é válido.' }),
    password: z.string().min(6, { message: 'A senha deve conter no mínimo 6 caracteres.' }),
    //confirmPassword: z.string().min(6, { message: 'A senha deve conter no mínimo 6 caracteres.' })
})
/* .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "As senhas não coincidem.",
            path: ['confirmPassword']
        })
    }
}) */

export type User = z.infer<typeof registerSchema>

export default function RegisterForm() {
    const { response, error, loading, refetch } = useAxios({
        method: "POST",
        url: "/api/auth/register",
    })

    const methods = useForm<User>({
        resolver: zodResolver(registerSchema),
    })

    const onSubmit = async (data: User) => {
        try {
            await refetch({
                method: 'POST',
                url: "/api/auth/register",
                data
            })
            methods.reset()
        } catch (error) {
            console.error("Erro ao realizar o cadastro.", error)
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
                    {methods.formState.errors.fullName && <FormMessage>{methods.formState.errors.fullName.message}</FormMessage>}
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
                    {methods.formState.errors.username && <FormMessage>{methods.formState.errors.username.message}</FormMessage>}
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
                    {methods.formState.errors.email && <FormMessage>{methods.formState.errors.email.message}</FormMessage>}
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
                    {methods.formState.errors.password && <FormMessage>{methods.formState.errors.password.message}</FormMessage>}
                </FormItem>

                {/* <FormItem>
                <FormLabel htmlFor="confirmPassword">Confirme a Senha:</FormLabel>
                <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field }) => (
                        <FormControl>
                            <Input id="confirmPassword" type="password" {...field} />
                        </FormControl>
                    )}
                />
                {errors.confirmPassword && <FormMessage>{errors.confirmPassword.message}</FormMessage>}
            </FormItem> */}

                <Button type="submit" disabled={loading}>
                    {loading ? 'Carregando...' : 'Confirmar'}
                </Button>

                {error && <p>Ocorreu um Erro: {error}</p>}
                {response && <p>Cadastro Realizado com Sucesso!</p>}
            </form>
        </FormProvider>
    )
}