import { Metadata } from 'next'
import InicioWrapper from './components/inicio-wrapper'

export const metadata: Metadata = {
  title: 'Início',
  description: 'Descubra filmes e séries incríveis na plataforma Match Filmes.',
}

export default function InicioPage() {
  return <InicioWrapper />
}
