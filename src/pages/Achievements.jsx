import { BadgeCheck, Trophy, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
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
          <div className="grid md:grid-cols-3 gap-5">
            {achievements.map((a, i) => {
              const isAward = a.type === 'Award'
              const Icon = isAward ? Trophy : BadgeCheck

              return (
                <Reveal key={a.title} delay={i * 70}>
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex h-full flex-col bg-white border border-ink-200 rounded-2xl p-6 hover:border-ink-300 hover:shadow-md transition-all"
                  >
                    <ArrowUpRight
                      size={16}
                      className="absolute top-5 right-5 text-ink-300 group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    />

                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-ink-900">
                      <Icon size={16} className="text-white" />
                    </div>

                    <p className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-2 text-ink-400">
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
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
