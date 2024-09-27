'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User, Bell, Moon, Shield } from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'

export default function EnhancedSettingsPage() {
  const { user } = useAuth()

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 max-w-5xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-primary">Configurações</h1>
      </div>

      <Tabs defaultValue="account" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4 gap-4">
          <TabsTrigger
            value="account"
            className="flex items-center justify-center gap-2"
          >
            <User size={18} />
            Conta
          </TabsTrigger>
          <TabsTrigger
            value="appearance"
            className="flex items-center justify-center gap-2"
          >
            <Moon size={18} />
            Aparência
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="flex items-center justify-center gap-2"
          >
            <Bell size={18} />
            Notificações
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="flex items-center justify-center gap-2"
          >
            <Shield size={18} />
            Segurança
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Conta</CardTitle>
              <CardDescription>
                Atualize suas informações pessoais aqui.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" defaultValue={user?.fullName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue={user?.email} />
              </div>
              <Button className="w-full sm:w-auto">Salvar Alterações</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Aparência</CardTitle>
              <CardDescription>
                Personalize a aparência do seu aplicativo.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="theme">Tema</Label>
                <Select>
                  <SelectTrigger id="theme">
                    <SelectValue placeholder="Selecione um tema" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Claro</SelectItem>
                    <SelectItem value="dark">Escuro</SelectItem>
                    <SelectItem value="system">Sistema</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full sm:w-auto">Aplicar Tema</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Notificações</CardTitle>
              <CardDescription>
                Gerencie suas preferências de notificação.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing_emails">Emails de marketing</Label>
                  <p className="text-sm text-muted-foreground">
                    Receba atualizações sobre novos recursos e promoções.
                  </p>
                </div>
                <Switch id="marketing_emails" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="security_emails">Emails de segurança</Label>
                  <p className="text-sm text-muted-foreground">
                    Receba alertas importantes sobre a segurança da sua conta.
                  </p>
                </div>
                <Switch id="security_emails" defaultChecked />
              </div>
              <Button className="w-full sm:w-auto">Salvar Preferências</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Segurança da Conta</CardTitle>
              <CardDescription>
                Mantenha sua conta segura alterando sua senha regularmente.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current_password">Senha atual</Label>
                <Input id="current_password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new_password">Nova senha</Label>
                <Input id="new_password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm_password">Confirmar nova senha</Label>
                <Input id="confirm_password" type="password" />
              </div>
              <Button className="w-full sm:w-auto">Atualizar senha</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
