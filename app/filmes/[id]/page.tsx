'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { HeroSection } from '@/components/application/hero-section'
import { baseUrl } from '@/utils/Endpoints'
import { useAuth } from '@/contexts/auth-context'
import { ImageCarousel } from '../components/movie-carousel'
import { MovieSection } from '@/components/application/movie-section'

interface MoviePageProps {
  params: {
    id: string
  }
}

interface MovieData {
  id: number
  title: string
  description: string
  genres: { name: string; id: number }[]
  poster: string
  voteAverage: number
  images: {
    backdrops: string[]
    logos: string[]
    posters: string[]
  }
}

export default function MoviePage({ params }: MoviePageProps) {
  const [movieData, setMovieData] = useState<MovieData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { getToken } = useAuth()

  const movieId = params.id
  const movieUrl = `${baseUrl}/movies/${movieId}`
  const similarMoviesUrl = `${baseUrl}/movies/similar/${movieId}`

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(movieUrl, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        })
        setMovieData(response.data)
      } catch (error) {
        setError('Failed to load movie data.')
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovieData()
  }, [movieUrl, getToken])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (error || !movieData) {
    return <div>{error || 'Failed to load movie data.'}</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection requestUrl={movieUrl} />
        <ImageCarousel images={movieData.images.backdrops} />
        <MovieSection title="Você Pode Gostar" requestUrl={similarMoviesUrl} />
      </main>
    </div>
  )
}
