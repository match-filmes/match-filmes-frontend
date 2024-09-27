import { HeroSection } from '@/components/application/hero-section'
import { MovieSection } from '@/components/application/movie-section'
import { baseUrl } from '@/utils/Endpoints'

export default function MovieWrapper() {
  const popularMoviesUrl = `${baseUrl}/movies/popular?size=6`
  const recommendedMoviesUrl = `${baseUrl}/movies/recommended?size=6`

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection requestUrl={popularMoviesUrl} />

        {/* Trending Movies Section */}
        <MovieSection title="Filmes em Alta" requestUrl={popularMoviesUrl} />

        {/* Recommended Movies Section */}
        <MovieSection
          title="Filmes Recomendados"
          requestUrl={recommendedMoviesUrl}
        />
      </main>
    </div>
  )
}
