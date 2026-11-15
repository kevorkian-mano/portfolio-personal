import { Code, Globe, Database, Cloud, Sparkles, Wrench } from 'lucide-react'
import PageHeader from '../components/PageHeader'
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
          <div className="grid md:grid-cols-2 gap-4">
            {skillGroups.map(({ category, icon, skills }) => {
              const Icon = iconMap[icon]
              return (
                <div
                  key={category}
                  className="bg-white border border-ink-200 rounded-2xl p-6 hover:border-ink-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-md bg-ink-50 border border-ink-100 flex items-center justify-center">
                      <Icon size={16} className="text-ink-700" />
                    </div>
                    <h3 className="text-sm font-semibold text-ink-900">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map(s => (
                      <span
                        key={s}
                        className="text-xs bg-ink-50 border border-ink-100 text-ink-700 px-2.5 py-1 rounded-md hover:bg-ink-100 hover:border-ink-200 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
