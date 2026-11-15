import { Mail, Award, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/icons/Brand'
import PageHeader from '../components/PageHeader'
import { profile } from '../data/portfolio'

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'Manuel Haik Kevorkian', href: profile.linkedin },
  { icon: GithubIcon, label: 'GitHub', value: 'kevorkian-mano', href: profile.github },
  { icon: Award, label: 'Credly', value: 'Badges & certifications', href: profile.credly },
]

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk."
        description="Open to internships, full-time roles, research collaborations, and interesting side projects."
      />

      <section className="py-14 md:py-16">
        <div className="container-content">
          <div className="grid md:grid-cols-5 gap-8">
            <aside className="md:col-span-2 space-y-6">
              {[
                { icon: MapPin, label: 'Location', value: profile.location, href: null },
                { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label}>
                  <p className="text-[11px] font-semibold text-ink-400 uppercase tracking-[0.18em] mb-2">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-ink-900 inline-flex items-center gap-2 hover:text-ink-600 transition-colors">
                      <Icon size={14} className="text-ink-500" /> {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-ink-900 inline-flex items-center gap-2">
                      <Icon size={14} className="text-ink-500" /> {value}
                    </p>
                  )}
                </div>
              ))}
              <div>
                <p className="text-[11px] font-semibold text-ink-400 uppercase tracking-[0.18em] mb-2">Response time</p>
                <p className="text-sm font-medium text-ink-900">Typically within 24 hours</p>
              </div>
            </aside>

            <div className="md:col-span-3 grid sm:grid-cols-2 gap-3">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') || href.startsWith('tel') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="group relative bg-white border border-ink-200 rounded-2xl p-5 hover:border-ink-300 hover:shadow-sm transition-all"
                >
                  <ArrowUpRight
                    size={14}
                    className="absolute top-4 right-4 text-ink-300 group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                  <div className="w-9 h-9 rounded-md bg-ink-50 border border-ink-100 flex items-center justify-center mb-4 group-hover:bg-ink-900 group-hover:border-ink-900 transition-colors">
                    <Icon size={15} className="text-ink-700 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[11px] font-semibold text-ink-400 uppercase tracking-[0.18em] mb-1">{label}</p>
                  <p className="text-sm font-medium text-ink-900 leading-snug break-words pr-4">
                    {value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
