import Link from 'next/link'
import Image from 'next/image'

interface MovieCardProps {
  title: string
  description: string
  imageUrl: string
  altText: string
  id: number
}

export function MovieCard({
  title,
  description,
  imageUrl,
  altText,
  id,
}: MovieCardProps) {
  return (
    <Link href={`/filmes/${id}`} className="group" prefetch={false}>
      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${imageUrl}`}
          width={300}
          height={450}
          alt={altText}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          quality={100}
        />
        <div className="hidden group group-hover:flex transition-all">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group" />
          <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-center">
            <div className="flex-1 bottom-4 left-4 text-white group">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-sm">{description}</p>
            </div>
            {/*             <div className="cursor-pointer">
              <FavoriteButton movieId={id} unfavorite={() => {}} />
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  )
}
