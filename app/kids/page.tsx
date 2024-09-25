import { Metadata } from 'next'
import { HeroSection } from '@/components/application/hero-section'
import { MovieSection } from '@/components/application/movie-section'
import { MovieCard } from '@/components/application/movie-card'
import { GenreButton } from '@/components/application/genre-button'
import { ContinueWatchingCard } from '@/components/application/continue-watching-card'

export const metadata: Metadata = {
  title: 'Kids',
  description:
    'Descubra conteúdos infantis divertidos e educativos na plataforma Match Filmes.',
}

export default function KidsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        {/* Trending Kids Content Section */}
        <MovieSection title="Conteúdos Infantis em Alta">
          <MovieCard
            title="Frozen"
            description="Animação, Aventura, Comédia"
            imageUrl="/placeholder_banner.png"
            altText="Frozen"
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
              <GenreButton genre="Animação" />
              <GenreButton genre="Aventura" />
              <GenreButton genre="Comédia" />
              <GenreButton genre="Educativo" />
              <GenreButton genre="Fantasia" />
              <GenreButton genre="Musical" />
              <GenreButton genre="Família" />
              <GenreButton genre="Ação" />
            </div>
          </div>
        </section>

        {/* Continue Watching Section */}
        <MovieSection title="Continue Assistindo">
          <ContinueWatchingCard
            imageUrl="/placeholder_banner.png"
            altText="Kids Content Thumbnail"
          />
          {/* Add more ContinueWatchingCard components as needed */}
        </MovieSection>
      </main>
    </div>
  )
}
