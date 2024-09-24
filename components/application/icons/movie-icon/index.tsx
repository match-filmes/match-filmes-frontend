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
      <rect width="900" height="900" fill="none" />
      <path d="..." fill="#E50914" />
    </svg>
  )
}
