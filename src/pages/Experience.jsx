import { MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { experiences } from '../data/portfolio'

export default function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Where I've worked."
        description="Internships and roles across AI, cloud, full-stack engineering, and fraud analytics."
      />

      <section className="py-14 md:py-16">
        <div className="container-content">
          <div className="relative">
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-ink-200" aria-hidden />

            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.company + exp.role} className="relative pl-8">
                  <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-white border-2 border-ink-900 shadow-sm" />

                  <article className="bg-white border border-ink-200 rounded-2xl p-6 hover:border-ink-300 hover:shadow-sm transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-base font-semibold text-ink-900">{exp.company}</h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-semibold tracking-wide uppercase rounded-full">
                              <span className="w-1 h-1 rounded-full bg-emerald-500" />
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-ink-700 font-medium">{exp.role}</p>
                        <p className="text-xs text-ink-400 mt-1 inline-flex items-center gap-1">
                          <MapPin size={11} /> {exp.location}
                        </p>
                      </div>
                      <span className="text-xs text-ink-500 font-medium bg-ink-50 border border-ink-100 px-2.5 py-1 rounded-md shrink-0 h-fit whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2.5 text-sm text-ink-600 leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-ink-400 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {exp.tech && (
                      <div className="mt-5 pt-5 border-t border-ink-100 flex flex-wrap gap-1.5">
                        {exp.tech.map(t => (
                          <span key={t} className="text-[11px] bg-ink-50 text-ink-600 border border-ink-100 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
