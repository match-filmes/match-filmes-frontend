'use client'

import { Button } from '@/components/ui/button'

interface GenreButtonProps {
  genre: string
}

export function GenreButton({ genre, ...props }: GenreButtonProps) {
  return (
    <Button variant="ghost" className="rounded-full" {...props}>
      {genre}
    </Button>
  )
}
