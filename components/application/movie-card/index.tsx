import Link from 'next/link'
import Image from 'next/image'

interface MovieCardProps {
  title: string
  description: string
  imageUrl: string
  altText: string
}

export function MovieCard({
  title,
  description,
  imageUrl,
  altText,
}: MovieCardProps) {
  return (
    <Link href="#" className="group" prefetch={false}>
      <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${imageUrl}`}
          width={300}
          height={450}
          alt={altText}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  )
}
