import { StarIcon } from '@/components/application/icons'

interface RatingProps {
  voteAverage: number | null
}

export default function StarRating({ voteAverage }: RatingProps) {
  return (
    <>
      {typeof voteAverage === 'number' &&
      voteAverage >= 0 &&
      voteAverage <= 10 ? (
        <>
          {Array.from({ length: Math.floor(voteAverage / 2) }).map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
          ))}
          {voteAverage % 2 >= 1 ? (
            <StarIcon className="w-5 h-5 text-yellow-500 half-filled" />
          ) : null}
          {Array.from({ length: 5 - Math.ceil(voteAverage / 2) }).map(
            (_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-gray-400" />
            ),
          )}
          <span className="ml-2">{voteAverage.toFixed(1)} / 10</span>
        </>
      ) : (
        <>
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-gray-400" />
          ))}
          <span className="ml-2">N/A</span>
        </>
      )}
    </>
  )
}
