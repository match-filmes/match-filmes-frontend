import { Button } from '@/components/ui/button'

interface GenreButtonProps {
  genre: string
}

export function GenreButton({ genre }: GenreButtonProps) {
  return (
    <Button variant="ghost" className="rounded-full">
      {genre}
    </Button>
  )
}
