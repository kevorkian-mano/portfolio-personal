import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, GraduationCap, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../components/icons/Brand'
import CompanyLogo from '../components/CompanyLogo'
import ProjectMedia from '../components/ProjectMedia'
import Reveal from '../components/Reveal'
import { profile, experiences, projects, stats } from '../data/portfolio'

export default function Home() {
  const latestRole = experiences[0]
  const featured = projects.slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white border-b border-ink-100">
        <div className="absolute inset-0 dot-pattern opacity-60" />

        <div className="relative container-content py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-ink-200 shadow-sm mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 rounded-full bg-ink-400 opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ink-900" />
              </span>
              <span className="text-xs font-medium text-ink-600 tracking-wide">Available for opportunities</span>
            </div>

            <h1 className="animate-fade-in-up animate-delay-100 text-4xl md:text-6xl font-semibold text-ink-900 tracking-tight leading-[1.05] mb-6">
              Software engineer building <span className="font-serif italic font-normal">reliable</span> systems.
            </h1>

            <p className="animate-fade-in-up animate-delay-200 text-lg text-ink-500 leading-relaxed max-w-2xl mb-10">
              I'm Manuel — a Software Engineering student at GIU Cairo with a minor in Data Science & AI. I build full-stack apps, cloud-native platforms, and AI-powered tools.
            </p>

            <div className="animate-fade-in-up animate-delay-300 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-ink-900 text-white text-sm font-medium rounded-lg hover:bg-ink-800 transition-colors"
              >
                View projects
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-ink-200 text-ink-700 text-sm font-medium rounded-lg hover:border-ink-300 hover:text-ink-900 hover:shadow-sm transition-all"
              >
                Get in touch
              </Link>
            </div>

            <div className="animate-fade-in-up animate-delay-400 mt-12 pt-8 border-t border-ink-100 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-500">
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} className="text-ink-400" /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <GraduationCap size={14} className="text-ink-400" /> GIU · Expected Jun 2027
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-ink-900 transition-colors"
              >
                <GithubIcon size={13} /> kevorkian-mano
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-ink-100 bg-white">
        <div className="container-content">
          <dl className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-ink-100">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 60} className="py-8 px-5 first:pl-0 text-center md:text-left">
                <dt className="text-3xl md:text-4xl font-semibold text-ink-900 tracking-tight font-mono">{s.value}</dt>
                <dd className="mt-1.5 text-xs text-ink-500 leading-snug">{s.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* CURRENTLY */}
      <section className="py-16 md:py-20">
        <div className="container-content">
          <Reveal className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[11px] font-semibold text-ink-400 tracking-[0.18em] uppercase mb-2">Currently</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink-900 tracking-tight">
                Where I am now
              </h2>
            </div>
            <Link to="/experience" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-ink-500 hover:text-ink-900 group">
              All experience
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Reveal>

          <Reveal>
            <Link to="/experience" className="block bg-white border border-ink-200 rounded-2xl p-6 md:p-7 hover:border-ink-300 hover:shadow-sm transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <CompanyLogo company={latestRole.company} size="lg" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-ink-900">{latestRole.company}</h3>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border border-ink-200 text-ink-600 text-[10px] font-semibold tracking-wide uppercase rounded-full">
                      <span className="w-1 h-1 rounded-full bg-ink-900" />
                      Current
                    </span>
                  </div>
                  <p className="text-sm text-ink-600 font-medium">{latestRole.role}</p>
                </div>
                <span className="shrink-0 text-xs text-ink-400 whitespace-nowrap">{latestRole.period}</span>
              </div>
              <p className="text-sm text-ink-500 leading-relaxed">{latestRole.bullets[0]}</p>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-16 md:py-20 border-t border-ink-100 bg-white">
        <div className="container-content">
          <Reveal className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[11px] font-semibold text-ink-400 tracking-[0.18em] uppercase mb-2">Featured work</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink-900 tracking-tight">
                Selected projects
              </h2>
            </div>
            <Link to="/projects" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-ink-500 hover:text-ink-900 group">
              All projects
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block h-full border border-ink-200 rounded-2xl overflow-hidden hover:border-ink-300 hover:shadow-md transition-all"
                >
                  <ProjectMedia project={p} />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-medium text-ink-600 bg-ink-50 border border-ink-100 px-2 py-0.5 rounded-full">
                        {p.tag}
                      </span>
                      <span className="text-[11px] text-ink-400">{p.date}</span>
                      <ArrowUpRight
                        size={15}
                        className="ml-auto text-ink-300 group-hover:text-ink-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                      />
                    </div>
                    <h3 className="text-[15px] font-semibold text-ink-900 leading-snug mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-sm text-ink-500 leading-relaxed line-clamp-2">
                      {p.bullets[0]}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 border-t border-ink-100">
        <div className="container-content">
          <Reveal className="relative overflow-hidden bg-ink-900 rounded-2xl p-10 md:p-14 text-center">
            <div className="absolute inset-0 dot-pattern opacity-[0.06]" />
            <div className="relative">
              <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-3">
                Let's build something together.
              </h2>
              <p className="text-ink-300 mb-8 max-w-lg mx-auto text-sm md:text-base">
                Open to internships, full-time roles, research collaborations, and interesting side projects.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-ink-900 text-sm font-medium rounded-lg hover:bg-ink-100 transition-colors group"
              >
                Get in touch
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
