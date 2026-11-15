import { BadgeCheck, Trophy, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { achievements } from '../data/portfolio'

export default function Achievements() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Certifications & awards."
        description="Industry certifications, scholarships, and recognitions earned along the way."
      />

      <section className="py-14 md:py-16">
        <div className="container-content">
          <div className="grid md:grid-cols-3 gap-4">
            {achievements.map((a) => {
              const Icon = a.type === 'Award' ? Trophy : BadgeCheck
              const isAward = a.type === 'Award'

              return (
                <a
                  key={a.title}
                  href={a.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative bg-white border border-ink-200 rounded-2xl p-6 hover:border-ink-300 hover:shadow-sm transition-all flex flex-col"
                >
                  <ArrowUpRight
                    size={16}
                    className="absolute top-5 right-5 text-ink-300 group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />

                  <div className={`w-10 h-10 rounded-md flex items-center justify-center mb-4 ${
                    isAward ? 'bg-amber-50 border border-amber-100' : 'bg-ink-50 border border-ink-100'
                  }`}>
                    <Icon size={16} className={isAward ? 'text-amber-700' : 'text-ink-700'} />
                  </div>

                  <p className={`text-[10px] font-semibold tracking-wide uppercase mb-2 ${
                    isAward ? 'text-amber-700' : 'text-ink-500'
                  }`}>
                    {a.type}
                  </p>

                  <h3 className="text-sm font-semibold text-ink-900 leading-snug mb-2 pr-6 flex-1">
                    {a.title}
                  </h3>
                  <p className="text-xs text-ink-500 mb-4">{a.issuer}</p>

                  <div className="pt-4 border-t border-ink-100 flex items-center justify-between">
                    <span className="text-[11px] text-ink-400">{a.year || 'Scholarship'}</span>
                    <span className="text-[11px] font-medium text-ink-600 group-hover:text-ink-900 transition-colors">
                      View credential
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
