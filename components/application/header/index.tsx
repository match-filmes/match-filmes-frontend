'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { MovieIcon } from '@/components/application/icons/movie-icon'
import { SearchIcon } from '@/components/application/icons/search-icon'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const { user, logout } = useAuth()
  const router = useRouter()

  const getInitials = (fullName: string) => {
    const nameParts = fullName.split(' ')
    const firstInitial = nameParts[0]?.[0] || ''
    const lastInitial =
      nameParts.length > 1 ? nameParts[nameParts.length - 1][0] : ''
    return (firstInitial + lastInitial).toUpperCase()
  }

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 px-4 md:px-6 h-14 flex items-center justify-between">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MovieIcon className="h-12 w-12" />
        <span className="text-lg font-bold">{title}</span>
      </Link>
      {user && (
        <>
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/inicio"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Início
            </Link>
            <Link
              href="/filmes"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Filmes
            </Link>
            <Link
              href="/series"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Séries
            </Link>
            <Link
              href="/kids"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Kids
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <SearchIcon className="h-5 w-5" />
              <span className="sr-only">Pesquisar</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>{getInitials(user?.fullName)}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => router.push('/conta')}>
                  Minha Conta
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/configuracoes')}>
                  Configurações
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      )}
    </header>
  )
}
