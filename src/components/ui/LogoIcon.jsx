import { useId } from 'react'

export default function LogoIcon({ size = 16 }) {
  const id = useId()
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id={`${id}g`} x1="9" y1="5" x2="23" y2="27" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9b94ff" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
      </defs>
      <path d="M16 5L24 9.6V18.4L16 23L8 18.4V9.6L16 5Z" fill={`url(#${id}g)`} />
      <path d="M16 6.8L22.5 10.6V17.6L16 21.4L9.5 17.6V10.6L16 6.8Z" fill="white" fillOpacity="0.1" />
    </svg>
  )
}
