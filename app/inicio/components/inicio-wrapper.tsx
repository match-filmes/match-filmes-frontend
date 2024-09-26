'use client'

import { HeroSection } from '@/components/application/hero-section'
import { MovieSection } from '@/components/application/movie-section'
import { MovieCard } from '@/components/application/movie-card'
import { GenreButton } from '@/components/application/genre-button'
import { ContinueWatchingCard } from '@/components/application/continue-watching-card'
import { MovieProps } from '@/interfaces/movie-props'
import { baseUrl } from '@/utils/Endpoints'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

const api = axios.create({
  baseURL: baseUrl,
  withCredentials: false, // This is important for CORS if your API uses cookies
})

export default function InicioWrapper() {
  const [popularMovies, setPopularMovies] = useState<MovieProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const token = Cookies.get('token')
        if (!token) {
          throw new Error('No token found')
        }

        // Log the token for debugging (remove in production)
        console.log('Token:', token)

        const response = await api.get<MovieProps[]>('/movies/popular', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
          },
        })

        setPopularMovies(response.data)
      } catch (err) {
        console.error('Failed to fetch popular movies:', err)
        if (axios.isAxiosError(err)) {
          setError(
            `Failed to fetch popular movies. ${err.response?.status} ${err.response?.statusText}`,
          )
        } else {
          setError('Failed to fetch popular movies. Please try again later.')
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchPopularMovies()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        {/* Trending Movies Section */}
        <MovieSection title="Filmes em Alta">
          {isLoading ? (
            <div className="text-center py-8">
              <p className="text-xl font-semibold">Carregando filmes...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-xl font-semibold text-red-500">{error}</p>
            </div>
          ) : popularMovies.length > 0 ? (
            popularMovies.map((movie) => (
              <MovieCard
                key={movie.title}
                title={movie.title}
                description={movie.genres.map((genre) => genre.name).join(', ')}
                imageUrl={movie.poster}
                altText={movie.title}
              />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-xl font-semibold">
                Nenhum filme encontrado... 😕
              </p>
            </div>
          )}
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
              <GenreButton genre="Animação" />
              <GenreButton genre="Aventura" />
              <GenreButton genre="Terror" />
              <GenreButton genre="Documentário" />
              <GenreButton genre="Romance" />
              <GenreButton genre="Infantil" />
              <GenreButton genre="Comédia" />
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
