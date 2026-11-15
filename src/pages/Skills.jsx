import { Code, Globe, Database, Cloud, Sparkles, Wrench } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import BrandIcon, { brandFor } from '../components/icons/BrandIcon'
import { skillGroups } from '../data/portfolio'

const iconMap = { Code, Globe, Database, Cloud, Sparkles, Wrench }

export default function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Technical toolkit."
        description="Languages, frameworks, databases, cloud platforms, AI tooling, and practices I work with."
      />

      <section className="py-14 md:py-16">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-5">
            {skillGroups.map(({ category, icon, skills }, i) => {
              const Icon = iconMap[icon]
              return (
                <Reveal key={category} delay={(i % 2) * 70}>
                  <div className="h-full bg-white border border-ink-200 rounded-2xl p-6 hover:border-ink-300 hover:shadow-sm transition-all">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-ink-900 flex items-center justify-center">
                        <Icon size={16} className="text-white" />
                      </div>
                      <h3 className="text-sm font-semibold text-ink-900">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map(s => (
                        <span
                          key={s}
                          className="inline-flex items-center gap-1.5 text-xs bg-ink-50 border border-ink-100 text-ink-700 px-2.5 py-1 rounded-md hover:bg-ink-100 hover:border-ink-200 transition-colors"
                        >
                          {brandFor(s) && <BrandIcon label={s} size={12} className="text-ink-600" />}
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
