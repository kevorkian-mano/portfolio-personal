import { Bot, UsersRound, Cloud, Bike, MapPin, Building2, ShoppingBag, Gamepad2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const ICONS: Record<string, LucideIcon> = {
  Bot,
  UsersRound,
  Cloud,
  Bike,
  MapPin,
  Building2,
  ShoppingBag,
  Gamepad2,
}

// One shared SVG gradient definition the icon strokes reference via url(#coverGrad).
export function CoverGradientDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
      <defs>
        <linearGradient id="coverGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#646973" />
          <stop offset="100%" stopColor="#BBCCD7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

interface ProjectCoverProps {
  icon: string
  label: string
  className?: string
  iconSize?: number
}

export default function ProjectCover({ icon, label, className = '', iconSize = 108 }: ProjectCoverProps) {
  const Icon = ICONS[icon] ?? Bot

  return (
    <div
      className={`relative w-full h-full min-h-[200px] grid-cover overflow-hidden flex items-center justify-center ${className}`}
    >
      {/* soft glow */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 42%, rgba(187,204,215,0.14), transparent 62%)' }}
      />
      {/* corner accent */}
      <div
        className="absolute -top-16 -right-16 w-40 h-40 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(118,33,176,0.18), transparent 70%)' }}
      />

      <div className="relative flex flex-col items-center gap-5">
        <Icon size={iconSize} strokeWidth={1.1} color="url(#coverGrad)" />
        <span className="text-[#D7E2EA]/45 uppercase tracking-[0.3em] text-[10px] sm:text-xs">
          {label}
        </span>
      </div>
    </div>
  )
}
