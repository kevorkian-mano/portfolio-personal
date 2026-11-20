import { useRef } from 'react'
import type { MotionValue } from 'framer-motion'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'
import ProjectCover from '../components/ProjectCover'
import { projects } from '../data'
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
    <div className="h-[82vh] sticky top-20 md:top-28 flex justify-center">
      <motion.div
        style={{ scale, top: `${index * 26}px` }}
        className="relative w-full max-w-5xl origin-top rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 flex flex-col"
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-5 sm:mb-7">
          <div className="flex items-start gap-3 sm:gap-5 min-w-0">
            <span
              className="hero-heading font-black shrink-0"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)', lineHeight: 1 }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-1 pt-1 sm:pt-2 min-w-0">
              <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-[10px] sm:text-xs">
                {project.tag} · {project.date}
              </span>
              <span
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.9rem)' }}
              >
                {project.title}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.repo} label="View Code" className="shrink-0 hidden sm:inline-block" />
        </div>

        {/* Bottom row */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-7 items-stretch flex-1 min-h-0">
          {/* Cover */}
          <div className="rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#D7E2EA]/15 min-h-[180px]">
            <ProjectCover
              icon={project.coverIcon}
              label={project.coverLabel}
              illustration={project.coverIllustration}
              iconSize={120}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-between gap-5">
            <ul className="flex flex-col gap-3">
              {project.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-[#D7E2EA]/75 text-sm sm:text-[15px] leading-relaxed font-light">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#D7E2EA]/40 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] sm:text-xs text-[#D7E2EA]/60 border border-[#D7E2EA]/15 rounded-full px-3 py-1 uppercase tracking-wider"
                >
                  {s}
                </span>
              ))}
            </div>
            <LiveProjectButton href={project.repo} label="View Code" className="sm:hidden self-start" />
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
  const total = projects.length

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
        Projects
      </FadeIn>

      <div ref={containerRef} className="mt-12 sm:mt-16 md:mt-20">
        {projects.map((project, i) => {
          const targetScale = 1 - (total - 1 - i) * 0.025
          return (
            <ProjectCard
              key={project.title}
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
