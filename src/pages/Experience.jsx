import { MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import CompanyLogo from '../components/CompanyLogo'
import Reveal from '../components/Reveal'
import BrandIcon, { brandFor } from '../components/icons/BrandIcon'
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
            <div className="absolute left-[23px] top-6 bottom-6 w-px bg-ink-200 hidden sm:block" aria-hidden />

            <div className="space-y-5">
              {experiences.map((exp) => (
                <Reveal key={exp.company + exp.role} className="relative sm:pl-16">
                  <div className="absolute left-0 top-6 hidden sm:block">
                    <CompanyLogo company={exp.company} size="md" />
                  </div>

                  <article className="bg-white border border-ink-200 rounded-2xl p-6 hover:border-ink-300 hover:shadow-sm transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="sm:hidden">
                          <CompanyLogo company={exp.company} size="md" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="text-base font-semibold text-ink-900">{exp.company}</h3>
                            {exp.current && (
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border border-ink-200 text-ink-600 text-[10px] font-semibold tracking-wide uppercase rounded-full">
                                <span className="w-1 h-1 rounded-full bg-ink-900" />
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-ink-700 font-medium">{exp.role}</p>
                          <p className="text-xs text-ink-400 mt-1 inline-flex items-center gap-1">
                            <MapPin size={11} /> {exp.location}
                          </p>
                        </div>
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
                          <span key={t} className="inline-flex items-center gap-1.5 text-[11px] bg-ink-50 text-ink-600 border border-ink-100 px-2 py-0.5 rounded">
                            {brandFor(t) && <BrandIcon label={t} size={11} className="text-ink-500" />}
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
