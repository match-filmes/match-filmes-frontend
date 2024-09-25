import { Metadata } from 'next'
import { HeroSection } from '@/components/application/hero-section'
import { MovieSection } from '@/components/application/movie-section'
import { MovieCard } from '@/components/application/movie-card'
import { GenreButton } from '@/components/application/genre-button'
import { ContinueWatchingCard } from '@/components/application/continue-watching-card'

export const metadata: Metadata = {
  title: 'Filmes',
  description: 'Descubra os melhores filmes na plataforma Match Filmes.',
}

export default function FilmesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        {/* Trending Movies Section */}
        <MovieSection title="Filmes em Alta">
          <MovieCard
            title="Inception"
            description="Ficção Científica, Ação, Aventura"
            imageUrl="/placeholder_banner.png"
            altText="Inception"
          />
          {/* Add more MovieCard components as needed */}
        </MovieSection>

        {/* Genre Filters Section */}
        <section className="py-8 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Filtrar por Gêneros
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <GenreButton genre="Todos Populares" />
              <GenreButton genre="Ação" />
              <GenreButton genre="Aventura" />
              <GenreButton genre="Comédia" />
              <GenreButton genre="Drama" />
              <GenreButton genre="Ficção Científica" />
              <GenreButton genre="Romance" />
              <GenreButton genre="Suspense" />
              <GenreButton genre="Terror" />
            </div>
          </div>
        </section>

        {/* Continue Watching Section */}
        <MovieSection title="Continue Assistindo">
          <ContinueWatchingCard
            imageUrl="/placeholder_banner.png"
            altText="Movie Thumbnail"
          />
          {/* Add more ContinueWatchingCard components as needed */}
        </MovieSection>
      </main>
    </div>
  )
}
