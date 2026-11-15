import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { educationHistory, profile } from '../data/portfolio'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A bit about me."
        description="Software Engineering student, data and AI enthusiast, and builder of full-stack systems."
      />

      <section className="py-14 md:py-16">
        <div className="container-content">
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3 space-y-5 text-ink-600 leading-relaxed">
              <p>
                I'm Manuel — a Software Engineering student at the <strong className="text-ink-900 font-semibold">German International University</strong> in Cairo, with a minor in Data Science & AI. I enjoy working across the stack, from distributed backend systems to modern frontends and AI-powered agents.
              </p>
              <p>
                Over the past year, I've interned at <strong className="text-ink-900 font-semibold">PwC ETIC</strong>, <strong className="text-ink-900 font-semibold">Eastman Kodak</strong>, and <strong className="text-ink-900 font-semibold">Accord Business Group</strong>, shipping cloud-deployed AI tools, full-stack apps, and fraud analysis work in production environments.
              </p>
              <p>
                My academic work combines solid engineering fundamentals with research — most recently my thesis on AI coding agent adoption across 60,000+ npm repositories, where I built a multi-stage detection pipeline and ran statistical tests across 66 countries.
              </p>
              <p>
                Based in <strong className="text-ink-900 font-semibold">{profile.location}</strong>, graduating <strong className="text-ink-900 font-semibold">June 2027</strong>.
              </p>
            </div>

            <aside className="md:col-span-2 bg-white border border-ink-200 rounded-2xl p-6">
              <p className="text-[11px] font-semibold text-ink-400 uppercase tracking-[0.18em] mb-5">At a glance</p>
              <dl className="space-y-4">
                {[
                  { icon: GraduationCap, label: 'Degree', value: 'B.Sc. Software Engineering' },
                  { icon: BookOpen, label: 'Minor', value: 'Data Science & AI' },
                  { icon: MapPin, label: 'Based in', value: 'Cairo, Egypt' },
                  { icon: Calendar, label: 'Graduating', value: 'June 2027' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-ink-50 border border-ink-100 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-ink-700" />
                    </div>
                    <div className="min-w-0">
                      <dt className="text-[11px] text-ink-400 uppercase tracking-wide mb-0.5">{label}</dt>
                      <dd className="text-sm font-medium text-ink-900 leading-snug">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 border-t border-ink-100 bg-white">
        <div className="container-content">
          <p className="text-[11px] font-semibold text-ink-400 tracking-[0.18em] uppercase mb-3">Education</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-ink-900 tracking-tight mb-8">Academic background</h2>

          <div className="space-y-4">
            {educationHistory.map((e) => (
              <Reveal key={e.school}>
                <div className="flex items-start gap-4 md:gap-5 border border-ink-200 rounded-2xl p-6 md:p-7 hover:border-ink-300 hover:shadow-sm transition-all">
                  <span className="inline-flex items-center justify-center shrink-0 w-14 h-14 rounded-xl bg-white border border-ink-200 overflow-hidden p-1.5">
                    <img src={e.logo} alt={`${e.school} logo`} loading="lazy" className="w-full h-full object-contain" />
                  </span>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 flex-1 min-w-0">
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-ink-900">{e.school}</h3>
                      <p className="text-sm text-ink-700 font-medium mt-1">{e.degree}</p>
                      {e.minor && <p className="text-sm text-ink-500 mt-0.5">{e.minor}</p>}
                      <p className="text-xs text-ink-400 mt-2 inline-flex items-center gap-1">
                        <MapPin size={11} /> {e.location}
                      </p>
                    </div>
                    <div className="shrink-0 md:text-right">
                      <span className="inline-block bg-ink-50 border border-ink-200 text-ink-700 text-xs font-medium px-3 py-1 rounded-full">
                        {e.period}
                      </span>
                      {e.note && <p className="text-xs text-ink-400 mt-2">{e.note}</p>}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
