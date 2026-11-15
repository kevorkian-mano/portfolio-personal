import { useState, useMemo } from 'react'
import { ArrowUpRight, Calendar } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ProjectMedia from '../components/ProjectMedia'
import Reveal from '../components/Reveal'
import BrandIcon, { brandFor } from '../components/icons/BrandIcon'
import { projects } from '../data/portfolio'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const tags = useMemo(() => ['All', ...new Set(projects.map(p => p.tag))], [])
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tag === filter)

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built."
        description="Academic, team, and personal work spanning research, full-stack, cloud, and data engineering."
      />

      <section className="py-10">
        <div className="container-content">
          <div className="flex flex-wrap gap-1.5 mb-8">
            {tags.map(t => {
              const active = filter === t
              return (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                    active
                      ? 'bg-ink-900 text-white border-ink-900'
                      : 'bg-white text-ink-600 border-ink-200 hover:border-ink-300 hover:text-ink-900'
                  }`}
                >
                  {t}
                </button>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 80}>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-full flex-col bg-white border border-ink-200 rounded-2xl overflow-hidden hover:border-ink-300 hover:shadow-md transition-all"
                >
                  <ProjectMedia project={p} />

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-medium text-ink-700 bg-ink-50 border border-ink-100 px-2 py-0.5 rounded-full">
                        {p.tag}
                      </span>
                      <span className="text-[11px] text-ink-400 inline-flex items-center gap-1">
                        <Calendar size={10} /> {p.date}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="ml-auto text-ink-300 group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                      />
                    </div>

                    <h3 className="text-base font-semibold text-ink-900 leading-snug mb-3">
                      {p.title}
                    </h3>

                    <ul className="space-y-2 mb-5 flex-1">
                      {p.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 text-sm text-ink-600 leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-ink-400 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-ink-100 flex flex-wrap gap-1.5">
                      {p.stack.map(s => (
                        <span key={s} className="inline-flex items-center gap-1.5 text-[11px] bg-ink-50 text-ink-700 border border-ink-100 px-2 py-0.5 rounded">
                          {brandFor(s) && <BrandIcon label={s} size={11} className="text-ink-500" />}
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
