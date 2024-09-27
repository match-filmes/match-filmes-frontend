import { Metadata } from 'next'
import MovieWrapper from './components/movie-wrapper'

export const metadata: Metadata = {
  title: 'Filmes',
  description: 'Descubra os melhores filmes na plataforma Match Filmes.',
}

export default function FilmesPage() {
  return <MovieWrapper />
}
