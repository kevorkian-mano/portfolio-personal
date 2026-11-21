import { useEffect, useRef, useState } from 'react'
import ProjectCover from '../components/ProjectCover'
import { projects } from '../data'

// Build the two rows from the project covers so the band is consistent
// with the project cards and fully self-contained.
const HALF = Math.ceil(projects.length / 2)
// Start the first row with the Study Buddy (buddymatcher) banner; the
// AI Research cover moves to the end of the row.
const ROW1_SRC = [...projects.slice(1, HALF), projects[0]]
const ROW2_SRC = projects.slice(HALF)
const REPEAT = 3
const ROW1 = Array.from({ length: REPEAT }, () => ROW1_SRC).flat()
const ROW2 = Array.from({ length: REPEAT }, () => ROW2_SRC).flat()

function useIsDesktop() {
  const [desktop, setDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setDesktop(mq.matches)
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return desktop
}

function Tile({ icon, label, image, desktop }: { icon: string; label: string; image?: string; desktop: boolean }) {
  return (
    // Phone/tablet: much smaller tiles (same 420x270 proportions). Desktop: unchanged.
    <div className="rounded-xl lg:rounded-2xl shrink-0 border border-[#D7E2EA]/10 overflow-hidden bg-[#F4F1EA] w-[180px] h-[116px] lg:w-[420px] lg:h-[270px]">
      {image ? (
        <img src={image} alt="" loading="lazy" className="w-full h-full object-cover object-left" />
      ) : (
        <ProjectCover icon={icon} label={label} iconSize={desktop ? 92 : 40} className="!min-h-0" />
      )}
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)
  const desktop = useIsDesktop()

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
      className="bg-[#0C0C0C] pt-8 sm:pt-32 md:pt-40 pb-10"
      style={{ overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {ROW1.map((p, i) => (
            <Tile key={`r1-${i}`} icon={p.coverIcon} label={p.coverLabel} image={p.coverImage} desktop={desktop} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {ROW2.map((p, i) => (
            <Tile key={`r2-${i}`} icon={p.coverIcon} label={p.coverLabel} image={p.coverImage} desktop={desktop} />
          ))}
        </div>
      </div>
    </section>
  )
}
