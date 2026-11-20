import { useRef } from 'react'
import type { MotionValue } from 'framer-motion'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'
import { PROJECTS } from '../data'
import type { Project } from '../data'

interface CardProps {
  project: Project
  index: number
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}

function ProjectCard({ project, index, progress, range, targetScale }: CardProps) {
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className="h-[85vh] sticky top-24 md:top-32 flex justify-center">
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full max-w-6xl origin-top rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex items-start gap-3 sm:gap-6 min-w-0">
            <span
              className="font-black text-[#D7E2EA] shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-1 pt-1 sm:pt-2 min-w-0">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-[10px] sm:text-sm">
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton className="shrink-0 hidden sm:inline-flex" />
        </div>

        {/* Bottom row: image grid */}
        <div className="flex gap-3 sm:gap-4 md:gap-6">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-2/5">
            <img
              src={project.images[0]}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.images[1]}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="w-3/5">
            <img
              src={project.images[2]}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const total = PROJECTS.length

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20"
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </FadeIn>

      <div ref={containerRef} className="mt-12 sm:mt-16 md:mt-20">
        {PROJECTS.map((project, i) => {
          const targetScale = 1 - (total - 1 - i) * 0.03
          return (
            <ProjectCard
              key={project.num}
              project={project}
              index={i}
              progress={scrollYProgress}
              range={[i / total, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>
    </section>
  )
}
