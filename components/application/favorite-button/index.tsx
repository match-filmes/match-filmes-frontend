import { Button } from '@/components/ui/button'
import { HeartFilledIcon } from '@radix-ui/react-icons'
import { HeartIcon } from 'lucide-react'
import axios from 'axios'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { baseUrl } from '@/utils/Endpoints'
import { toast } from '@/hooks/use-toast'

const api = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
})

interface FavoriteButtonProps {
  movieId: number | undefined
  isFavorite?: boolean
  unfavorite: () => void
}

export default function FavoriteButton({
  movieId,
  isFavorite: initialFavorite,
  unfavorite,
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite)

  const handleToggleFavorite = async () => {
    try {
      const token = Cookies.get('token')
      if (!token) {
        throw new Error('No token found')
      }

      if (isFavorite) {
        await api.delete(`/movies/favorite/${movieId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        unfavorite()
        toast({
          title: 'Removido dos Favoritos',
          description: 'O filme foi removido da sua lista de favoritos.',
          variant: 'default',
        })
      } else {
        await api.post(
          `/movies/favorite/${movieId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        toast({
          title: 'Adicionado aos Favoritos',
          description: 'O filme foi adicionado à sua lista de favoritos.',
          variant: 'default',
        })
      }
      setIsFavorite(!isFavorite)
    } catch (error) {
      console.error('Failed to update favorite status', error)
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro ao atualizar a lista de favoritos.',
        variant: 'destructive',
      })
    }
  }

  return (
    <Button
      variant="outline"
      className="text-white hover:bg-white/20 transition-colors aspect-square p-2"
      onClick={handleToggleFavorite}
    >
      {isFavorite ? (
        <HeartFilledIcon className="w-full h-full" />
      ) : (
        <HeartIcon className="w-full h-full" />
      )}
    </Button>
  )
}
