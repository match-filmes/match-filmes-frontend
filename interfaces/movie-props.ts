import { Genre } from './genre'

export interface MovieProps {
  title: string
  description: string
  voteAverage: number
  poster: string
  genres: Genre[]
  isFavorite?: boolean
  id?: number
}
