import { HeroSection } from '@/components/application/hero-section'
import { baseUrl } from '@/utils/Endpoints'

interface MoviePageProps {
  params: {
    id: string
  }
}

export default function MoviePage({ params }: MoviePageProps) {
  const movieId = params.id
  const movieUrl = `${baseUrl}/movies/${movieId}`

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection requestUrl={movieUrl} />
      </main>
    </div>
  )
}
