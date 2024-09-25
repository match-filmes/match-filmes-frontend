import { Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { Metadata } from 'next'
import { Header } from '@/components/application/header'
import { AuthProvider } from '@/contexts/auth-context'
import { Toaster } from '@/components/ui/toaster'

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: {
    default: 'Match Filmes',
    template: '%s | Match Filmes',
  },
  description: 'Explore filmes e séries na plataforma Match Filmes',
  metadataBase: new URL('https://matchfilmes.com'),
  openGraph: {
    title: 'Match Filmes',
    description: 'Explore filmes e séries na plataforma Match Filmes',
    url: 'https://matchfilmes.com',
    siteName: 'Match Filmes',
    images: [
      {
        url: '/favicon.ico',
        width: 800,
        height: 600,
        alt: 'Match Filmes Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          'antialiased dark',
          fontHeading.variable,
          fontBody.variable,
        )}
      >
        <AuthProvider>
          <Header title="Match Filmes" />
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
