import { useEffect, useRef, useState } from 'react'
import ProjectCover from '../components/ProjectCover'
import { projects } from '../data'

// Build the two rows from the project covers so the band is consistent
// with the project cards and fully self-contained.
const HALF = Math.ceil(projects.length / 2)
const ROW1_SRC = projects.slice(0, HALF)
const ROW2_SRC = projects.slice(HALF)
const REPEAT = 3
const ROW1 = Array.from({ length: REPEAT }, () => ROW1_SRC).flat()
const ROW2 = Array.from({ length: REPEAT }, () => ROW2_SRC).flat()

function Tile({ icon, label, image }: { icon: string; label: string; image?: string }) {
  return (
    <div
      className="rounded-2xl shrink-0 border border-[#D7E2EA]/10 overflow-hidden bg-[#F4F1EA]"
      style={{ width: 420, height: 270 }}
    >
      {image ? (
        <img src={image} alt="" loading="lazy" className="w-full h-full object-cover object-left" />
      ) : (
        <ProjectCover icon={icon} label={label} iconSize={92} />
      )}
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const sectionTop = el.getBoundingClientRect().top + window.scrollY
      const o = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(o)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {ROW1.map((p, i) => (
            <Tile key={`r1-${i}`} icon={p.coverIcon} label={p.coverLabel} image={p.coverImage} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {ROW2.map((p, i) => (
            <Tile key={`r2-${i}`} icon={p.coverIcon} label={p.coverLabel} image={p.coverImage} />
          ))}
        </div>
      </div>
    </section>
  )
}
