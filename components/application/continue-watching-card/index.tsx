import Link from 'next/link'
import Image from 'next/image'

import { PlayIcon } from '@/components/application/icons'

interface ContinueWatchingCardProps {
  imageUrl: string
  altText: string
}

export function ContinueWatchingCard({
  imageUrl,
  altText,
}: ContinueWatchingCardProps) {
  return (
    <Link href="#" className="group relative" prefetch={false}>
      <div className="w-full aspect-[2/3] rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          width={300}
          height={450}
          alt={altText}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayIcon className="w-10 h-10 text-white" />
        </div>
      </div>
    </Link>
  )
}
