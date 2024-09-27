'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { StarIcon } from '@/components/application/icons/star-icon'
import { MovieProps } from '@/interfaces/movie-props'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface HeroSectionProps {
  requestUrl: string
}

const maxDescriptionLength = 200

export function HeroSection({ requestUrl }: HeroSectionProps) {
  const [movie, setMovie] = useState<MovieProps | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true)
        const response = await axios.get(requestUrl)

        const movies = Array.isArray(response.data.content)
          ? response.data.content
          : [response.data.content]

        if (movies.length > 0) {
          setMovie(movies[0])
        } else {
          setError('No movie found.')
        }
      } catch (error) {
        setError('Failed to load movie data.')
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovie()
  }, [requestUrl])

  if (loading) {
    return (
      <section className="relative h-[600px] flex items-center justify-center">
        <p>Carregando...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="relative h-[600px] flex items-center justify-center">
        <p>{error}</p>
      </section>
    )
  }

  if (!movie) {
    return null
  }

  const { id, title, description, voteAverage, poster, genres } = movie
  const isMoviePage = pathname.includes(`/movie/${id}`)

  const handleAssistir = () => {
    router.push(`/filmes/${id}`)
  }

  return (
    <section className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] overflow-hidden">
      <Image
        src={'https://image.tmdb.org/t/p/w1920_and_h1080_bestv2' + poster}
        width={1920}
        height={1080}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        style={{ aspectRatio: '1920/1080', objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      <div className="relative h-full flex flex-col justify-center px-4 md:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          {title}
        </h1>
        <p className="max-w-[800px] mt-4 text-lg sm:text-xl md:text-2xl text-white">
          {description.length > maxDescriptionLength
            ? `${description.slice(0, maxDescriptionLength)}...`
            : description}
        </p>

        {genres && genres.length > 0 && (
          <div className="mt-2 text-white">
            Gêneros: {genres.map((genre) => genre.name).join(', ')}
          </div>
        )}

        <div className="mt-6 flex gap-4 items-center">
          {!isMoviePage && (
            <Button
              className="bg-white text-black hover:bg-gray-200 transition-colors"
              onClick={handleAssistir}
            >
              Assistir
            </Button>
          )}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="text-white hover:bg-white/20 transition-colors"
              >
                Detalhes
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                  Informações detalhadas sobre o filme
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Image
                    src={'https://image.tmdb.org/t/p/w500' + poster}
                    width={500}
                    height={750}
                    alt={title}
                    className="col-span-4 w-full h-auto rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-bold">Descrição:</span>
                  <p className="col-span-3">{description}</p>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-bold">Gêneros:</span>
                  <p className="col-span-3">
                    {genres.map((genre) => genre.name).join(', ')}
                  </p>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <span className="font-bold">Avaliação:</span>
                  <div className="col-span-3 flex items-center">
                    {typeof voteAverage === 'number' &&
                    voteAverage >= 0 &&
                    voteAverage <= 5 ? (
                      <>
                        {[...Array(Math.floor(voteAverage))].map((_, i) => (
                          <StarIcon
                            key={i}
                            className="w-5 h-5 text-yellow-500"
                          />
                        ))}
                        {[...Array(5 - Math.floor(voteAverage))].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5 text-gray-400" />
                        ))}
                        <span className="ml-2">
                          {voteAverage.toFixed(1)} / 5
                        </span>
                      </>
                    ) : (
                      <>
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5 text-gray-400" />
                        ))}
                        <span className="ml-2">N/A</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {typeof voteAverage === 'number' &&
          voteAverage >= 0 &&
          voteAverage <= 5 ? (
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(Math.floor(voteAverage))].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5" />
              ))}
              {[...Array(5 - Math.floor(voteAverage))].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-gray-400" />
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-gray-400" />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
