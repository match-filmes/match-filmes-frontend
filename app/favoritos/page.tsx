'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { MovieProps } from '@/interfaces/movie-props'
import { baseUrl } from '@/utils/Endpoints'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { MovieCard } from './components/movie-card'

const api = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
})

export default function Favoritos() {
  const [favoriteMovies, setFavoriteMovies] = useState<MovieProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      try {
        const token = Cookies.get('token')
        if (!token) {
          throw new Error('No token found')
        }

        console.log('Token:', token)

        const response = await api.get<{ content: MovieProps[] }>(
          '/movies/favorite',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Access-Control-Allow-Origin': '*',
            },
          },
        )
        setFavoriteMovies(response.data.content)
      } catch (err) {
        console.error('Failed to fetch favorite movies:', err)
        if (axios.isAxiosError(err)) {
          setError(
            `Failed to fetch favorite movies. ${err.response?.status} ${err.response?.statusText}`,
          )
        } else {
          setError('Failed to fetch favorite movies. Please try again later.')
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchFavoriteMovies()
  }, [])

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-white">
          Seus Filmes Favoritos
        </h1>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {isLoading ? (
              <div className="text-center py-8">
                <p className="text-xl font-semibold">Carregando filmes...</p>
              </div>
            ) : error ? (
              <div className="text-center py-8">
                <p className="text-xl font-semibold text-red-500">{error}</p>
              </div>
            ) : favoriteMovies.length > 0 ? (
              favoriteMovies.map((movie) => (
                <MovieCard
                  key={movie.title}
                  title={movie.title}
                  description={movie?.genres
                    ?.map((genre) => genre?.name)
                    .join(', ')}
                  imageUrl={movie.poster}
                  altText={movie.title}
                  id={movie.id}
                />
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-xl font-semibold">
                  Nenhum filme encontrado... 😕
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
