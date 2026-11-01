type IconProps = { className?: string; color?: string }

export function IconCaja({ color = '#E3001B' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="6" y="16" width="36" height="24" rx="3" fill={color} />
      <rect x="12" y="10" width="24" height="8" rx="2" fill="#ff2a3d" />
      <rect x="18" y="24" width="12" height="4" rx="1" fill="rgba(0,0,0,0.35)" />
      <text x="24" y="36" textAnchor="middle" fill="white" fontSize="8" fontFamily="Arial Black,sans-serif">
        H
      </text>
    </svg>
  )
}

export function IconTaladro({ color = '#d6d2cc' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="8" y="18" width="22" height="12" rx="3" fill={color} />
      <rect x="28" y="21" width="12" height="6" rx="1" fill="#E3001B" />
      <circle cx="14" cy="24" r="3" fill="#121212" />
      <path d="M40 24h4" stroke="#c4a35a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconAncla({ color = '#c4a35a' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="14" r="5" stroke={color} strokeWidth="3" />
      <path d="M24 19v16" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path
        d="M14 28c0 8 6 12 10 12s10-4 10-12"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M16 30h-4M36 30h-4" stroke="#E3001B" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function IconNivel({ color = '#2f9e6b' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="6" y="18" width="36" height="12" rx="3" fill={color} />
      <rect x="18" y="20" width="12" height="8" rx="2" fill="rgba(0,0,0,0.35)" />
      <circle cx="24" cy="24" r="2.5" fill="#E3001B" />
    </svg>
  )
}

export function IconLlave({ color = '#d6d2cc' }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="16" cy="24" r="8" stroke={color} strokeWidth="3" />
      <circle cx="16" cy="24" r="3" fill="#E3001B" />
      <path d="M23 24h17l4-4v8l-4-4" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const map = {
  caja: IconCaja,
  taladro: IconTaladro,
  ancla: IconAncla,
  nivel: IconNivel,
  llave: IconLlave,
} as const

export function ToolIcon({ name, color }: { name: keyof typeof map; color?: string }) {
  const Cmp = map[name]
  return <Cmp color={color} />
}
