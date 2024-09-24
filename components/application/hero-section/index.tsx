import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { StarIcon } from '@/components/application/icons/star-icon'
import { MovieProps } from '@/interfaces/movie-props'

const mockMovie: MovieProps = {
  title: 'Monstros S.A.',
  description:
    'Monstros S.A. é a maior fábrica de processamento de gritos em Monstrópolis, uma cidade habitada por monstros.',
  voteAverage: 4.5,
  poster: '/placeholder_banner.jpg',
  genres: [
    { name: 'Animação', id: 1 },
    { name: 'Aventura', id: 2 },
    { name: 'Comédia', id: 3 },
  ],
}

interface HeroSectionProps {
  movie?: MovieProps
}

export function HeroSection({ movie = mockMovie }: HeroSectionProps) {
  const { title, description, voteAverage, poster, genres } = movie

  return (
    <section className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] overflow-hidden">
      <Image
        src={poster}
        width={1920}
        height={1080}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ aspectRatio: '1920/1080', objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      <div className="relative h-full flex flex-col justify-center px-4 md:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          {title}
        </h1>
        <p className="max-w-[800px] mt-4 text-lg sm:text-xl md:text-2xl text-white">
          {description}
        </p>
        <div className="mt-2 text-white">
          Gêneros: {genres.map((genre) => genre.name).join(', ')}
        </div>
        <div className="mt-6 flex gap-4 items-center">
          <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
            Assistir
          </Button>
          <Button
            variant="outline"
            className="text-white hover:bg-white/20 transition-colors"
          >
            Detalhes
          </Button>
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(Math.floor(voteAverage))].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5" />
            ))}
            {[...Array(5 - Math.floor(voteAverage))].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-gray-400" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
