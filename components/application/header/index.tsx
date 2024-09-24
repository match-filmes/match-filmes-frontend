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

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 px-4 md:px-6 h-14 flex items-center justify-between">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MovieIcon className="h-12 w-12" />
        <span className="text-lg font-bold">{title}</span>
      </Link>
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
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Minha Conta</DropdownMenuItem>
            <DropdownMenuItem>Configurações</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
