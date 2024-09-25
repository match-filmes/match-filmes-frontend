'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface GenreButtonProps {
  genre: string
}

export function GenreButton({ genre }: GenreButtonProps) {
  const router = useRouter()

  return (
    <Button
      variant="ghost"
      className="rounded-full"
      onClick={() => router.push(`/${genre}`)}
    >
      {genre}
    </Button>
  )
}
