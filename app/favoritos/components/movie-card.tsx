import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import FavoriteButton from '@/components/application/favorite-button'

interface MovieCardProps {
  id: number | undefined
  title: string
  description: string
  imageUrl: string
  altText: string
  isFavorite: boolean
  onRemove: (id: number) => void
}

export function MovieCard({
  id,
  title,
  description,
  imageUrl,
  altText,
  isFavorite,
  onRemove,
}: MovieCardProps) {
  const handleUnfavorite = () => {
    if (id) {
      onRemove(id)
    }
  }

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
        <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-center">
          <div className="flex-1 overflow-hidden">
            <h3 className="text-lg font-bold truncate">{title}</h3>
            <p className="text-sm truncate">{description}</p>
          </div>
          <div className="cursor-pointer">
            <FavoriteButton
              movieId={id}
              isFavorite={isFavorite}
              unfavorite={handleUnfavorite}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
