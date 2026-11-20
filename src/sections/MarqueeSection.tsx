import { useEffect, useRef, useState } from 'react'
import { MARQUEE_IMAGES } from '../data'

const ROW1 = MARQUEE_IMAGES.slice(0, 11)
const ROW2 = MARQUEE_IMAGES.slice(11)
const TRIPLED1 = [...ROW1, ...ROW1, ...ROW1]
const TRIPLED2 = [...ROW2, ...ROW2, ...ROW2]

function Tile({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      className="rounded-2xl object-cover shrink-0"
      style={{ width: 420, height: 270 }}
    />
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
          {TRIPLED1.map((src, i) => (
            <Tile key={`r1-${i}`} src={src} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {TRIPLED2.map((src, i) => (
            <Tile key={`r2-${i}`} src={src} />
          ))}
        </div>
      </div>
    </section>
  )
}
