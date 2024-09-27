'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { MovieProps } from '@/interfaces/movie-props'
import { MovieCard } from '../movie-card'
import { useAuth } from '@/contexts/auth-context'

interface MovieSectionProps {
  title: string
  requestUrl: string
}

export function MovieSection({ title, requestUrl }: MovieSectionProps) {
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [, setTotalPages] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAppending, setIsAppending] = useState(false)
  const { getToken } = useAuth()

  useEffect(() => {
    const fetchMovies = async () => {
      if (!hasMore || loading) return
      setLoading(true)

      try {
        const response = await axios.get(`${requestUrl}?page=${page}&size=12`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        })
        const { content, page: pageInfo } = response.data
        setMovies((prevMovies) => [...prevMovies, ...content])
        setTotalPages(pageInfo.totalPages)

        if (page >= pageInfo.totalPages) {
          setHasMore(false)
        }
      } catch (error) {
        console.error('Failed to fetch movies', error)
      } finally {
        setLoading(false)
        setIsAppending(false)
      }
    }

    fetchMovies()
  }, [page, requestUrl])

  const handleNext = () => {
    if (currentIndex < movies.length - 6) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    } else if (hasMore && !isAppending) {
      setIsAppending(true)
      setPage((prevPage) => prevPage + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="w-full px-4 md:px-6 lg:px-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {title}
          </h2>
        </div>

        <Carousel>
          <CarouselContent
            className="transition-all"
            style={{ transform: `translateX(-${(currentIndex * 100) / 6}%)` }}
          >
            {movies.map((movie) => (
              <CarouselItem key={movie.id} className="basis-1/6">
                <MovieCard
                  title={movie.title}
                  description={movie.genres
                    ?.map((genre) => genre?.name)
                    .join(', ')}
                  imageUrl={movie.poster}
                  altText={movie.title}
                  id={movie.id}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious onClick={handlePrevious} />
          <CarouselNext onClick={handleNext} />
        </Carousel>

        {loading && <p>Carregando mais filmes...</p>}
        {!hasMore && <p>Nenhum filme encontrado...</p>}
      </div>
    </section>
  )
}
