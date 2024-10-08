import { SVGProps } from 'react'

export function MovieIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="900"
      height="900"
      viewBox="0 0 900 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M466.234 292.218C466.234 276.041 445.342 269.944 436.14 283.355C351.719 406.398 471.688 411.938 471.688 471.75C471.688 495.968 451.845 515.563 427.483 515.244C403.51 514.938 384.438 495.009 384.438 471.105V412.985C384.438 398.235 366.394 391.078 356.197 401.77C337.95 420.883 319 453.623 319 493.5C319 565.459 377.71 624 449.875 624C522.04 624 580.75 565.459 580.75 493.5C580.75 377.756 466.234 362.321 466.234 292.218Z"
        fill="#E50914"
      />
    </svg>
  )
}
